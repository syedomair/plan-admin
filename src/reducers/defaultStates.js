import {
  AUTHORIZATION_REQUIRED,
  UNDEFINED_ERROR,
  RESET_UNDEFINED_ERROR,
} from '../constants/Default';

const initialState = {
  unDefinedError: false,
  error: '',
};

export default function defaultStates(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZATION_REQUIRED:
      localStorage.clear();
      window.location.reload();
      return { ...state, redirectToLogin: true };

    case UNDEFINED_ERROR:
      return { ...state, unDefinedError: true, error: action.payload.error };

    case RESET_UNDEFINED_ERROR:
      return { ...state, unDefinedError: false, error: '' };

    default:
      return state;
  }
}
