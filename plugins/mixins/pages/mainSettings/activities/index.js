import Vue from "vue";
const mixins = {
  data() {
    return {};
  },
  computed: {
    getAllActivitiesData() {
      return this.$store.getters["pages/mainSettings/activities/getAllData"];
    },
    getActivitiesTotalItems() {
      return this.$store.getters["pages/mainSettings/activities/getTotalItems"];
    },
    getAllActivitiesUsers() {
      return this.$store.getters["pages/mainSettings/activities/getAllUsers"];
    },
    getAllActivitiesTypes() {
      return this.$store.getters["pages/mainSettings/activities/getAllTypes"];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
