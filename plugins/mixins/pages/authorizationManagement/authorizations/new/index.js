import Vue from "vue";
const mixins = {
  data() {
    return {};
  },
  computed: {
    getAuthorizedValueMixinPAANi() {
      return this.$store.getters[
        "pages/authorizationManagement/authorizations/new/authorizedValue"
      ];
    },
    getSpentValueMixinPAANi() {
      return this.$store.getters[
        "pages/authorizationManagement/authorizations/new/spentValue"
      ];
    },
    getAuthorizationBalaceMixinPAANi() {
      return this.$store.getters[
        "pages/authorizationManagement/authorizations/new/authorizationBalace"
      ];
    },
    getAccountBalanceMixinPAANi() {
      return this.$store.getters[
        "pages/authorizationManagement/authorizations/new/accountBalance"
      ];
    },
    getConfirmButtonMixinPAANi() {
      return this.$store.getters[
        "pages/authorizationManagement/authorizations/new/getConfirmButton"
      ];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
