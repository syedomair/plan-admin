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
import { validateEmail } from '../Api/common.js';

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
export function onRegister(obj, passwordConfirm) {
  return (dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
      payload: {
        requesting: true,
        message: '',
        error_code: '',
      },
    });
    dispatch({
      type: RESET_UNDEFINED_ERROR,
    });

    if (obj.first_name === '' && obj.last_name === '') {
      dispatch({
        type: REGISTER_FAILURE,
        payload: {
          requesting: false,
          message: 'Invalid First and Last name',
          error_code: '1081',
        },
      });
      return;
    }
    if (obj.first_name === '') {
      dispatch({
        type: REGISTER_FAILURE,
        payload: {
          requesting: false,
          message: 'Invalid First Name',
          error_code: '1082',
        },
      });
      return;
    }
    if (obj.last_name === '') {
      dispatch({
        type: REGISTER_FAILURE,
        payload: {
          requesting: false,
          message: 'Invalid Last Name',
          error_code: '1083',
        },
      });
      return;
    }
    if (obj.email === '' || validateEmail(obj.email)) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: {
          requesting: false,
          message: 'Invalid Email',
          error_code: '1084',
        },
      });
      return;
    }
    if (obj.password === '') {
      dispatch({
        type: REGISTER_FAILURE,
        payload: {
          requesting: false,
          message: 'Invalid Password',
          error_code: '1085',
        },
      });
      return;
    }
    if (passwordConfirm === '') {
      dispatch({
        type: REGISTER_FAILURE,
        payload: {
          requesting: false,
          message: 'Invalid Password Confirm',
          error_code: '1086',
        },
      });
      return;
    }
    if (obj.password !== passwordConfirm) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: {
          requesting: false,
          message: "Passwords doesn't match",
          error_code: '1087',
        },
      });
      return;
    }
    const config = {};
    API.post('register', obj, config)
      .then((response) => {
        if (response.data.result === 'success') {
          const tokenObj = parseJwt(response.data.data.token);
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('user_id', tokenObj.current_user_id);
          localStorage.setItem('email', tokenObj.email);
          localStorage.setItem('first_name', tokenObj.first_name);
          localStorage.setItem('last_name', tokenObj.last_name);
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
        } else if (error.request.status !== 400) {
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
              message: error.response.data.data.message,
              error_code: error.response.data.data.error_code,
            },
          });
        }
      });
  };
}
