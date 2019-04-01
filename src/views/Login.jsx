import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';
import loginPageStyle from 'assets/jss/material-dashboard-react/views/loginPageStyle.jsx';
import { Redirect } from 'react-router-dom';
import * as loginActions from 'actions/LoginActions';
import UndefinedErrorSnackbar from 'components/Snackbar/UndefinedErrorSnackbar';
import LoginComp from './Login/LoginComp';

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    const { login, defaultStates } = this.props;
    const {
      setEmail, setPassword, onShowPassword, onLogin,
    } = this.props.loginActions;

    if (localStorage.getItem('token')) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className={classes.content}>
        <div className={classes.container}>
          {defaultStates.unDefinedError ? <UndefinedErrorSnackbar error_code={defaultStates.error} /> : ''}
          <LoginComp
            email={login.email}
            password={login.password}
            showPassword={login.showPassword}
            requesting={login.requesting}
            message={login.message}
            error_code={login.error_code}
            setEmail={setEmail}
            setPassword={setPassword}
            onShowPassword={onShowPassword}
            onLogin={onLogin}
            classes={this.props}
            loggedIn={login.loggedIn}
          />
        </div>
      </div>
    );
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    login: state.login,
    defaultStates: state.defaultStates,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginPageStyle)(Login));
