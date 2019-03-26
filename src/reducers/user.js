import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_ALL_ROLE_USER_REQUEST,
  GET_ALL_ROLE_USER_SUCCESS,
  GET_ALL_ROLE_USER_FAILURE,
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILURE,
  POST_ADD_USERROLE_REQUEST,
  POST_ADD_USERROLE_SUCCESS,
  POST_ADD_USERROLE_FAILURE,
  DELETE_REMOVE_USERROLE_REQUEST,
  DELETE_REMOVE_USERROLE_SUCCESS,
  DELETE_REMOVE_USERROLE_FAILURE,
} from '../constants/User';


const initialState = {
  requesting: false,
  message: '',
  user_data: '',
  user_list: [],
  refreshUser: false,
  role_all_list_user: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
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
      };

    case GET_ALL_ROLE_USER_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case GET_ALL_ROLE_USER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        requesting: action.payload.requesting,
        role_all_list_user: action.payload.data,
      };

    case GET_ALL_ROLE_USER_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };
    case PATCH_USER_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case PATCH_USER_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        refreshUser: true,
      };

    case PATCH_USER_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };


    case POST_ADD_USERROLE_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case POST_ADD_USERROLE_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        refreshUser: true,
      };

    case POST_ADD_USERROLE_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };

    case DELETE_REMOVE_USERROLE_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case DELETE_REMOVE_USERROLE_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        refreshUser: true,
      };

    case DELETE_REMOVE_USERROLE_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };
    default:
      return state;
  }
}
