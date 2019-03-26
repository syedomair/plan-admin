import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Login from '../components/Login/Login'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import loginPageStyle from 'assets/jss/material-dashboard-react/views/loginPageStyle.jsx';
// import { Redirect } from 'react-router-dom';
import * as loginActions from 'actions/LoginActions';
import LoginComp from './Login/LoginComp';

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    const { login /* , default_states */ } = this.props;
    const {
      setEmail, setPassword, onShowPassword, onLogin,
    } = this.props.loginActions;

    // if (localStorage.getItem('access_token')) {
    //  return <Redirect to="/dashboard" />;
    // }
    return (
      <div className={classes.content}>
        <div className={classes.container}>
          <LoginComp
            email={login.email}
            password={login.password}
            requesting={login.requesting}
            showPassword={login.showPassword}
            message={login.message}
            // redirect={default_states.redirectPathName}
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
    // default_states: state.defaultStates,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginPageStyle)(Login));
/*
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
// @material-ui/core components
import InputAdornment from '@material-ui/core/InputAdornment';

// @material-ui/icons
// import Face from "@material-ui/icons/Face";
import Email from '@material-ui/icons/Email';
import LockOutline from '@material-ui/icons/LockOutlined';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import withStyles from '@material-ui/core/styles/withStyles';
import loginPageStyle from 'assets/jss/material-dashboard-react/views/loginPageStyle.jsx';

class Login extends Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',
    };
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(() => {
      this.setState({ cardAnimaton: '' });
    }, 500);
  }

  onUsernameChange(e) {
    //this.props.setUsername(e.target.value);
  }

  onPasswordChange(e) {
    //this.props.setPassword(e.target.value);
  }

  onShowPasswordClick() {
    // this.props.onShowPassword(!this.props.showPassword);
  }

  onLoginClick() {
    this.props.onLogin(
      { username: this.props.username, password: this.props.password },
      this.props.redirect
    );
  }

  render() {
    const { classes } = this.props;
    // if (loggedIn && localStorage.getItem('access_token')) {
    //  return <Redirect to="/dashboard" />;
    // }

    return (
      <div className={classes.content}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={4}>
              <form>
                <Card login className={classes[this.state.cardAnimaton]}>
                  <CardBody>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: this.onUsernameChange.bind(this),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        input_type: 'password',
                        onChange: this.onPasswordChange.bind(this),
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutline
                              className={classes.inputAdornmentIcon}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentCenter}>
                    <Button
                      color="primary"
                      round
                      block
                      onClick={this.onLoginClick.bind(this)}
                    >
                      Log In
                    </Button>
                  </CardFooter>
                  <CardFooter className={classes.justifyContentCenter}>
                    <Link to="/pages/forgot-password">
                      Forgot your password?
                    </Link>
                  </CardFooter>
                  <CardFooter className={classes.justifyContentCenter}>
                    Need to create a new account?
                    <Link to="/pages/register-page"> Register here</Link>
                  </CardFooter>
                </Card>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(Login);

Login.propTypes = {
  classes: PropTypes.func.isRequired,
};
*/
