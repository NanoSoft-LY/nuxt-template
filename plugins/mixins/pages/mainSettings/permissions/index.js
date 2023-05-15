import Vue from 'vue'
const mixins = {
    data() {
        return {}
    },
    computed: {
        getAllPermissionsData() {
            return this.$store.getters["pages/mainSettings/permissions/getAllData"]
        },
        getAllClassificationsByAbilitiesData() {
            return this.$store.getters["pages/mainSettings/permissions/getClassificationsByAbilities"]
        },
        getPermissionsTotalItems() {
            return this.$store.getters["pages/mainSettings/permissions/getTotalItems"]
        },
    },

    methods: {},
};

Vue.mixin(mixins); 