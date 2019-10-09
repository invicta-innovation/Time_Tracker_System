import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers } from "../../_actions/user-action";

class ManageLeaveAllocation extends Component {
  componentDidMount() {
    this.props.getUsers();
    console.log(this.props);
  }

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    const userLists = this.props.userList.map(userRow => (
      <div class="col-lg-12 roundy">
        <a
          href="#"
          class="cardroundy card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style"
        >
          <div class="row">
            <div class="col-lg-12 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
              <a class="mb-0">
                <img
                  src="assets/img/avatar-1.jpg"
                  alt="..."
                  style={{ maxWidth: "3rem" }}
                  class="rounded-circle mx-3 my-2 my-lg-0"
                />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p> Name&nbsp;&nbsp;:&nbsp;&nbsp; {userRow.userName}</p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                to={`/manageAllocation/${userRow.id}`}
                id={userRow.id}
                className="btn btn-success"
              >
                Manage Allocation
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                to={`/workflow/${userRow.id}`}
                id={userRow.id}
                className="btn btn-success"
              >
                Manage Workflow
              </Link>
            </div>
          </div>
        </a>
      </div>
    ));

    return <section class="py-3">{userLists}</section>;
  }
}
const mapStateToProps = state => ({
  userList: state.userStore.users
});
const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fetchUsers())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageLeaveAllocation);
