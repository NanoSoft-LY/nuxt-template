import Vue from "vue";
const mixins = {
  data() {
    return {};
  },
  computed: {
    getBeginOfSequenceMixinPABi() {
      return this.$store.getters["pages/accounting/banks/beginOfSequence"];
    },
    getNumberPABi() {
      return this.$store.getters["pages/accounting/banks/number"];
    },
    getEndOfSequenceMixinPABi() {
      return this.$store.getters["pages/accounting/banks/endOfSequence"];
    },
    getStateMixinPABi() {
      return this.$store.getters["pages/accounting/banks/state"];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
