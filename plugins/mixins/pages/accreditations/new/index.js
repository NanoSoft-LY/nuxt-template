import Vue from "vue";

const mixins = {
  data() {
    return {};
  },
  computed: {
    getNatureOfAccreditationMixinPCNi() {
      return this.$store.getters["pages/accreditations/new/nature"];
    },
    getContractValueMixinPCNi() {
      return this.$store.getters["pages/accreditations/new/value"];
    },
    getContractTotalValueMixinPCNi() {
      return this.$store.getters[
        "pages/accreditations/new/getContractTotalValue"
      ];
    },
    getGuidanceNumberMixinPCNi() {
      return this.$store.getters["pages/accreditations/new/getGuidanceNumber"];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
