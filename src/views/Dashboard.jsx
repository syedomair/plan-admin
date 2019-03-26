import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dashboardActions from 'actions/DashboardActions';
import DashboardComp from './Dashboard/DashboardComp';

class Dashboard extends Component {
  render() {
    const { dashboard } = this.props;
    const {
      getTotalUsers,
      getTotalPlans,
      getUserRegData,
    } = this.props.dashboardActions;
    return (
      <div>
        <DashboardComp
          getTotalUsers={getTotalUsers}
          getTotalPlans={getTotalPlans}
          getUserRegData={getUserRegData}
          user_reg_data={dashboard.user_reg_data === undefined ? [] : dashboard.user_reg_data}
          total_user={dashboard.total_user}
          total_plan={dashboard.total_plan}
          //classes={this.props}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dashboardActions: bindActionCreators(dashboardActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
