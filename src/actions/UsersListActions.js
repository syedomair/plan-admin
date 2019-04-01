import API from '../Api/api.js';
import { commonBackendCall, getConfig } from '../Api/common.js';
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from '../constants/User';

export function getUserList(userId) {
  return commonBackendCall(
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    API.get(`${'users/'}`, getConfig()),
  );
}
