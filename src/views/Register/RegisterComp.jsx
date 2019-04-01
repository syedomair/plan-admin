import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// @material-ui/core components
import InputAdornment from '@material-ui/core/InputAdornment';

// @material-ui/icons
import Email from '@material-ui/icons/Email';
import LockOutline from '@material-ui/icons/LockOutlined';
import AccountBox from '@material-ui/icons/AccountBox';
import Face from '@material-ui/icons/Face';
import Lock from '@material-ui/icons/Lock';

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

class RegisterComp extends Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      passwordError: false,
      passwordConfirmError: false,
      message: '',
    };
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(() => {
      this.setState({ cardAnimaton: '' });
    }, 2500);
  }

  componentWillReceiveProps(props) {
    this.setState({ message: props.message });

    if (props.error_code === '1001') {
      this.setState({
        firstNameError: false,
        lastNameError: false,
        emailError: true,
        passwordError: false,
        passwordConfirmError: false,
      });
    }
    if (props.error_code === '1115') {
      this.setState({
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: true,
        passwordConfirmError: true,
      });
    }
    if (props.error_code === '1081') {
      this.setState({
        firstNameError: true,
        lastNameError: true,
        emailError: false,
        passwordError: false,
        passwordConfirmError: false,
      });
    }
    if (props.error_code === '1082') {
      this.setState({
        firstNameError: true,
        lastNameError: false,
        emailError: false,
        passwordError: false,
        passwordConfirmError: false,
      });
    }
    if (props.error_code === '1083') {
      this.setState({
        firstNameError: false,
        lastNameError: true,
        emailError: false,
        passwordError: false,
        passwordConfirmError: false,
      });
    }
    if (props.error_code === '1084') {
      this.setState({
        firstNameError: false,
        lastNameError: false,
        emailError: true,
        passwordError: false,
        passwordConfirmError: false,
      });
    }
    if (props.error_code === '1085') {
      this.setState({
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: true,
        passwordConfirmError: false,
      });
    }
    if (props.error_code === '1086') {
      this.setState({
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: false,
        passwordConfirmError: true,
      });
    }
    if (props.error_code === '1087') {
      this.setState({
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: true,
        passwordConfirmError: true,
      });
    }
    if (props.error_code === '') {
      this.setState({
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: false,
        passwordConfirmError: false,
      });
    }
  }

  onEmailChange(e) {
    this.props.setEmail(e.target.value);
  }

  onFirstNameChange(e) {
    this.props.setFirstName(e.target.value);
  }

  onLastNameChange(e) {
    this.props.setLastName(e.target.value);
  }

  onPasswordChange(e) {
    this.props.setPassword(e.target.value);
  }

  onPasswordConfirmChange(e) {
    this.props.setPasswordConfirm(e.target.value);
  }

  onRegisterClick() {
    this.props.onRegister({
      first_name: this.props.firstName, last_name: this.props.lastName, email: this.props.email, password: this.props.password,
    }, this.props.passwordConfirm);
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card className={classes[this.state.cardAnimaton]}>
              <CardHeader color="primary" plain style={{ textAlign: 'center' }}>
                <b>REGISTER</b>
              </CardHeader>

              <CardBody>
                <div style={{ color: 'red' }}>{this.state.message}</div>

                <CustomInput
                  labelText="First Name"
                  id="firstName"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.onFirstNameChange.bind(this),
                    error: this.state.firstNameError,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomInput
                  labelText="Last Name"
                  id="lastName"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: this.onLastNameChange.bind(this),
                    error: this.state.lastNameError,
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountBox className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                />
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
                    onChange: this.onPasswordChange.bind(this),
                    error: this.state.passwordError,
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockOutline
                          className={classes.inputAdornmentIcon}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomInput
                  labelText="Confirm Password"
                  id="confirmPassword"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    input_type: 'password',
                    onChange: this.onPasswordConfirmChange.bind(this),
                    error: this.state.passwordConfirmError,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Lock
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
                  onClick={this.onRegisterClick.bind(this)}
                  disabled={this.props.requesting}
                >
                      Register
                </Button>
                {this.props.requesting && <CircularProgress size={24} style={{ position: 'absolute', top: '84%', left: '47%' }} />}
              </CardFooter>
              <CardFooter className={classes.justifyContentCenter}>
                <Link to="login">Already have an Account</Link>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    );
  }
}

export default RegisterComp;
