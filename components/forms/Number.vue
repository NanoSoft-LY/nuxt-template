<template>
  <b-col :lg="lg" :md="md" :sm="sm" class="mt-1">
    <b-form-group>
      <label class="d-block" :class="required ? 'required' : ''">
        {{ label }}</label
      >
      <cleave
        v-model="getContent"
        class="form-control"
        :raw="false"
        :options="number"
        :disabled="disabled"
        @input="$emit('changeData')"
      />
    </b-form-group>
  </b-col>
</template>

<script>
import Cleave from "vue-cleave-component";
export default {
  components: {
    Cleave,
  },
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
  data() {
    return {
      number: {
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
      },
    };
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
.money-input {
  border-radius: 0.357rem;
  height: 35px;
  width: 100%;
  margin-top: 3px;
  border: 1px solid rgb(216, 214, 222);
  &:disabled {
    background-color: #efefef;
    opacity: 1;
  }
}
.required {
  position: relative;
  width: fit-content;
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
