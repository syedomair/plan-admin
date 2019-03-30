import React, { Component } from 'react';
import Snackbar from './Snackbar';


class UndefinedErrorSnackbar extends Component {
  render() {
    const message = `Backend Server Problem. Error Code: ${this.props.error_code}`;
    return (
      <Snackbar
        place="tc"
        open
        color="danger"
        message={message}
      />
    );
  }
}
export default UndefinedErrorSnackbar;
