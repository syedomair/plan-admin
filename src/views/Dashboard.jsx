import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dashboardActions from 'actions/DashboardActions';
import UndefinedErrorSnackbar from 'components/Snackbar/UndefinedErrorSnackbar';
import DashboardComp from './Dashboard/DashboardComp';

class Dashboard extends Component {
  render() {
    const { dashboard, defaultStates } = this.props;
    const {
      getTotalUsers,
      getTotalPlans,
      getUserRegData,
      getTotalUsersLast30Days,
    } = this.props.dashboardActions;
    return (
      <div>
        {defaultStates.unDefinedError ? <UndefinedErrorSnackbar error_code={defaultStates.error} /> : ''}
        <DashboardComp
          getTotalUsersLast30Days={getTotalUsersLast30Days}
          getTotalUsers={getTotalUsers}
          getTotalPlans={getTotalPlans}
          getUserRegData={getUserRegData}
          user_reg_data={dashboard.user_reg_data === undefined ? [] : dashboard.user_reg_data}
          total_user={dashboard.total_user}
          total_user_30days={dashboard.total_user_30days}
          total_plan={dashboard.total_plan}
          requesting={dashboard.requesting}
          // classes={this.props}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
    defaultStates: state.defaultStates,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dashboardActions: bindActionCreators(dashboardActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
