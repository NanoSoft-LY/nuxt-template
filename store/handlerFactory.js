export const state = () => ({});

export const getters = {};

export const actions = {
  displayErrors({ rootState }, payload) {
    const errors = [];
    Object.values(payload).forEach((value) => errors.push(...value));
    console.warn("errors", errors);
    errors.forEach((el, i) => {
      // const [errorLtr, errorRtl] = el.split("#&&");
      // const errorMessage = rootState.isRTL ? errorRtl : errorLtr;
      this.$toast.error(el);
    });
  },
};

export const mutations = {};
