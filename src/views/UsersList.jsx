import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as usersListActions from 'actions/UsersListActions';
import UsersListComp from './UsersList/UsersListComp';

class UsersList extends Component {
  render() {
    const { user } = this.props;
    const {
      getUserList,
      getAllRoles,
      addUserRole,
      removeUserRole,
    } = this.props.usersListActions;
    return (
      <div>
        <UsersListComp
          getUserList={getUserList}
          user_list={user.user_list.list === undefined ? [] : user.user_list.list}
          getAllRoles={getAllRoles}
          role_all_list_user={user.role_all_list_user.list === undefined ? [] : user.role_all_list_user.list}
          addUserRole={addUserRole}
          removeUserRole={removeUserRole}
          refreshUser={user.refreshUser}
          classes={this.props}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    usersListActions: bindActionCreators(usersListActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
