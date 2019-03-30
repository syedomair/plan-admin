import {
  GET_PLAN_REQUEST,
  GET_PLAN_SUCCESS,
  GET_PLAN_FAILURE,
  GET_PLAN_MSG_REQUEST,
  GET_PLAN_MSG_SUCCESS,
  GET_PLAN_MSG_FAILURE,
  POST_PLAN_MSG_REQUEST,
  POST_PLAN_MSG_SUCCESS,
  POST_PLAN_MSG_FAILURE,
  PATCH_PLAN_MSG_REQUEST,
  PATCH_PLAN_MSG_SUCCESS,
  PATCH_PLAN_MSG_FAILURE,
  DELETE_PLAN_MSG_REQUEST,
  DELETE_PLAN_MSG_SUCCESS,
  DELETE_PLAN_MSG_FAILURE,
} from '../constants/PlanMessage';

const initialState = {
  requesting: false,
  message: '',
  plan_msg_list: '',
  plan: {},
  refreshPlanMsg: false,
};

export default function plan(state = initialState, action) {
  switch (action.type) {
    case GET_PLAN_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case GET_PLAN_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        plan: action.payload.data,
      };

    case GET_PLAN_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };
    case GET_PLAN_MSG_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
        refreshPlanMsg: false,
      };

    case GET_PLAN_MSG_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        plan_msg_list: action.payload.data,
      };

    case GET_PLAN_MSG_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };
    case POST_PLAN_MSG_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case POST_PLAN_MSG_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        refreshPlanMsg: true,
      };

    case POST_PLAN_MSG_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };

    case PATCH_PLAN_MSG_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case PATCH_PLAN_MSG_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        refreshPlanMsg: true,
      };

    case PATCH_PLAN_MSG_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };
    case DELETE_PLAN_MSG_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case DELETE_PLAN_MSG_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        refreshPlanMsg: true,
      };

    case DELETE_PLAN_MSG_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };

    default:
      return state;
  }
}
