import API from '../Api/api.js';
import { commonBackendCall, getConfig } from '../Api/api.js';
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_ALL_ROLE_USER_REQUEST,
  GET_ALL_ROLE_USER_SUCCESS,
  GET_ALL_ROLE_USER_FAILURE,
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILURE,
  POST_ADD_USERROLE_REQUEST,
  POST_ADD_USERROLE_SUCCESS,
  POST_ADD_USERROLE_FAILURE,
  DELETE_REMOVE_USERROLE_REQUEST,
  DELETE_REMOVE_USERROLE_SUCCESS,
  DELETE_REMOVE_USERROLE_FAILURE,
} from '../constants/User';

export function getUserList(userId) {
  return commonBackendCall(
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    API.get(`${'users/'}`, getConfig()),
  );
}
export function getAllRoles() {
  return commonBackendCall(
    GET_ALL_ROLE_USER_REQUEST,
    GET_ALL_ROLE_USER_SUCCESS,
    GET_ALL_ROLE_USER_FAILURE,
    API.get('roles', getConfig()),
  );
}
export function updateUser(userId, obj) {
  return commonBackendCall(
    PATCH_USER_REQUEST,
    PATCH_USER_SUCCESS,
    PATCH_USER_FAILURE,
    API.patch(`users/${userId}`, obj, getConfig()),
  );
}
export function addUserRole(userId, roleId, obj) {
  return commonBackendCall(
    POST_ADD_USERROLE_REQUEST,
    POST_ADD_USERROLE_SUCCESS,
    POST_ADD_USERROLE_FAILURE,
    API.post(`users/${userId}/roles/${roleId}`, obj, getConfig()),
  );
}
export function removeUserRole(userId, roleId) {
  return commonBackendCall(
    DELETE_REMOVE_USERROLE_REQUEST,
    DELETE_REMOVE_USERROLE_SUCCESS,
    DELETE_REMOVE_USERROLE_FAILURE,
    API.delete(`users/${userId}/roles/${roleId}`, getConfig()),
  );
}
