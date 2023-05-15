<template>
  <b-col :lg="lg" :md="md" :sm="sm" class="date-picker-form">
    <b-form-group :class="{ 'required-label': required }" :label="label">
      <b-input-group>
        <b-form-input
          v-model="fieldValue"
          :placeholder="label"
          :disabled="disabled"
          type="date"
        />
      </b-input-group>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  name: "date",
  props: {
    moduleName: {
      type: String,
      default: null,
    },
    storeKey: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    moment: {
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
  computed: {
    fieldValue: {
      get() {
        const fields = this.$store.getters[`${this.moduleName}/fields`];
        const value = fields[this.storeKey];
        return this.moment ? this.$moment(value).format("YYYY-MM-DD") : value;
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

<style lang="scss">
.date-picker-form {
  .form-control {
    flex-direction: row-reverse;
    text-align: right;
  }
}
</style>
