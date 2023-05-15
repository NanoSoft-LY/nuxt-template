<template>
  <b-col :sm="sm" :md="md" :lg="lg" class="mt-1">
    <b-form-group>
      <label v-if="title != 'hid'" :class="{ required: required }">{{
        title
      }}</label>
      <v-select
        style="height: 35px"
        v-model="getContent"
        :reduce="(item) => (notId ? item : item.id)"
        :label="label"
        :dir="dashDirection"
        :clearable="clearable"
        :options="listKey ? getAutoList : allData"
        :disabled="disabled"
        :placeholder="placeHolder"
        @input="$emit('changeData', $event)"
      ></v-select>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  mounted() {},
  props: {
    title: {
      type: String,
      default: "hid",
    },
    label: String,
    storeKey: String,
    allData: Array,
    module: String,
    listKey: String,
    module: String,
    placeHolder: {
      type: String,
      default: "غير محدد",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    global: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    notId: {
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
    return {};
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
    getAutoList() {
      if (this.global) {
        return this.$store.getters[`global/get${this.listKey}`];
      } else {
        return this.$store.getters[`${this.module}/get${this.listKey}`];
      }
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
