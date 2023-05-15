import Vue from 'vue'
const mixins = {
    data() {
        return {}
    },
    computed: {
        getAllFiscalYearsData() {
            return this.$store.getters["pages/accounting/fiscalYears/getAllData"]
        },
        getFiscalYearsCostCenters() {
            return this.$store.getters["pages/accounting/fiscalYears/getCostCenters"]
        },
    },

    methods: {},
};

Vue.mixin(mixins); 