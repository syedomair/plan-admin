import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Button from 'components/CustomButtons/Button.jsx';
import * as planMessagesActions from 'actions/PlanMessagesActions';
import UndefinedErrorSnackbar from 'components/Snackbar/UndefinedErrorSnackbar';
import PlanComp from './Plan/PlanComp';

class PlanMsg extends Component {
  render() {
    // const { classes } = this.props;
    const { planMsg, defaultStates } = this.props;
    const {
      getPlanMsg,
      getPlan,
      createPlanMsg,
      updatePlanMsg,
      deletePlanMsg,
    } = this.props.planMessagesActions;
    return (
      <div>
        {defaultStates.unDefinedError ? <UndefinedErrorSnackbar error_code={defaultStates.error} /> : ''}
        <Link to="/plans" className="back-page">
          <Button round>
            <ArrowBack />
            {' '}
          Back to Plans
          </Button>
        </Link>
        <br />
        <br />
        <PlanComp
          plan_id={this.props.match.params.id}
          getPlan={getPlan}
          getPlanMsg={getPlanMsg}
          plan_msg_list={planMsg.plan_msg_list.list === undefined ? [] : planMsg.plan_msg_list.list}
          plan_title={planMsg.plan === undefined ? '' : planMsg.plan.title}
          createPlanMsg={createPlanMsg}
          updatePlanMsg={updatePlanMsg}
          deletePlanMsg={deletePlanMsg}
          refreshPlanMsg={planMsg.refreshPlanMsg}
          requesting={planMsg.requesting}
          message={planMsg.message}
          success_message={planMsg.success_message}
          error_core={planMsg.error_core}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    planMsg: state.planMsg,
    defaultStates: state.defaultStates,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    planMessagesActions: bindActionCreators(planMessagesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanMsg);
