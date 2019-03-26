import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import HeaderPublic from 'components/Header/HeaderPublic';
import Footer from 'components/Footer/Footer';

import pagesRoutes from 'routes/public';

import pagesStyle from 'assets/jss/material-dashboard-react/layouts/pagesStyle';

import bgImage from 'assets/img/register.jpeg';
import logo from 'assets/img/logo/molecule-72-192917.png';

class Pages extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <HeaderPublic logo={logo} {...rest} />
        <div className={classes.wrapper}>
          <div className={classes.fullPage}>
            <Switch>
              {pagesRoutes.map((prop, key) => {
                if (prop.collapse) {
                  return null;
                }
                if (prop.redirect) {
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                }
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
            <Footer white />
            <div
              className={classes.fullPageBackground}
              style={{ backgroundImage: `url(${bgImage})` }}
            />
          </div>
        </div>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pagesStyle)(Pages);
