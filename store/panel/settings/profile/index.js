const resetData = () => ({
  number: null,
});

export const state = () => ({
  apiModule: "/api/Profile",

  fields: {
    userName: null,
    loginName: null,
    oldPassword: null,
    newPassword: null,
    confirmPassword: null,
  },
});

export const getters = {
  fields: (state) => state.fields,
};

export const actions = {
  async setData({ commit }, payload) {
    commit("setFieldValue", {
      key: "userName",
      value: payload.name,
    });
    commit("setFieldValue", {
      key: "loginName",
      value: payload.loginName,
    });
  },

  async saveData({ state, commit }, payload) {
    const schema = {
      name: state.fields.userName,
      updateIdentity: true,
      identity: {
        name: state.fields.loginName,
        oldPassword: state.fields.oldPassword,
        newPassword: state.fields.newPassword,
        confirmPassword: state.fields.confirmPassword,
        key: "string",
      },
      culture: "string",
    };
    const data = await this.$axios.$put(`${state.apiModule}`, schema);
  },

  async bankAccountIdChange({ state, commit }, payload) {},
};

export const mutations = {
  resetData(state, val) {
    state.fields = val;
  },
  setFieldValue(state, { key, value }) {
    state.fields[key] = value;
  },
};
