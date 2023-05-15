<template>
  <b-row>
    <ButtonsButton :path="path" />
    <ButtonsButton label="بحث" @click.native="$emit('searchData')" />
  </b-row>
</template>

<script>
export default {
  props: {
    path: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
