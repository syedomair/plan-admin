import React from 'react';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';

import PlanMsgDialog from './PlanMsgDialog/PlanMsgDialog';

const styles = {
  cardIconTitle: {
    marginTop: '15px',
    marginBottom: '0px',
  },
};

class PlanComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.props.getPlanMsg(this.props.plan_id);
    this.props.getPlan(this.props.plan_id);
  }

  componentWillReceiveProps(props) {
    if (props.refreshPlanMsg) {
      setTimeout(() => {
        this.props.getPlanMsg(props.plan_id);
      }, 3000);
    }
  }

  render() {
    // const { classes } = this.props;
    const items = [];
    const action_list = [{ id: 'COST_UPDATE', title: 'Cost Updated' }, { id: 'VALIDITY_UPDATE', title: 'Validity Days Updated' }];

    for (let i = 0; i < this.props.plan_msg_list.length; i++) {
      const planMsgId = this.props.plan_msg_list[i].id;
      const message = this.props.plan_msg_list[i].message;
      const action = this.props.plan_msg_list[i].action;
      const tempItem = (
        <GridItem xs={12} sm={12} md={6} key={planMsgId}>
          <Card>
            <CardHeader color="primary">
              <div style={{ float: 'right' }}>
                <PlanMsgDialog
                  plan_msg_id={planMsgId}
                  plan_msg_list={this.props.plan_msg_list}
                  plan_id={this.props.plan_id}
                  message={message}
                  action={action}
                  requesting={this.props.requesting}
                  updatePlanMsg={this.props.updatePlanMsg}
                  deletePlanMsg={this.props.deletePlanMsg}
                />
              </div>
            </CardHeader>
            <CardBody>
              <TextField
                autoFocus
                margin="dense"
                label="Action"
                value={action_list.filter(actionRec => actionRec.id === action)[0].title}
                fullWidth
                disabled
              />
              <TextField
                autoFocus
                margin="dense"
                label="Message"
                value={message}
                fullWidth
                multiline
                rows="15"
                disabled
              />

            </CardBody>
          </Card>
        </GridItem>
      );
      items.push(tempItem);
    }
    return (
      <div>
        {this.props.requesting && <CircularProgress size={44} style={{ position: 'absolute', top: '50%', left: '50%' }} />}
        <Card>
          <CardHeader color="primary">
            <div style={{ float: 'left' }}>
              <b>
Plan Messages Email Template for:
                {' '}
                {' '}
                {this.props.plan_title}
              </b>
            </div>
          </CardHeader>
          <CardBody>
            <div style={{ color: 'red', textAlign: 'center' }}>{this.props.message}</div>
            <div style={{ color: 'green', textAlign: 'center' }}>{this.props.success_message}</div>
            <PlanMsgDialog
              plan_msg_list={this.props.plan_msg_list}
              plan_id={this.props.plan_id}
              requesting={this.props.requesting}
              createPlanMsg={this.props.createPlanMsg}
              updatePlanMsg={this.props.updatePlanMsg}
              deletePlanMsg={this.props.deletePlanMsg}
            />
            <GridContainer>
              {items}
            </GridContainer>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(PlanComp);
