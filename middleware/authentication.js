export default async function ({ redirect, $auth }) {
  if (!$auth.$state.loggedIn) {
    redirect("/login");
  } else if (
    $auth.$state.loggedIn &&
    $auth.$state.user.enableTowFact &&
    !$auth.$state.user.isAuthenticated
  ) {
    redirect("/verification");
  }
}
