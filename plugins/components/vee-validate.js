import Vue from "vue";
import { ValidationObserver, localize, extend } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import ar from 'vee-validate/dist/locale/ar.json';



localize({
    ar
});
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);