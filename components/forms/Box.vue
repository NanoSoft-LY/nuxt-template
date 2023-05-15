<template>
  <div class="box-cont d-flex ms-5">
    <b-form-checkbox
      class="box"
      :class="{ 'custome-font': fontSize }"
      v-model="getContent"
      :disabled="disabled"
    >
      {{ label }}
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    module: String,
    storeKey: String,
    fontSize: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
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
.box-cont {
  width: 100px;
  .box {
    width: 100%;
    // text-align: center;
  }
}
</style>
