<template>
  <b-col :lg="lg" :md="md" :sm="sm" class="mt-1">
    <b-form-group>
      <label :class="required ? 'required' : ''"> {{ label }}</label>
      <b-form-input
        style="height: 35px"
        v-model="getContent"
        :disabled="disabled"
        :type="type"
        @input="$emit('changeData')"
      />
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  props: {
    label: String,
    module: String,
    storeKey: String,
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: [String, Number],
      default: "3",
    },
    md: {
      type: [String, Number],
      default: "6",
    },
    sm: {
      type: [String, Number],
      default: "12",
    },
  },
  computed: {
    getContent: {
      get: function () {
        return this.$store.getters[`${this.module}/${this.storeKey}`];
      },
      set(val) {
        this.$store.commit(`${this.module}/${this.storeKey}`, {
          key: this.storeKey,
          value: val,
        });
      },
    },
    // getContent: {
    //   get: function () {
    //     return this.$store.getters[`${this.module}/get${this.storeKey}`];
    //   },
    //   set(val) {
    //     this.$store.commit(`${this.module}/set${this.storeKey}`, {
    //       key: this.storeKey,
    //       value: val,
    //     });
    //   },
    // },
  },
};
</script>

<style lang="scss" scoped>
.required {
  position: relative;
  &::after {
    position: absolute;
    content: "*";
    font-size: 25px;
    bottom: -6px;
    left: -10px;
    color: #ea5455;
  }
}
</style>
