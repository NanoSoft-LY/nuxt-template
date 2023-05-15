export default async function ({ $axios, store, app }) {
  // // Banks
  // const banks_url = `${process.env.API_URL}/api/accounts/get_account_by_paymentmethod?method=2`;
  // const { data } = await $axios.$get(banks_url);
  // store.dispatch("global/getBanksDataFromApi", data);
  // Doors
  // const doors_url = "/api/accounts/get_account_by_paymentmethod?accountType=3";
  // const doors = await $axios.$get(doors_url);
  // store.dispatch("global/getDoorsDataFromApi", doors.data);
  // //
  // const url = "/api/release-orders/new";
  // const res = await $axios.$get(url);
  // store.commit("global/setGlobalLists", {
  //   key: "accounts",
  //   value: res.data.accounts,
  // });
  // store.commit("global/setGlobalLists", {
  //   key: "classifictions",
  //   value: res.data.classifictions,
  // });
  // store.commit("global/setGlobalLists", {
  //   key: "costCenters",
  //   value: res.data.costCenters,
  // });
  // // get All belts
  // const belts = await $axios.$get('belts')
  // store.commit('global/setList', {
  //   key: 'belts',
  //   value: belts.data.data
  // })
}
