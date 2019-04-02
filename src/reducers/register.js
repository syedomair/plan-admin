import {
  SET_REGISTER_EMAIL,
  SET_REGISTER_FIRST_NAME,
  SET_REGISTER_LAST_NAME,
  SET_REGISTER_PASSWORD,
  SET_REGISTER_PASSWORD_CONFIRM,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../constants/Register';
import {
  UNDEFINED_ERROR,
} from '../constants/Default';

const initialState = {
  network: '',
  password: '',
  firstName: '',
  lastName: '',
  passwordConfirm: '',
  email: '',
  requesting: false,
  showPassword: false,
  message: '',
  error_code: '',
  messageType: '',
};

export default function register(state = initialState, action) {
  switch (action.type) {
    case UNDEFINED_ERROR:
      return {
        ...state,
        requesting: false,
      };
    case SET_REGISTER_EMAIL:
      return { ...state, email: action.payload.value };

    case SET_REGISTER_FIRST_NAME:
      return { ...state, firstName: action.payload.value };

    case SET_REGISTER_LAST_NAME:
      return { ...state, lastName: action.payload.value };

    case SET_REGISTER_PASSWORD:
      return { ...state, password: action.payload.value };

    case SET_REGISTER_PASSWORD_CONFIRM:
      return { ...state, passwordConfirm: action.payload.value };

    case REGISTER_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: '',
        error_code: '',
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        messageType: action.payload.messageType,
      };

    case REGISTER_FAILURE:
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
