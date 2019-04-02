import { AUTHORIZATION_REQUIRED, UNDEFINED_ERROR, RESET_UNDEFINED_ERROR } from '../constants/Default';

export function getConfig() {
  const config = {
    headers: {
      Token: localStorage.getItem('token'),
    },
  };
  return config;
}

export function commonBackendCall(REQUEST, SUCCESS, FAILURE, requestedAPI) {
  return (dispatch) => {
    dispatch({
      type: REQUEST,
      payload: {
        requesting: true,
      },
    });
    dispatch({
      type: RESET_UNDEFINED_ERROR,
    });
    requestedAPI
      .then((response) => {
        dispatch({
          type: SUCCESS,
          payload: {
            requesting: false,
            data: response.data.data,
          },
        });
      })
      .catch((error) => {
        if (error.response === undefined) {
          dispatch({
            type: UNDEFINED_ERROR,
            payload: {
              error: error.request.status,
            },
          });
        } else if (error.request.status === 401) {
          dispatch({
            type: AUTHORIZATION_REQUIRED,
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
            type: FAILURE,
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

export function validateEmail(email) {
  var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return !re.test(email);
}
