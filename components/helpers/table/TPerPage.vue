<template>
  <b-col cols="12" sm="6" md="4" class="my-1">
    <b-form-group class="mb-0">
      <label class="d-inline-block text-sm-left mr-50">لكل صفحة</label>
      <slot name="content" />
    </b-form-group>
  </b-col>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
