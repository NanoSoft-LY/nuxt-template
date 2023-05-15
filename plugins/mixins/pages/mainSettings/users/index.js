import Vue from "vue";
const mixins = {
  data() {
    return {};
  },
  computed: {
    getAdvancedSearchMixinPMUi() {
      return this.$store.getters[
        "pages/mainSettings/users/getActiveAdvancedSearch"
      ];
    },
    getIsEditMixinPMUi() {
      return this.$store.getters["pages/mainSettings/users/isEdit"];
    },
    getIsChangePasswordPMUi() {
      return this.$store.getters["pages/mainSettings/users/changePassword"];
    },
  },
  methods: {},
};
Vue.mixin(mixins);
