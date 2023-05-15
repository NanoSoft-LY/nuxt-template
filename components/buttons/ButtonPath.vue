<template>
  <b-col :sm="sm" :md="md" :lg="lg" class="text-center mt-1">
    <b-button
      class="mx-2 my-button"
      :to="path"
      :class="width"
      :variant="color"
      :disabled="disabled"
    >
      {{ title }}
    </b-button>
  </b-col>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "جديد",
    },

    path: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: "w-50",
    },
    color: {
      type: String,
      default: "primary",
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
};
</script>

<style lang="scss" scoped></style>
