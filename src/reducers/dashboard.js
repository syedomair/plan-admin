import {
GET_USER_TOTAL_REQUEST ,
GET_USER_TOTAL_SUCCESS ,
GET_USER_TOTAL_FAILURE ,
GET_PLAN_TOTAL_REQUEST ,
GET_PLAN_TOTAL_SUCCESS ,
GET_PLAN_TOTAL_FAILURE ,
GET_USER_REG_DATA_REQUEST ,
GET_USER_REG_DATA_SUCCESS ,
GET_USER_REG_DATA_FAILURE ,
} from '../constants/Dashboard';

const initialState = {
  requesting: false,
  message: '',
  total_user: '',
  total_plan: '',
  user_reg_data: [],
};

export default function dashboard(state = initialState, action) {
  switch (action.type) {
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
