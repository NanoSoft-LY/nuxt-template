import Vue from "vue";
// الحركات المالية جديد
const mixins = {
  data() {
    return {};
  },
  computed: {
    // الإدخالات
    getTypeMixinPPFNi() {
      // النوع
      return this.$store.getters["pages/processes/transactions/new/type"];
    },
    getPaymentMethodMixinPPFNi() {
      // طريقة الدفع
      return this.$store.getters["pages/processes/transactions/new/method"];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
