import Vue from "vue";
// الحركات المالية جديد
const mixins = {
  data() {
    return {};
  },
  computed: {
    // البحث
    getDocumentStatusMixinPPFi() {
      // حالة المستند
      return this.$store.getters["pages/processes/transactions/documentStatus"];
    },
  },

  methods: {},
};

Vue.mixin(mixins);
