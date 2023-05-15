export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.BROWSER_TITLE,
    htmlAttrs: {
      lang: "en",
      dir: "",
      class: "arabic-dir",
    },
    bodyAttrs: {
      class: "light-layout",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: `/${process.env.LOGO}.png` },
      {
        rel: "stylesheet",
        type: "image/x-icon",
        href: `/${process.env.LOGO}.png`,
      },
    ],
  },

  pageTransition: {
    name: "my-page",
    mode: "out-in",
    // beforeEnter(el) {
    //     console.warn('Before enter...');
    // }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/bootstrap.min.css",
    "~/@core/scss/core.scss",
    "~/assets/scss/rtl.scss",
    "~/assets/scss/transition.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/scss/style.scss",
    "~/assets/scss/fonts.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/fetch.js",
    "~/plugins/mixins/index.js",
    "~/plugins/catchError.js",
    "~/plugins/filter.js",
    { src: "~/plugins/settings/lottie-player.js", mode: "client" },
    "~/plugins/components/fontawesome.js",
    "~plugins/components/vee-validate.js",
    "~plugins/components/checkbox.js",
    "~plugins/components/v-money.js",
    "~/plugins/mixins/allSelectedData.js",
    "~/plugins/mixins/pages/accounting/fiscalYears/index.js",
    "~/plugins/mixins/pages/accounting/accountingLevels/index.js",
    "~/plugins/mixins/pages/accounting/accountCategories/index.js",
    "~/plugins/mixins/pages/accounting/classifications/index.js",
    "~/plugins/mixins/pages/accounting/accounts/index.js",
    "~/plugins/mixins/pages/accounting/accounts/new.js",
    "~/plugins/mixins/pages/accounting/costCenters/index.js",
    "~/plugins/mixins/pages/accounting/banks/index.js",
    "~/plugins/mixins/pages/accounting/bankBranches/index.js",
    "~/plugins/mixins/pages/processes/paymentVoucher/index.js",
    "~/plugins/mixins/pages/processes/paymentVoucher/new/tab1.js",
    "~/plugins/mixins/pages/processes/paymentVoucher/new/tab2.js",
    "~/plugins/mixins/pages/processes/creditPaymentVoucher/index.js",
    "~/plugins/mixins/pages/processes/creditPaymentVoucher/new/tab1.js",
    "~/plugins/mixins/pages/processes/creditPaymentVoucher/new/tab2.js",
    "~/plugins/mixins/pages/processes/transactions/index.js",
    "~/plugins/mixins/pages/processes/transactions/new/index.js",
    "~/plugins/mixins/pages/processes/entries/index.js",
    "~/plugins/mixins/pages/processes/entries/new/index.js",
    "~/plugins/mixins/pages/leveling/bankReconciliation/index.js",
    "~/plugins/mixins/pages/leveling/bankReconciliation/new/index.js",
    "~/plugins/mixins/pages/leveling/checksManage/index.js",
    "~/plugins/mixins/pages/leveling/checksManage/new/index.js",
    "~/plugins/mixins/pages/authorizationManagement/authorizations/index.js",
    "~/plugins/mixins/pages/authorizationManagement/authorizations/new/index.js",
    "~/plugins/mixins/pages/mainSettings/permissions/index.js",
    "~/plugins/mixins/pages/mainSettings/users/index.js",
    "~/plugins/mixins/pages/mainSettings/activities/index.js",
    "~/plugins/mixins/pages/accreditations/index.js",
    "~/plugins/mixins/pages/accreditations/new/index.js",
    "~/plugins/mixins/pages/letters/lettersOfGuarantee/index.js",
    "~/plugins/mixins/pages/letters/lettersOfGuarantee/new/index.js",
    "~/plugins/mixins/ui/forms.js",
    "~/plugins/mixins/ui/transition.js",
    "~/plugins/mixins/ui/layout.js",
    "~/plugins/axios.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/moment",
    "@nuxtjs/dotenv",
    "@nuxtclub/feathericons",
    ["@alireza-ab/vue-persian-datepicker/nuxt", { PersianDate: true }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/proxy",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/i18n",
    "nuxt-vue-select",
    "@nuxtjs/moment",
    "cookie-universal-nuxt",
    [
      "vue-toastification/nuxt",
      {
        timeout: 3000,
        draggable: false,
        position: "top-center",
      },
    ],
  ],

  moment: {
    /* module options */
  },

  i18n: {
    lazy: true,
    langDir: "locales/",
    strategy: "no_prefix",
    locales: [
      { code: "en", iso: "en-US", file: "en", dir: "ltr" },
      { code: "ar", iso: "ar-EG", file: "ar", dir: "rtl" },
    ],
    defaultLocale: "ar",
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "access_token",
        },
        user: {
          property: "data",
        },
        endpoints: {
          login: {
            url: `${process.env.AUTH_LOGIN}/connect/token`,
            method: "post",
          },
          user: { url: "/api/profile", method: "get" },
          // login: { url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAd81BzrVH1na5-xuVw5sBT9at4rqjIBkE`, method: "post" },
          // user: false
        },
      },
    },
    redirect: {
      login: "/",
      logout: "/login",
      callback: "/",
      home: "/",
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // proxy: true,
    // baseURL: "https://stingray-app-dyyv9.ondigitalocean.app/",
  },

  // proxy: {
  //   "/api/": {
  //     target: "https://stingray-app-dyyv9.ondigitalocean.app/api",
  //     pathRewrite: { "^/api/": "" },
  //   },
  //   // proxy: true,
  //   // credentials: true,
  //   // prefix: '/api/',
  // },

  generate: {
    fallback: true,
  },

  loading: {
    color: " #7367f0",
    height: "4px",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    AUTH_LOGIN: process.env.AUTH_LOGIN,
    API_URL: process.env.API_URL,
    APP_TITLE: process.env.APP_TITLE,
    BROWSER_TITLE: process.env.BROWSER_TITLE,
    LOGO: process.env.LOGO,
  },
  publicRuntimeConfig: {
    baseURL: "https://stingray-app-dyyv9.ondigitalocean.app",
  },
  server: {
    port: process.env.PORT,
  },
};
