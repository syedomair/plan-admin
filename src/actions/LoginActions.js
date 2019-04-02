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
import { validateEmail } from '../Api/common.js';

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
        message: '',
        error_code: '',
      },
    });
    dispatch({
      type: RESET_UNDEFINED_ERROR,
    });

    if (obj.password === '' && obj.email === '') {
      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          requesting: false,
          message: 'Invalid Email and Password',
          error_code: '1093',
        },
      });
      return;
    }

    if (obj.email === '' || validateEmail(obj.email)) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          requesting: false,
          message: 'Invalid Email',
          error_code: '1091',
        },
      });
      return;
    }
    if (obj.password === '') {
      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          requesting: false,
          message: 'Invalid Password',
          error_code: '1092',
        },
      });
      return;
    }

    const config = {};
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
            localStorage.setItem('user_id', tokenObj.current_user_id);
            localStorage.setItem('email', tokenObj.email);
            localStorage.setItem('first_name', tokenObj.first_name);
            localStorage.setItem('last_name', tokenObj.last_name);
            dispatch({
              type: LOGIN_SUCCESS,
              payload: {
                requesting: false,
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
        } else if (error.request.status !== 400) {
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
            },
          });
        }
      });
  };
}
