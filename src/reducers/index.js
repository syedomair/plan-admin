import { combineReducers } from 'redux';
import defaultStates from './defaultStates';
import login from './login';
import register from './register';
import user from './user';
import plan from './plan';

export default combineReducers({
  defaultStates,
  login,
  register,
  user,
  plan,
});
