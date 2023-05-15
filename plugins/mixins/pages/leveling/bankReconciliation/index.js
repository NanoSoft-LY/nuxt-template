import Vue from 'vue'
const mixins = {
    data() {
        return {}
    },
    computed: {
        getAllBankReconciliationData() {
            return this.$store.getters["pages/leveling/bankReconciliation/getAllData"]
        },
        getBankReconciliationTotalItems() {
            return this.$store.getters["pages/leveling/bankReconciliation/getTotalItems"]
        },
    },

    methods: {},
};

Vue.mixin(mixins); 