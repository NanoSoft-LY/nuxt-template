<template>
  <b-col :lg="lg" :md="md" :sm="sm">
    <b-form-group :class="{ 'required-label': required }" :label="label">
      <b-input-group>
        <cleave
          v-model="fieldValue"
          class="form-control"
          :raw="false"
          :options="number"
          :disabled="disabled"
          @input="$emit('changeData')"
        />
      </b-input-group>
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
    label: {
      type: String,
      default: null,
    },
    moduleName: {
      type: String,
      default: null,
    },
    storeKey: {
      type: String,
      default: null,
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
      type: String,
      default: "3",
    },
    md: {
      type: String,
      default: "6",
    },
    sm: {
      type: String,
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
    fieldValue: {
      get() {
        const fields = this.$store.getters[`${this.moduleName}/fields`];
        return fields[this.storeKey];
      },
      set(val) {
        this.$store.commit(`${this.moduleName}/setFieldValue`, {
          key: this.storeKey,
          value: val,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
