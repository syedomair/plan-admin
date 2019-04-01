import * as React from 'react';
import MUIDataTable from 'mui-datatables';

import Card from '@material-ui/core/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CircularProgress from '@material-ui/core/CircularProgress';

class UsersListComp extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
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
    // const { classes } = this.props;
    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
      selectableRows: false,
    };
    return (
      <div>
        <Card>
          <CardHeader color="primary" style={{ textAlign: 'left', paddingTop: '30px' }}>
            <b>Users</b>
          </CardHeader>
          <CardBody>
            <MUIDataTable title="" data={this.state.rows} columns={this.state.columns} options={options} />
          </CardBody>
        </Card>
        {this.props.requesting && <CircularProgress size={44} style={{ position: 'absolute', top: '50%', left: '50%' }} />}
      </div>
    );
  }
}

export default UsersListComp;
