export const state = () => ({
  banks: [],
  doors: [],
  lists: {
    banks: [],
    doors: [],
    accounts: [
      // حساب المدين
    ],
    classifictions: [
      // التصنيف
    ],
    costCenters: [
      // مركز التكلفة
    ],
  },
});

export const getters = {
  lists: (state) => state.lists,
  getBanksList(state) {
    return state.banks;
  },
  getDoorsList(state) {
    return state.doors;
  },
};

export const actions = {
  getBanksDataFromApi({ commit }, payload) {
    commit("setBanksData", payload);
    commit("setGlobalLists", { key: "banks", value: payload });
  },
  getDoorsDataFromApi({ commit }, payload) {
    commit("setDoorsData", payload);
    commit("setGlobalLists", { key: "doors", value: payload });
  },
};

export const mutations = {
  setGlobalLists(state, { key, value }) {
    state.lists[key] = value;
  },
  setBanksData(state, val) {
    state.banks = val;
  },
  setDoorsData(state, val) {
    state.doors = val;
  },
};
