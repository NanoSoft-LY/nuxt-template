export default async function ({ app, redirect, store, $auth }) {
  if ($auth.$state.user.enableTowFact) {
    if ($auth.$state.user.isAuthenticated) {
      redirect("/");
    }
  } else {
    redirect("/");
  }
}
