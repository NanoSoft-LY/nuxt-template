<template>
  <b-col :lg="lg" :md="md" :sm="sm">
    <b-form-group :label="label">
      <div class="d-flex">
        <b-form-checkbox
          class="d-flex align-items-center custom-check"
          checked="false"
          name="check-button"
          switch
          inline
          v-model="fieldValue"
          :disabled="disabled"
        >
        </b-form-checkbox>
        <p class="mb-0 mt-1 me-3">{{ fieldValue ? ok : no }}</p>
      </div>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
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
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    ok: {
      type: String,
      default: "نعم",
    },
    no: {
      type: String,
      default: "لا",
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
