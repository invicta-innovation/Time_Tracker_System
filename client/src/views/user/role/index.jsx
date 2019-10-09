import React, { Component } from 'react'
import { connect } from 'react-redux';
import RoleModal from "./roleModal";
import RoleList from "./roleList";
import { showModal } from '../../../_actions/role-actions';

class Role extends Component {

 render() {
    return (
      <section class="py-3">

        <div class="card">
          <div class="d-flex justify-content-between card-header">
            <h3 class="h6 text-uppercase mb-0">User Role</h3>

            <button
              type="submit"
              class="btn btn-info btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="add role"
              btn-align="right"
              onClick={()=>this.props.onModalShow(true)}
            >
              + Role
        </button>
        
            <RoleModal />
          </div>
          <div class="card-body">
            <RoleList />
          </div>
        </div>
      </section>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    onModalShow:(showstatus)=>dispatch(showModal({action:'ADD',show:showstatus,title:'Add User Role',buttonName:'Save'}))
  }
} 




export default connect(null, mapDispatchToProps)(Role);