import {
  SET_REGISTER_NETWORK,
  SET_REGISTER_EMAIL,
  SET_REGISTER_FIRST_NAME,
  SET_REGISTER_LAST_NAME,
  SET_REGISTER_PASSWORD,
  SET_REGISTER_PASSWORD_CONFIRM,
  // SHOW_PASSWORD,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../constants/Register';

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
  messageType: '',
};

export default function register(state = initialState, action) {
  switch (action.type) {
    case SET_REGISTER_NETWORK:
      return { ...state, network: action.payload.value };

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
      return { ...state, requesting: action.payload.requesting };

    case REGISTER_SUCCESS:
      // hashHistory.push('/dashboard');
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
      };

    default:
      return state;
  }
}
