import API from '../Api/api.js';
import { commonBackendCall, getConfig } from '../Api/common.js';
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


export function getTotalUsersLast30Days() {
  return commonBackendCall(
    GET_USER_30DAY_REQUEST,
    GET_USER_30DAY_SUCCESS,
    GET_USER_30DAY_FAILURE,
    API.get('stats/user-count-30-days', getConfig()),
  );
}
export function getTotalUsers() {
  return commonBackendCall(
    GET_USER_TOTAL_REQUEST,
    GET_USER_TOTAL_SUCCESS,
    GET_USER_TOTAL_FAILURE,
    API.get('stats/user-count', getConfig()),
  );
}
export function getTotalPlans() {
  return commonBackendCall(
    GET_PLAN_TOTAL_REQUEST,
    GET_PLAN_TOTAL_SUCCESS,
    GET_PLAN_TOTAL_FAILURE,
    API.get('stats/plan-data', getConfig()),
  );
}
export function getUserRegData() {
  return commonBackendCall(
    GET_USER_REG_DATA_REQUEST,
    GET_USER_REG_DATA_SUCCESS,
    GET_USER_REG_DATA_FAILURE,
    API.get('stats/user-reg-data', getConfig()),
  );
}
