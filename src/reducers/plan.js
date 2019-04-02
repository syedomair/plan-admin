import {
  GET_ALL_PLAN_REQUEST,
  GET_ALL_PLAN_SUCCESS,
  GET_ALL_PLAN_FAILURE,
  POST_PLAN_REQUEST,
  POST_PLAN_SUCCESS,
  POST_PLAN_FAILURE,
  PATCH_PLAN_REQUEST,
  PATCH_PLAN_SUCCESS,
  PATCH_PLAN_FAILURE,
  DELETE_PLAN_REQUEST,
  DELETE_PLAN_SUCCESS,
  DELETE_PLAN_FAILURE,
} from '../constants/Plan';
import {
  UNDEFINED_ERROR,
} from '../constants/Default';

const initialState = {
  requesting: false,
  message: '',
  success_message: '',
  error_code: '',
  plan_list: '',
  refreshPlan: false,
};

export default function plan(state = initialState, action) {
  switch (action.type) {
    case UNDEFINED_ERROR:
      return {
        ...state,
        requesting: false,
      };
    case GET_ALL_PLAN_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
        refreshPlan: false,
        message: '',
        success_message: '',
      };

    case GET_ALL_PLAN_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        plan_list: action.payload.data,
      };

    case GET_ALL_PLAN_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        error_code: action.payload.error_code,
      };
    case POST_PLAN_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: '',
        success_message: '',
      };

    case POST_PLAN_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        success_message: 'New Plan Created Successfully',
        refreshPlan: true,
      };

    case POST_PLAN_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        error_code: action.payload.error_code,
      };

    case PATCH_PLAN_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: '',
        success_message: '',
      };

    case PATCH_PLAN_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        success_message: 'Plan Updated Successfully.',
        refreshPlan: true,
      };

    case PATCH_PLAN_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        error_code: action.payload.error_code,
      };
    case DELETE_PLAN_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: '',
        success_message: '',
      };

    case DELETE_PLAN_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        success_message: 'Successfully deleted record.',
        refreshPlan: true,
      };

    case DELETE_PLAN_FAILURE:
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
