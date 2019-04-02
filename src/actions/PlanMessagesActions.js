import API from '../Api/api.js';
import { commonBackendCall, getConfig } from '../Api/common.js';
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


export function getPlan(planId) {
  return commonBackendCall(
    GET_PLAN_REQUEST,
    GET_PLAN_SUCCESS,
    GET_PLAN_FAILURE,
    API.get(`plans/${planId}`, getConfig()),
  );
}
export function getPlanMsg(planId) {
  return commonBackendCall(
    GET_PLAN_MSG_REQUEST,
    GET_PLAN_MSG_SUCCESS,
    GET_PLAN_MSG_FAILURE,
    API.get(`plan-messages/plan/${planId}`, getConfig()),
  );
}
export function createPlanMsg(planId, obj) {
  return commonBackendCall(
    POST_PLAN_MSG_REQUEST,
    POST_PLAN_MSG_SUCCESS,
    POST_PLAN_MSG_FAILURE,
    API.post(`plan-messages/${planId}`, obj, getConfig()),
  );
}
export function updatePlanMsg(planMsgId, obj) {
  return commonBackendCall(
    PATCH_PLAN_MSG_REQUEST,
    PATCH_PLAN_MSG_SUCCESS,
    PATCH_PLAN_MSG_FAILURE,
    API.patch(`plan-messages/${planMsgId}`, obj, getConfig()),
  );
}
export function deletePlanMsg(planMsgId) {
  return commonBackendCall(
    DELETE_PLAN_MSG_REQUEST,
    DELETE_PLAN_MSG_SUCCESS,
    DELETE_PLAN_MSG_FAILURE,
    API.delete(`plan-messages/${planMsgId}`, getConfig()),
  );
}
