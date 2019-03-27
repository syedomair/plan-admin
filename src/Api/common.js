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
    requestedAPI
      .then((response) => {
        // console.log(response);
        dispatch({
          type: SUCCESS,
          payload: {
            requesting: false,
            data: response.data.data,
          },
        });
      })
      .catch((error) => {
        // console.log(error.response);
        dispatch({
          type: FAILURE,
          payload: {
            requesting: false,
            message: 'failure',
            error,
          },
        });
      });
  };
}