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

class LoginComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: 'cardHidden',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ cardAnimaton: '' });
    }, 2500);
  }

  onEmailChange(e) {
    this.props.setEmail(e.target.value);
  }

  onPasswordChange(e) {
    this.props.setPassword(e.target.value);
  }

  onShowPasswordClick() {
    // this.props.onShowPassword(!this.props.showPassword);
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
                {/* <div style={{ color: "red" }}>{this.props.message}</div> */}
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
