import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Logout from '@material-ui/icons/SettingsPower';
import Tooltip from '@material-ui/core/Tooltip';

import headerLinksStyle from 'assets/jss/material-dashboard-react/components/headerLinksStyle.jsx';

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
        <Tooltip title="Logout">
          <Logout onClick={this.handleLogout} />
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
