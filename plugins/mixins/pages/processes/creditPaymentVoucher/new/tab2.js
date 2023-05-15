import Vue from "vue";
// إذونات الصرف تاب 3
const mixins = {
  data() {
    return {};
  },
  computed: {
    // بيانات إذن الصرف
    getMultiplicityOfInstrumentsPPDNt2() {
      // تعدد الصكوك
      return this.$store.getters[
        "pages/processes/creditPaymentVoucher/new/tab2/getMultiplicityOfInstruments"
      ];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
