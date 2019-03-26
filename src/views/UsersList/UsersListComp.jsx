import * as React from 'react';
import MUIDataTable from 'mui-datatables';
import Button from 'components/CustomButtons/Button.jsx';
import ReorderIcon from '@material-ui/icons/Reorder';
import DeleteForeverOutlined from '@material-ui/icons/DeleteForeverOutlined';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class UsersListComp extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      dialog_state: '',
      select_role_id: '',
      select_user_id: '',
      //role_list: [],
      columns: [
        {
          name: 'first_name',
          label: 'First Name',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: 'last_name',
          label: 'Last Name',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: 'email',
          label: 'Email',
          options: {
            filter: true,
            sort: true,
          },
        },
      ],
      rows: [],
    };
  }

  componentDidMount() {
    this.props.getUserList();
  }

  componentWillReceiveProps(props) {
    this.setState({
      rows: props.user_list,
    });
  }

  render() {
    //const { classes } = this.props;
    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
      selectableRows: false,
    };
    let saveBtnText = 'Save';
    if (this.state.dialog_state === 'delete') {
      saveBtnText = 'Remove Role';
    } else if (this.state.dialog_state === 'add') {
      saveBtnText = 'Add Role';
    }
    return (
      <div>
        <MUIDataTable title="Users" data={this.state.rows} columns={this.state.columns} options={options} />
      </div>
    );
  }
}

export default UsersListComp;
