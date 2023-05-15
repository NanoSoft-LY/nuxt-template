<template>
  <Nuxt />
</template>

<script>
export default {
  middleware: ["isAuthenticated"],
};
</script>

<style lang="scss">
@import "/@core/scss/vue/pages/page-auth.scss";
</style>
