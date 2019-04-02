import {
  GET_USER_TOTAL_REQUEST,
  GET_USER_TOTAL_SUCCESS,
  GET_USER_TOTAL_FAILURE,
  GET_USER_30DAY_REQUEST,
  GET_USER_30DAY_SUCCESS,
  GET_USER_30DAY_FAILURE,
  GET_PLAN_TOTAL_REQUEST,
  GET_PLAN_TOTAL_SUCCESS,
  GET_PLAN_TOTAL_FAILURE,
  GET_USER_REG_DATA_REQUEST,
  GET_USER_REG_DATA_SUCCESS,
  GET_USER_REG_DATA_FAILURE,
} from '../constants/Dashboard';

import {
  UNDEFINED_ERROR,
} from '../constants/Default';

const initialState = {
  requesting: false,
  message: '',
  total_user: '',
  total_user_30days: '',
  total_plan: '',
  user_reg_data: [],
};

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case UNDEFINED_ERROR:
      return {
        ...state,
        requesting: false,
      };

    case GET_USER_30DAY_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case GET_USER_30DAY_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        total_user_30days: action.payload.data,
      };

    case GET_USER_30DAY_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };
    case GET_USER_TOTAL_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case GET_USER_TOTAL_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        total_user: action.payload.data,
      };

    case GET_USER_TOTAL_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };

    case GET_PLAN_TOTAL_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case GET_PLAN_TOTAL_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        total_plan: action.payload.data,
      };

    case GET_PLAN_TOTAL_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };

    case GET_USER_REG_DATA_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case GET_USER_REG_DATA_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        user_reg_data: action.payload.data,
      };

    case GET_USER_REG_DATA_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };
    default:
      return state;
  }
}
