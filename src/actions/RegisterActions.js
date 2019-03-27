import API from '../Api/api.js';
//import { commonBackendCall, getConfig } from '../Api/common.js';
import {
  SET_REGISTER_NETWORK,
  SET_REGISTER_EMAIL,
  SET_REGISTER_FIRST_NAME,
  SET_REGISTER_LAST_NAME,
  SET_REGISTER_PASSWORD,
  SET_REGISTER_PASSWORD_CONFIRM,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../constants/Register';

export function setNetwork(value) {
  return (dispatch) => {
    dispatch({
      type: SET_REGISTER_NETWORK,
      payload: {
        value,
      },
    });
  };
}

export function setEmail(value) {
  return (dispatch) => {
    dispatch({
      type: SET_REGISTER_EMAIL,
      payload: {
        value,
      },
    });
  };
}

export function setFirstName(value) {
  return (dispatch) => {
    dispatch({
      type: SET_REGISTER_FIRST_NAME,
      payload: {
        value,
      },
    });
  };
}
export function setLastName(value) {
  return (dispatch) => {
    dispatch({
      type: SET_REGISTER_LAST_NAME,
      payload: {
        value,
      },
    });
  };
}
export function setPassword(value) {
  return (dispatch) => {
    dispatch({
      type: SET_REGISTER_PASSWORD,
      payload: {
        value,
      },
    });
  };
}

export function setPasswordConfirm(value) {
  return (dispatch) => {
    dispatch({
      type: SET_REGISTER_PASSWORD_CONFIRM,
      payload: {
        value,
      },
    });
  };
}
/*
export function onShowPassword(value) {
  return dispatch => {
    dispatch({
      type: SHOW_PASSWORD,
      payload: {
        value: value
      }
    });
  };
}
*/

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');

  return JSON.parse(window.atob(base64));
}
export function onRegister(obj) {
  return (dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
      payload: {
        requesting: true,
      },
    });
    if (obj.password !== obj.passwordConfirm) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: {
          requesting: false,
          message: "Passwords don't match",
        },
      });
    }
    const apiKey = localStorage.getItem('api_key');
    let config = {};
    if (apiKey !== undefined) {
      config = {
        headers: {
          Apikey: apiKey,
        },
      };
      API.post('register', obj, config)
        .then((response) => {
          // console.log(response);
          if (response.data.result === 'success') {
            const tokenObj = parseJwt(response.data.data.token);
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('is_admin', tokenObj.is_admin);
            localStorage.setItem('client_name', tokenObj.client_name);
            dispatch({
              type: REGISTER_SUCCESS,
              payload: {
                requesting: false,
              },
            });
          }
        })
        .catch((error) => {
          // console.log(error);
          dispatch({
            type: REGISTER_FAILURE,
            payload: {
              requesting: false,
              message:
                typeof error.response !== 'undefined'
                  ? error.response.data.data.message
                  : 'Wrong e-mail or password',
            },
          });
        });
    } else {
      API.post('register-owner', obj)
        .then((response) => {
          // console.log(response);
          if (response.data.result === 'success') {
            const tokenObj = parseJwt(response.data.data.token);
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('is_admin', tokenObj.is_admin);
            localStorage.setItem('client_name', tokenObj.client_name);
            dispatch({
              type: REGISTER_SUCCESS,
              payload: {
                requesting: false,
              },
            });
          }
        })
        .catch((error) => {
          // console.log(error);
          dispatch({
            type: REGISTER_FAILURE,
            payload: {
              requesting: false,
              message:
                typeof error.response !== 'undefined'
                  ? error.response.data.data.message
                  : 'Wrong e-mail or password',
            },
          });
        });
    }
  };
}
