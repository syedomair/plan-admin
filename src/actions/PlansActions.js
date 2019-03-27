import API from '../Api/api.js';
import { commonBackendCall, getConfig } from '../Api/common.js';
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


export function getPlans() {
  return commonBackendCall(
    GET_ALL_PLAN_REQUEST,
    GET_ALL_PLAN_SUCCESS,
    GET_ALL_PLAN_FAILURE,
    API.get('plans', getConfig()),
  );
}
export function createPlan(obj) {
  return commonBackendCall(
    POST_PLAN_REQUEST,
    POST_PLAN_SUCCESS,
    POST_PLAN_FAILURE,
    API.post('plans', obj, getConfig()),
  );
}
export function updatePlan(planId, obj) {
  return commonBackendCall(
    PATCH_PLAN_REQUEST,
    PATCH_PLAN_SUCCESS,
    PATCH_PLAN_FAILURE,
    API.patch(`plans/${planId}`, obj, getConfig()),
  );
}
export function deletePlan(planId) {
  return commonBackendCall(
    DELETE_PLAN_REQUEST,
    DELETE_PLAN_SUCCESS,
    DELETE_PLAN_FAILURE,
    API.delete(`plans/${planId}`, getConfig()),
  );
}
