<template>
  <div class="app-content content">بيانات لوحة التحكم</div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      price: 123,
      money: {
        decimal: ",",
        precision: 3,
        masked: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
