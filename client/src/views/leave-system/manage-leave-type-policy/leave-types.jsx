import React, { Component } from "react";
import { connect } from "react-redux";
import { showModal } from "../../../_actions/leaveType-action";
import LeaveTypeForm from "./leave-types-form";
import LeaveTypesList from "./leave-types-list";



class ManageLeaveTypes extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    
    return (
      <React.Fragment>
      <LeaveTypeForm/>
      <table class="table table-striped table-hover card-text">
        <thead>
          <tr>
            <th class="d-flex justify-content-between">
              Leave Type
              <button
                type="submit"
                class="btn btn-info btn"
                data-toggle="tooltip"
                data-placement="bottom"
                title="add leave type"
                onClick={()=>this.props.showModal(true)}
                >
   
                + Leave Type
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
              <LeaveTypesList/>
        </tbody>
      </table>
      </React.Fragment>
    );
  }
}


const mapDispatchToProps=dispatch=>({
  showModal:(showstatus)=>dispatch(showModal({action:'ADD',show:showstatus,title:'Add Leave Type',buttonName:'Save'}))
})

export default connect(
  null,
   mapDispatchToProps 
)(ManageLeaveTypes);
