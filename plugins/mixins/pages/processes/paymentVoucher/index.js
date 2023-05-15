import Vue from "vue";
// إذونات الصرف
const mixins = {
  data() {
    return {};
  },
  computed: {
    getAdvancedSearchMixinPPeP() {
      return this.$store.getters[
        "pages/processes/paymentVoucher/getActiveAdvancedSearch"
      ];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
