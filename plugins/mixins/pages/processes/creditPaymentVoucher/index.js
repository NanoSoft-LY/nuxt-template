import Vue from "vue";
// إذونات الصرف
const mixins = {
  data() {
    return {};
  },
  computed: {
    getAdvancedSearchMixinPPDi() {
      return this.$store.getters[
        "pages/processes/creditPaymentVoucher/getActiveAdvancedSearch"
      ];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
