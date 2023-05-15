<template>
  <b-col
    :lg="lg"
    :md="md"
    :sm="sm"
    class="switch d-flex align-items-center justify-content-center mt-1"
  >
    <b-form-checkbox
      checked="false"
      name="check-button"
      switch
      inline
      v-model="content"
    >
      {{ label }}
    </b-form-checkbox>
  </b-col>
</template>

<script>
export default {
  props: {
    label: String,
    module: String,
    storeKey: String,
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
    content: {
      get: function () {
        return this.$store.getters[`${this.module}/get${this.storeKey}`];
      },
      set(val) {
        this.$store.commit(`${this.module}/set${this.storeKey}`, {
          key: this.storeKey,
          value: val,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.switch {
  height: 38px;
}
</style>