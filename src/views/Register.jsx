import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';

import loginPageStyle from 'assets/jss/material-dashboard-react/views/loginPageStyle.jsx';
import * as registerActions from 'actions/RegisterActions';
import UndefinedErrorSnackbar from 'components/Snackbar/UndefinedErrorSnackbar';
import RegisterComp from './Register/RegisterComp';

class Register extends React.Component {
  render() {
    const { classes } = this.props;
    const { register, defaultStates } = this.props;
    const {
      setPassword, setFirstName, setLastName, setPasswordConfirm, setEmail, onRegister,
    } = this.props.registerActions;

    if (localStorage.getItem('token')) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className={classes.content}>
        <div className={classes.container}>
          {defaultStates.unDefinedError ? <UndefinedErrorSnackbar error_code={defaultStates.error} /> : ''}
          <RegisterComp
            email={register.email}
            firstName={register.firstName}
            lastName={register.lastName}
            password={register.password}
            passwordConfirm={register.passwordConfirm}
            requesting={register.requesting}
            message={register.message}
            error_code={register.error_code}
            messageType={register.messageType}
            setEmail={setEmail}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPassword={setPassword}
            setPasswordConfirm={setPasswordConfirm}
            onRegister={onRegister}
            classes={this.props}
          />
        </div>
      </div>
    );
  }
}


Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    register: state.register,
    defaultStates: state.defaultStates,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerActions: bindActionCreators(registerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginPageStyle)(Register));
