import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from '../constants/User';
import {
  UNDEFINED_ERROR,
} from '../constants/Default';


const initialState = {
  requesting: false,
  message: '',
  error_code: '',
  user_data: '',
  user_list: [],
  refreshUser: false,
  role_all_list_user: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case UNDEFINED_ERROR:
      return {
        ...state,
        requesting: false,
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
        refreshUser: false,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        user_list: action.payload.data,
      };

    case GET_USER_FAILURE:
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
