<template>
  <b-row>
    <ButtonsButton @click.native="$emit(`searchData`)" label="بحث" />
    <ButtonsButton label="طباعة" />
  </b-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
