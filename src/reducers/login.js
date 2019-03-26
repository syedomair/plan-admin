// import { hashHistory } from 'react-router';
import {
  SET_EMAIL,
  SET_PASSWORD,
  SHOW_PASSWORD,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/Login';

const initialState = {
  username: '',
  password: '',
  requesting: false,
  showPassword: false,
  message: '',
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload.value,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload.value,
      };

    case SHOW_PASSWORD:
      return {
        ...state,
        showPassword: action.payload.value,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case LOGIN_SUCCESS:
      // if((action.payload.redirect != undefined) && (action.payload.redirect != "/login"))
      //    hashHistory.push(action.payload.redirect);
      // else
      /*
      if (action.payload.choose_network) hashHistory.push('/choose_network');
      else if (localStorage.getItem('is_admin') == '1') { hashHistory.push('/dashboard'); } else window.location.replace('/#/workflows/applications');
      */
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };

    default:
      return state;
  }
}
