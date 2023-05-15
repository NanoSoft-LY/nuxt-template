<template>
  <b-col :lg="lg" :md="md" :sm="sm" class="mt-1">
    <b-form-group>
      <label
        >{{ label }}
        <span v-if="required" class="text-danger fs-5">*</span></label
      >
      <div class="d-flex">
        <b-form-checkbox
          class="d-flex align-items-center custom-check"
          checked="false"
          name="check-button"
          switch
          inline
          v-model="content"
          :disabled="disabled"
        >
        </b-form-checkbox>
        <p class="mb-0 mt-1 me-3">{{ content ? ok : no }}</p>
      </div>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  props: {
    label: String,
    module: String,
    storeKey: String,
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
    content: {
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
    // content: {
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
</style>