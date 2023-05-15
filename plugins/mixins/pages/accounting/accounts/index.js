import Vue from 'vue'
const mixins = {
    data() {
        return {}
    },
    computed: {
        getAllAccountsData() {
            return this.$store.getters["pages/accounting/accounts/getAllData"]
        },
        getAccountsTotalItems() {
            return this.$store.getters["pages/accounting/accounts/getTotalItems"]
        },
    },

    methods: {}, 
};

Vue.mixin(mixins); 