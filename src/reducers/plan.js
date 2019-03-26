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

const initialState = {
  requesting: false,
  message: '',
  plan_list: '',
  refreshPlan: false,
};

export default function plan(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PLAN_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
        refreshPlan: false,
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
      };
    case POST_PLAN_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case POST_PLAN_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        refreshPlan: true,
      };

    case POST_PLAN_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };

    case PATCH_PLAN_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case PATCH_PLAN_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        refreshPlan: true,
      };

    case PATCH_PLAN_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };
    case DELETE_PLAN_REQUEST:
      return {
        ...state,
        requesting: action.payload.requesting,
      };

    case DELETE_PLAN_SUCCESS:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
        refreshPlan: true,
      };

    case DELETE_PLAN_FAILURE:
      return {
        ...state,
        requesting: action.payload.requesting,
        message: action.payload.message,
      };

    default:
      return state;
  }
}
