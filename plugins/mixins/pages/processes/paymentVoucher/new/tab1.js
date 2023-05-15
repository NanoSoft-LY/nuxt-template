import Vue from "vue";
// إذونات الصرف جديد تاب 1
const mixins = {
  data() {
    return {};
  },
  computed: {
    getTabDisabledMixinPPENt1() {
      return this.$store.getters[
        "pages/processes/paymentVoucher/new/tab1/getTabDisabled"
      ];
    },

    getExchangesDataMixinPPENt1() {
      return this.$store.getters[
        "pages/processes/paymentVoucher/new/tab1/getExchangesData"
      ];
    },

    // بيانات إذن الصرف
    getReleaseOrdersTypeMixinPPENt1() {
      // نوع إذن الصرف xxxxxxxxxxxxxxxxxxxxxxxxxx
      return this.$store.getters[
        "pages/processes/paymentVoucher/new/tab1/releaseOrdersType" 
      ];
    },

    getSerialNumberMixinPPENt1() {
      // الرقم التسلسلى xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      return this.$store.getters[
        "pages/processes/paymentVoucher/new/tab1/serialNumber"
      ];
    },

    getDoorNameMixinPPENt1() {
      // اسم الباب xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      return this.$store.getters[
        "pages/processes/paymentVoucher/new/tab1/getDoorName"
      ];
    },

    getPaymentMethodMixinPPENt1() {
      // طريقة الدفع xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      return this.$store.getters[
        "pages/processes/paymentVoucher/new/tab1/paymentMethod"
      ];
    },

    // تفاصيل الصرف
    getDebitAccountMixinPPENt1() {
      // حساب المدين
      return this.$store.getters[
        "pages/processes/paymentVoucher/new/tab1/getDebitAccount"
      ];
    },

    getTheValueMixinPPENt1() {
      // القيمة
      return this.$store.getters[
        "pages/processes/paymentVoucher/new/tab1/getTheValue"
      ];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
