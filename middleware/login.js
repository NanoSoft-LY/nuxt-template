export default async function ({ app, redirect, store, $auth }) {
  if ($auth.$state.loggedIn && $auth.$state.user.enableTowFact)
    redirect("/verification");
}
