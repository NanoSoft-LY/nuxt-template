import Vue from "vue";
// إذونات الصرف جديد تاب 1
const mixins = {
  data() {
    return {};
  },
  computed: {
    getTabDisabledMixinPPDNt1() {
      return this.$store.getters[
        "pages/processes/creditPaymentVoucher/new/tab1/getTabDisabled"
      ];
    },

    // بيانات إذن الصرف
    getReleaseOrdersTypeMixinPPDNt1() {
      // نوع إذن الصرف
      return this.$store.getters[
        "pages/processes/creditPaymentVoucher/new/tab1/releaseOrdersType"
      ];
    },

    getSerialNumberMixinPPDNt1() {
      // الرقم التسلسلى
      return this.$store.getters[
        "pages/processes/creditPaymentVoucher/new/tab1/serialNumber"
      ];
    },

    getDoorNameMixinPPDNt1() {
      // اسم الباب
      return this.$store.getters[
        "pages/processes/creditPaymentVoucher/new/tab1/getDoorName"
      ];
    },

    getPaymentMethodMixinPPDNt1() {
      // طريقة الدفع
      return this.$store.getters[
        "pages/processes/creditPaymentVoucher/new/tab1/paymentMethod"
      ];
    },

    // تفاصيل الصرف
    getDebitAccountMixinPPDNt1() {
      // حساب المدين
      return this.$store.getters[
        "pages/processes/creditPaymentVoucher/new/tab1/getDebitAccount"
      ];
    },
    getTheValueMixinPPDNt1() {
      // القيمة
      return this.$store.getters[
        "pages/processes/creditPaymentVoucher/new/tab1/getTheValue"
      ];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
