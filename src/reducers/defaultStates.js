// import { hashHistory } from 'react-router';
import { AUTHORIZATION_REQUIRED } from '../constants/Default';

const initialState = {};

export default function defaultStates(state = initialState, action) {
  // const redirectPathName = hashHistory.getCurrentLocation().pathname;
  switch (action.type) {
    case AUTHORIZATION_REQUIRED:
      localStorage.clear();
      // hashHistory.push('/login');
      return { ...state };

    default:
      return state;
  }
}
