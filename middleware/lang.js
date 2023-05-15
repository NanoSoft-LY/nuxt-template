export default async function ({ app, redirect, store, $i18n }) {
    const cookieRes = await app.$cookies.get('i18n_redirected')
    // app.$cookies.set("i18n_redirected", "ar");

    // if (cookieRes == "ar") {
    //     app.head.htmlAttrs.class = 'arabic-dir'
    //     store.state.dashDir = "rtl"
    // } else {
    //     app.head.htmlAttrs.class = 'english-dir'
    //     store.state.dashDir = "ltr"
    // }
}
