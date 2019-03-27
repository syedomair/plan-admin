const requireNoAuth = (nextState, replace) => {
  if (localStorage.getItem('token')) {
    replace({
      pathname: '/dashboard',
    });
  }
};
const requireAuth = (nextState, replace) => {
  if (!localStorage.getItem('token')) {
    replace({
      pathname: '/public/login',
    });
  }
};

module.exports = {
  requireNoAuth,
  requireAuth,
};
