export const state = () => ({
  layoutCollapsed: true,
  sidebar: false,
  mode: true,
  dashDir: "rtl",
});

export const getters = {
  getLayoutCollapsed(state) {
    return state.layoutCollapsed;
  },
  getSidebar(state) {
    return state.sidebar;
  },
  getMode(state) {
    return state.mode;
  },
  getDashDir(state) {
    return state.dashDir;
  },
};

export const actions = {
  // async nuxtServerInit({ commit, dispatch }, { $axios }) {
  //   const response = await $axios.$get("/.netlify/functions/nuxtServerInit");
  //   // const data = response.data;
  //   console.warn("response nuxtServerInit", response);
  //   // commit("setPosts", data);response
  // },
  toggleLayoutCollapsed({ dispatch, commit, state }, payload) {
    if (payload > 1200) {
      commit("setLayoutCollapsed", state.layoutCollapsed ? false : true);
    } else {
      dispatch("hideSidebar");
    }
  },
  hideSidebar({ commit, state }) {
    commit("setSidebar", state.sidebar ? false : true);
  },
  layoutMode({ commit }, payload) {
    commit("setMode", payload == "light" ? true : false);
  },
  changeDashDir({ commit }, payload) {
    if (payload == "ar") {
      commit("setDashDir", "rtl");
    } else {
      commit("setDashDir", "ltr");
    }
  },
  handleError({ commit }, payload) {
    console.warn("error payload", payload);
    let errors = [];
    for (const [key, value] of Object.entries(payload)) {
      errors.push(...value);
    }

    errors.forEach((el) => {
      this.$toast.error(el);
    });
  },
};

export const mutations = {
  setLayoutCollapsed(state, val) {
    state.layoutCollapsed = val;
  },
  setSidebar(state, val) {
    state.sidebar = val;
  },
  setMode(state, val) {
    state.mode = val;
  },
  setDashDir(state, val) {
    state.dashDir = val;
  },
};
