import { UNDEFINED_ERROR, RESET_UNDEFINED_ERROR } from '../constants/Default';

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
        } else {
          dispatch({
            type: FAILURE,
            payload: {
              requesting: false,
              message: 'failure',
              error,
            },
          });
        }
      });
  };
}
