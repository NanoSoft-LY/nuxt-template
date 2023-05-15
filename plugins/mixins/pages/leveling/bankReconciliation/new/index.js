import Vue from "vue";
const mixins = {
  data() {
    return {};
  },
  computed: {
    getIsClosed() {
      return this.$store.getters[
        "pages/leveling/bankReconciliation/new/getIsClosed"
      ];
    },
    getDisabledType() {
      return this.$store.getters[
        "pages/leveling/bankReconciliation/new/getDisabledType"
      ];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
