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
import {
  UNDEFINED_ERROR,
} from '../constants/Default';

const initialState = {
  requesting: false,
  message: '',
  success_message: '',
  error_code: '',
  plan_msg_list: '',
  plan: {},
  refreshPlanMsg: false,
};

export default function plan(state = initialState, action) {
  switch (action.type) {
    case UNDEFINED_ERROR:
      return {
        ...state,
        requesting: false,
      };
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
        error_code: action.payload.error_code,
      };
    case GET_PLAN_MSG_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
        refreshPlanMsg: false,
        message: '',
        success_message: '',
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
        error_code: action.payload.error_code,
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
        success_message: 'New Plan Message Created Successfully',
        refreshPlanMsg: true,
      };

    case POST_PLAN_MSG_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        error_code: action.payload.error_code,
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
        success_message: 'Plan Message Updated Successfully',
        refreshPlanMsg: true,
      };

    case PATCH_PLAN_MSG_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        error_code: action.payload.error_code,
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
        success_message: 'Plan Message Deleted Successfully',
        refreshPlanMsg: true,
      };

    case DELETE_PLAN_MSG_FAILURE:
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
