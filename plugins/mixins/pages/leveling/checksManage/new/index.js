import Vue from "vue";
const mixins = {
  data() {
    return {};
  },
  computed: {
    // الإدخالات
    getStateMixinPLUNi() {
      // النوع
      return this.$store.getters["pages/leveling/checksManage/new/state"];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
