import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Logout from '@material-ui/icons/SettingsPower';

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  state = {
  };
  handleLogout = () => {
      localStorage.clear();
      window.location.reload();
  };

  render() {
    return (
      <div>
           <Logout  onClick={this.handleLogout} />
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
