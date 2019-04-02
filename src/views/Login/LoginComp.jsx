import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// @material-ui/core components
import InputAdornment from '@material-ui/core/InputAdornment';

// @material-ui/icons
import Email from '@material-ui/icons/Email';
import LockOutline from '@material-ui/icons/LockOutlined';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';

class LoginComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: 'cardHidden',
      emailError: false,
      passwordError: false,
      message: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ cardAnimaton: '' });
    }, 2500);
  }

  componentWillReceiveProps(props) {
    this.setState({ message: props.message });
    if (props.error_code === '1004') {
      this.setState({ emailError: true, passwordError: true });
    }
    if (props.error_code === '1091') {
      this.setState({ emailError: true, passwordError: false });
    }
    if (props.error_code === '1092') {
      this.setState({ emailError: false, passwordError: true });
    }
    if (props.error_code === '1093' || props.error_code === '1115') {
      this.setState({ emailError: false, passwordError: true });
    }
    if (props.error_code === '1114') {
      this.setState({ emailError: true, passwordError: false });
    }
    if (props.error_code === '') {
      this.setState({ emailError: false, passwordError: false });
    }
  }

  onEmailChange(e) {
    this.props.setEmail(e.target.value);
  }

  onPasswordChange(e) {
    this.props.setPassword(e.target.value);
  }

  onLoginClick() {
    this.props.onLogin(
      { email: this.props.email, password: this.props.password },
      this.props.redirect,
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card className={classes[this.state.cardAnimaton]}>
              <CardHeader color="primary" plain style={{ textAlign: 'center' }}>
                <b>LOG IN</b>
              </CardHeader>

              <CardBody>
                { <div style={{ color: 'red' }}>{this.state.message}</div> }
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.onEmailChange.bind(this),
                    error: this.state.emailError,
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
                    error: this.state.passwordError,
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
                  disabled={this.props.requesting}
                >
                      Log In
                </Button>
                {this.props.requesting && <CircularProgress size={24} style={{ position: 'absolute', top: '74%', left: '47%' }} />}
              </CardFooter>
              <CardFooter className={classes.justifyContentCenter}>
                <Link to="register">Create a new Account</Link>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    );
  }
}

export default LoginComp;
