import Vue from 'vue'
// القيود جديد
const mixins = {
    data() {
        return {}
    },
    computed: {
        getValueMixinPLLNi() {
            return this.$store.getters["pages/letters/lettersOfGuarantee/new/getValue"]
        },
        getDateMixinPLLNi() {
            return this.$store.getters["pages/letters/lettersOfGuarantee/new/getDate"]
        },
        getLetterOfLetterNumberMixinPLLNi() {
            return this.$store.getters["pages/letters/lettersOfGuarantee/new/getLetterOfLetterNumber"]
        },
    },

    methods: {},
};

Vue.mixin(mixins); 