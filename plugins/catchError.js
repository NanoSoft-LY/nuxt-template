export default function ({ $axios, store, $toast }) {
  // eslint-disable-next-line arrow-parens
  $axios.onError((error) => {
    if (error.response.config.url == "/api/auth/logout") {
      return;
    }
    // console.warn("error 1", error.response);
    if (!error.response?.data.errors) {
      // console.warn("error 2", error.response);
      if (error.response.data.message) {
        $toast.error(error.response.data.message);
      } else {
        if (error.response.data.error_description) {
          $toast.error(error.response.data.error_description);
        } else {
          $toast.error(error.response.data);
        }
      }
    } else {
      if (error.response) {
        console.warn("error 2", error.response);
        if (typeof error.response.data.message == "string") {
          console.warn("error 3", error.response);
        } else {
          console.warn("error 4", error.response);
          store.dispatch(
            "handlerFactory/displayErrors",
            error.response.data.errors
          );
        }
      }
    }
  });
}
