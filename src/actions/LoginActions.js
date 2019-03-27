import API from 'Api/api.js';
import {
  SET_EMAIL,
  SET_PASSWORD,
  SHOW_PASSWORD,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from 'constants/Login';
import { UNDEFINED_ERROR, RESET_UNDEFINED_ERROR } from '../constants/Default';

export function setEmail(value) {
  return (dispatch) => {
    dispatch({
      type: SET_EMAIL,
      payload: {
        value,
      },
    });
  };
}

export function setPassword(value) {
  return (dispatch) => {
    dispatch({
      type: SET_PASSWORD,
      payload: {
        value,
      },
    });
  };
}

export function onShowPassword(value) {
  return (dispatch) => {
    dispatch({
      type: SHOW_PASSWORD,
      payload: {
        value,
      },
    });
  };
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');

  return JSON.parse(window.atob(base64));
}

export function onLogin(obj, redirect) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        requesting: true,
      },
    });
    dispatch({
      type: RESET_UNDEFINED_ERROR,
    });
    const apiKey = localStorage.getItem('api_key');
    let config = {};
    if (apiKey !== undefined) {
      config = {
        headers: {
          Apikey: apiKey,
        },
      };
    }

    API.post('login', obj, config)
      .then((response) => {
        if (response.data.result === 'success') {
          if (response.data.data.token === undefined) {
            localStorage.setItem(
              'networks',
              JSON.stringify(response.data.data),
            );
            dispatch({
              type: LOGIN_SUCCESS,
              payload: {
                requesting: false,
                choose_network: true,
                redirect,
              },
            });
          } else {
            const tokenObj = parseJwt(response.data.data.token);
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('is_admin', tokenObj.is_admin);
            localStorage.setItem('user_id', tokenObj.current_user_id);
            localStorage.setItem('email', tokenObj.email);
            localStorage.setItem('first_name', tokenObj.first_name);
            localStorage.setItem('last_name', tokenObj.last_name);
            dispatch({
              type: LOGIN_SUCCESS,
              payload: {
                requesting: false,
                choose_network: false,
                redirect,
              },
            });
          }
        }
      })
      .catch((error) => {
        if (error.response === undefined) {
          dispatch({
            type: UNDEFINED_ERROR,
            payload: {
              error: error.request.status,
            },
          });
        } else {
          dispatch({
            type: LOGIN_FAILURE,
            payload: {
              requesting: false,
              message: error.response.data.data.message,
              error_code: error.response.data.data.error_code,
              error,
            },
          });
        }
      });
  };
}
