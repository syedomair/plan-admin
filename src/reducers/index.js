import { combineReducers } from 'redux';
import defaultStates from './defaultStates';
import login from './login';
import register from './register';
import user from './user';
import plan from './plan';
import planMsg from './planMsg';
import dashboard from './dashboard';

export default combineReducers({
  defaultStates,
  login,
  register,
  user,
  plan,
  planMsg,
  dashboard,
});
