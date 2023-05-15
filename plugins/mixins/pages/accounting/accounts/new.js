import Vue from "vue";
const mixins = {
  data() {
    return {};
  },
  computed: {
    getgetDisabledStateMAAn() {
      return this.$store.getters[
        "pages/accounting/accounts/new/getDisabledState"
      ];
    },
    getBankInfoMAAn() {
      return this.$store.getters["pages/accounting/accounts/new/getBankInfo"];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
