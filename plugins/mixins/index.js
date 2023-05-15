// We haven't added icon's computed property because it makes this mixin coupled with UI

import Vue from "vue";

const mixins = {
  computed: {
    // appName() {
    //   return this.$store.getters.appName;
    // },
    // appTitle() {
    //   return this.$store.getters.appTitle;
    // },
  },

  methods: {},
};

Vue.mixin(mixins);
