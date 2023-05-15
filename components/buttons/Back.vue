<template>
  <b-col :sm="sm" :md="md" :lg="lg" class="text-center mt-1">
    <b-button class="mx-2 my-button" :class="width" :variant="color">
      <nuxt-link :to="$route.path.replace('/new', '')"> {{ label }} </nuxt-link>
    </b-button>
  </b-col>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "عودة للقائمة",
    },
    color: {
      type: String,
      default: "primary",
    },
    width: {
      type: String,
      default: "w-50",
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

<style lang="scss" scoped>
.my-button {
  height: 38px;
  padding: 0;
  a {
    color: unset;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 2.5;
  }
  @media (max-width: 400px) {
    margin-inline: 0 !important;
  }
}
</style>
