import Vue from 'vue'
// القيود
const mixins = {
    data() {
        return {}
    },
    computed: {
        getAdvancedSearchMixinPLLi() {
            return this.$store.getters["pages/letters/lettersOfGuarantee/getActiveAdvancedSearch"]
        },
    },

    methods: {},
};

Vue.mixin(mixins); 