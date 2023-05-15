import Vue from "vue";
// القيود
const mixins = {
  data() {
    return {};
  },
  computed: {
    getAdvancedSearchMixinPPLi() {
      return this.$store.getters[
        "pages/processes/entries/getActiveAdvancedSearch"
      ];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
