import API from '../Api/api.js';
import {
  SET_REGISTER_EMAIL,
  SET_REGISTER_FIRST_NAME,
  SET_REGISTER_LAST_NAME,
  SET_REGISTER_PASSWORD,
  SET_REGISTER_PASSWORD_CONFIRM,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../constants/Register';
import { UNDEFINED_ERROR, RESET_UNDEFINED_ERROR } from '../constants/Default';

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
    dispatch({
      type: RESET_UNDEFINED_ERROR,
    });
    if (obj.password !== obj.passwordConfirm) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: {
          requesting: false,
          message: "Passwords doesn't match",
        },
      });
    }
    const config = {};
    API.post('register', obj, config)
      .then((response) => {
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
        if (error.response === undefined) {
          dispatch({
            type: UNDEFINED_ERROR,
            payload: {
              error: error.request.status,
            },
          });
        } else {
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
        }
      });
  };
}
