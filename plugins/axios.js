export default function ({ $axios, $auth, store }) {
  $axios.onRequest((config) => {
    if (config.url == "/api/auth/logout") {
      // console.warn("config.url", config.url);
      return;
    }
  });
}
