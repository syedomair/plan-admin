const requireNoAuth = (nextState, replace) => {
  if (localStorage.getItem('access_token')) {
    replace({
      pathname: '/dashboard',
    });
  }
};
const requireAuth = (nextState, replace) => {
  if (!localStorage.getItem('access_token')) {
    replace({
      pathname: '/pages/login-page',
    });
  }
};

module.exports = {
  requireNoAuth,
  requireAuth,
};
