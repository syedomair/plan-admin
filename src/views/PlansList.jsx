import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UndefinedErrorSnackbar from 'components/Snackbar/UndefinedErrorSnackbar';
import PlansListComp from './PlansList/PlansListComp';
import * as plansActions from '../actions/PlansActions';

class PlansList extends Component {
  render() {
    // const { classes } = this.props;
    const { plan, defaultStates } = this.props;
    const {
      getPlans,
      createPlan,
      updatePlan,
      deletePlan,
    } = this.props.plansActions;
    return (
      <div>
        {defaultStates.unDefinedError ? <UndefinedErrorSnackbar error_code={defaultStates.error} /> : ''}
        <PlansListComp
          getPlans={getPlans}
          plan_list={plan.plan_list.list === undefined ? [] : plan.plan_list.list}
          createPlan={createPlan}
          updatePlan={updatePlan}
          deletePlan={deletePlan}
          refreshPlan={plan.refreshPlan}
          requesting={plan.requesting}
          message={plan.message}
          success_message={plan.success_message}
          error_core={plan.error_core}
          classes={this.props}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    plan: state.plan,
    defaultStates: state.defaultStates,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    plansActions: bindActionCreators(plansActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlansList);
