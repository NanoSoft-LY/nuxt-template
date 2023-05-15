import Vue from "vue";
// القيود جديد
const mixins = {
  data() {
    return {};
  },
  computed: {
    getStateMixinPPLNi() {
      return this.$store.getters["pages/processes/entries/new/getState"];
    },

    // ************************************* use **************
    getCreditorMixinPPLNi() {
      return this.$store.getters["pages/processes/entries/new/credit"];
    },
    getDebtorMixinPPLNi() {
      return this.$store.getters["pages/processes/entries/new/debit"];
    },
    getTotalDebtorMixinPPLNi() {
      return this.$store.getters["pages/processes/entries/new/getTotalDebtor"];
    },
    getTotalCreditorMixinPPLNi() {
      return this.$store.getters[
        "pages/processes/entries/new/getTotalCreditor"
      ];
    },
    getDifferenceBetweenDebtorAndCreditor() {
      return this.$store.getters["pages/processes/entries/new/getDifference"];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
