import React, { Component } from "react";
import UserList from "./component/userList";
import UserModal from "./component/userModal";
import { connect } from "react-redux";
import { showModal } from "../../_actions/user-action";

class Users extends Component {
  render() {
    return (
      <section className="py-3">
        <div className="card">
          <div className="d-flex justify-content-between card-header">
            <h3 className="h6 text-uppercase mb-0">User List</h3>
            <button
          type="submit"
          className="btn btn-info btn"
          data-toggle="tooltip"
          data-placement="bottom"
          title="addUser"
          btn-align="right"
          onClick={()=>this.props.showModal(true)}
          >
          + User
        </button>
            <UserModal/>
          </div>
          <div className="card-body">
            <UserList />
          </div>
        </div>
      </section>
    );
  }
}
const mapDispatchToProps=dispatch=>({
  showModal:(showstatus)=>dispatch(showModal({action:'ADD',show:showstatus,title:'Add User'}))
})

export default connect(
  null,
   mapDispatchToProps 
)(Users);