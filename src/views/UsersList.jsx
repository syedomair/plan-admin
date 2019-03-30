import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as usersListActions from 'actions/UsersListActions';
import UndefinedErrorSnackbar from 'components/Snackbar/UndefinedErrorSnackbar';
import UsersListComp from './UsersList/UsersListComp';

class UsersList extends Component {
  render() {
    const { user, defaultStates } = this.props;
    const {
      getUserList,
    } = this.props.usersListActions;
    return (
      <div>
        {defaultStates.unDefinedError ? <UndefinedErrorSnackbar error_code={defaultStates.error} /> : ''}
        <UsersListComp
          getUserList={getUserList}
          user_list={user.user_list.list === undefined ? [] : user.user_list.list}
          requesting={user.requesting}
          classes={this.props}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
    defaultStates: state.defaultStates,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    usersListActions: bindActionCreators(usersListActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
