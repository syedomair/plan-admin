import {
  SET_EMAIL,
  SET_PASSWORD,
  SHOW_PASSWORD,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/Login';
import {
  UNDEFINED_ERROR,
} from '../constants/Default';

const initialState = {
  username: '',
  password: '',
  requesting: false,
  showPassword: false,
  message: '',
  error_code: '',
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case UNDEFINED_ERROR:
      return {
        ...state,
        requesting: false,
      };
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
        message: '',
        error_code: '',
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        error_code: action.payload.error_code,
      };

    default:
      return state;
  }
}
