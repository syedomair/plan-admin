import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

// @material-ui/core components
import InputAdornment from '@material-ui/core/InputAdornment';

// @material-ui/icons
import Email from '@material-ui/icons/Email';
import CardMembership from '@material-ui/icons/CardMembership';
import LockOutline from '@material-ui/icons/LockOutlined';
import AccountBox from '@material-ui/icons/AccountBox';
import Face from "@material-ui/icons/Face";
import Lock from "@material-ui/icons/Lock";

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

//import withStyles from '@material-ui/core/styles/withStyles';
//import loginPageStyle from 'assets/jss/material-dashboard-react/views/loginPageStyle.jsx';

class RegisterComp extends Component {
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
    }, 2500);
  }

    onNetworkChange(e) {
        this.props.setNetwork(e.target.value);
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

    onShowPasswordClick() {
        this.props.onShowPassword(!this.props.showPassword);
    }

    onRegisterClick() {
        this.props.onRegister({ first_name: this.props.firstName, last_name: this.props.lastName,  network_name: this.props.network, email: this.props.email, password: this.props.password });
    }

  render() {
    const { classes } = this.props;
    // if (loggedIn && localStorage.getItem('access_token')) {
    //  return <Redirect to="/dashboard" />;
    // }

    return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={4}>
              <form>
                <Card className={classes[this.state.cardAnimaton]}>
                  <CardHeader color="primary" plain style={{ textAlign: 'center' }}>
                  <b>REGISTER</b>
                  </CardHeader>
   
                  <CardBody>
                    {/* <div style={{ color: "red" }}>{this.props.message}</div> */}
                    
                    <CustomInput
                      labelText="Network"
                      id="network"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: this.onNetworkChange.bind(this),
                        endAdornment: (
                          <InputAdornment position="end">
                            <CardMembership className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    
                    <CustomInput
                      labelText="First Name"
                      id="firstName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: this.onFirstNameChange.bind(this),
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
                    <CustomInput
                      labelText="Confirm Password"
                      id="confirmPassword"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        input_type: 'password',
                        onChange: this.onPasswordConfirmChange.bind(this),
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
                    >
                      Register  
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </GridItem>
          </GridContainer>
    );
  }
}

export default RegisterComp;
