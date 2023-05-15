<template>
  <footer class="footer footer-light footer-static">
    <div class="mb-0 d-flex justify-content-between">
      <p>
        <span class="d-none d-sm-inline-block">كل الحقوق محفوظة</span>
        <span class="d-block d-md-inline-block">
          كل الحقوق محفوظة ,
          <nuxt-link to="" rel="noopener" target="_blank" class="ml-25">
            Pixinvent
          </nuxt-link>
        </span>
      </p>
      <p>
        تم التصميم بواسطة
        <heart-icon size="1.5x" class="custom-class"></heart-icon>
      </p>
    </div>
  </footer>
</template>

<script>
import { HeartIcon } from "vue-feather-icons";

export default {
  components: {
    HeartIcon,
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 1199.98px) {
  .footer {
    margin-left: 0 !important;
  }
}
</style>
