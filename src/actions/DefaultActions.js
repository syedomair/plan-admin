// import { client } from 'Api/client.js';
import { AUTHORIZATION_REQUIRED } from '../constants/Default';

export function ifCatchError(dispatch, error, dispatchStatus) {
  /*
  if (
    error.message === 'Network Error'
    || error.message === 'Request failed with status code 401'
  ) {
    dispatch(dispatchStatus.request);

    const username = localStorage.getItem('username');
    const token = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (!username || !token || !refreshToken) {
      dispatch({
        type: AUTHORIZATION_REQUIRED,
      });
    }
    client.auth
      .authRefresh(username, refreshToken)
      .then((response) => {
        localStorage.setItem('access_token', response.data.data.id_token);
        localStorage.setItem('refresh_token', response.data.data.refresh_token);
        client.setToken(
          username,
          response.data.data.idToken.jwtToken,
          response.data.data.refreshToken.token,
        );
        window.location.reload();
      })
      .catch((error) => {
        if (
          error.message === 'Request failed with status code 400'
          || error.message === 'Request failed with status code 401'
          || error.message === 'Network Error'
        ) {
          dispatch({
            type: AUTHORIZATION_REQUIRED,
          });
        } else dispatch(dispatchStatus.failure);
      });
  } else {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log("Error", error.message);
    }
    dispatch(dispatchStatus.failure);
  }
  */
  return true;
}

export function clearLocalStorageAndAuth() {
  localStorage.clear();
  return (dispatch) => {
    dispatch({
      type: AUTHORIZATION_REQUIRED,
    });
  };
}

/*
export function cloneObj(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  var copy = obj.constructor();
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}
*/
