import React from 'react';
import Button from 'components/CustomButtons/Button.jsx';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

import Create from '@material-ui/icons/Create';
import Delete from '@material-ui/icons/Delete';

export default class PlanMsgDialog extends React.Component {
  state = {
    open: false,
    action: '',
    actionValue: '',
    message: '',
    error_message: '',
    dialog_state: '',
    action_list: [{ id: 'COST_UPDATE', title: 'Cost Updated' }, { id: 'VALIDITY_UPDATE', title: 'Validity Days Updated' }],
  };


  handleAddClickOpen = () => {
    this.setState({ open: true, dialog_state: 'add' });
  };

  handleUpdateClickOpen = () => {
    this.setState({ open: true, dialog_state: 'update' });
  };

  handleDeleteClickOpen = () => {
    this.setState({ open: true, dialog_state: 'delete' });
  };

  handleCreateClickOpen = () => {
    this.setState({ open: true });
  };

   handleSave = async () => {
    if (this.state.message === '' && this.state.action === '') {
      this.setState({ error_message: 'Message Template and Action can not be blank.' });
      return;
    }
    if (this.state.message === '') {
      this.setState({ error_message: 'Message Template can not be blank.' });
      return;
    }
    if (this.state.action === '') {
      this.setState({ error_message: 'Action can not be blank.' });
      return;
    }
    if (this.state.dialog_state === 'update') {
      await this.props.updatePlanMsg(this.props.plan_msg_id, { message: this.state.message, action: this.state.action });
    } else if (this.state.dialog_state === 'delete') {
      await this.props.deletePlanMsg(this.props.plan_msg_id);
    } else if (this.state.dialog_state === 'add') {
      await this.props.createPlanMsg(this.props.plan_id, { message: this.state.message, action: this.state.action });
    }

    if (this.props.requesting) {
    }
  };

  handleCancel = () => {
    this.setState({ open: false });
  };

  handleActionChange = (event) => {
    this.setState({ action: event.target.value });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  componentDidMount() {
    if (this.props.action) {
      this.setState({ action: this.props.action });
      this.setState({ actionValue: this.state.action_list.filter(actionRec => actionRec.id === this.props.action)[0].title });
    }
    if (this.props.message) {
      this.setState({ message: this.props.message });
    }
  }

  componentWillReceiveProps(props) {
    if (!props.requesting) {
      this.setState({ open: false });
    }
  }

  render() {
    // const { classes } = this.props;
    let updateDeleteDiv = '';
    let addDiv = '';
    if (this.props.plan_msg_id) {
      updateDeleteDiv = (
        <div>
          <Create onClick={this.handleUpdateClickOpen} />
          <Delete onClick={this.handleDeleteClickOpen} />
        </div>
      );
    } else {
      addDiv = (<div><Button color="primary" round onClick={this.handleAddClickOpen}>Add New Plan Email Message Template</Button></div>);
    }
    let saveBtnText = 'Save';
    if (this.state.dialog_state === 'update') {
      saveBtnText = 'Update Plan Message';
    } else if (this.state.dialog_state === 'delete') {
      saveBtnText = 'Delete Plan Message';
    } else if (this.state.dialog_state === 'add') {
      saveBtnText = 'Add New Plan Email Message Template';
    }
    return (
      <div>
        {updateDeleteDiv}
        {addDiv}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.state.dialog_state === 'delete' ? 'Do you want to delete this Plan Message' : 'Plan Message'}</DialogTitle>
          <DialogContent>
            <div style={{ color: 'red', textAlign: 'center' }}>{this.state.error_message}</div>
            <form>
              <InputLabel htmlFor="action-simple">Action</InputLabel>
              <Select
                value={this.state.action}
                onChange={this.handleActionChange}
                fullWidth
                margin="dense"
                label="Action"
                inputProps={{
                  name: 'action',
                  id: 'action',
                }}
                disabled={this.state.dialog_state === 'delete'}
              >
                {this.state.action_list.map((action, index) => <MenuItem key={index} value={action.id}>{action.title}</MenuItem>)}
              </Select>

              <TextField
                value={this.state.message}
                onChange={this.handleMessageChange}
                autoFocus
                margin="dense"
                label="Message"
                fullWidth
                multiline
                rows="15"
                disabled={this.state.dialog_state === 'delete'}
              />
              <p>The following variables are available</p>
               #PLAN_NAME#
              <br />
               #USER_FIRST_NAME#
              <br />
               #USER_LAST_NAME#
              <br />
               #USER_EMAIL#
              <br />
               #COST#
              <br />
               #VALIDITY#
            </form>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary" round>
              Cancel
            </Button>
            <Button variant="contained" onClick={this.handleSave} color="primary" round disabled={this.props.requesting}>
              {saveBtnText}
            </Button>
            {this.props.requesting && <CircularProgress size={24} style={{ position: 'absolute', top: '94%', left: '74%' }} />}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
