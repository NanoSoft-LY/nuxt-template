import Vue from "vue";
// إذونات الصرف تاب 3
const mixins = {
  data() {
    return {};
  },
  computed: {
    // بيانات إذن الصرف
    getMultiplicityOfInstrumentsPPENt2() {
      // تعدد الصكوك
      return this.$store.getters[
        "pages/processes/paymentVoucher/new/tab2/getMultiplicityOfInstruments"
      ];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
