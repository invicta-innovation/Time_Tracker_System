import React, { Component } from "react";
import AllocationList from "./AllocationList";
import AllocationForm from "./Allocation-form";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getLeaveAllocation,
  addLeaveAllocation,
  deleteLeaveAllocation,
  updateLeaveAllocation
} from "../../../_actions/leave-allocation-action";
import LeaveSummary from "./LeaveSummary";

class Allocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leaveAllocations: [],
      currentTask: "",
      show: false
    };
  }

  componentWillMount() {
    this.props.getLeaveAllocation(this.props.match.params.id);
  }

  componentWillReceiveProps(nextprops) {
    this.setState({
      leaveAllocations: nextprops.leaveAllocations
    });
  }

  addLeaveAllocation = leaveAllocationObj => {
    let userId = this.props.match.params.id;
    this.props.addLeaveAllocation(leaveAllocationObj, userId);
  };

  deleteAllocation = id => {
    this.props.deleteAllocation(id);
  };

  editAllocation = (leaveAllocationObj, id) => {
    this.props.updateLeaveAllocation(leaveAllocationObj, id);
  };

  updateAllocation = newValue => {
    this.setState({
      currentTask: newValue.target.value
    });
  };

  renderList() {
    const leaveAllocationList = this.state.leaveAllocations.map(
      leaveAllocation => (
        <AllocationList
          key={leaveAllocation.id}
          clickHandler={this.changeStatus}
          deleteAllocation={this.deleteAllocation}
          editAllocation={this.editAllocation}
          details={leaveAllocation}
        />
      )
    );
    return leaveAllocationList;
  }

  render() {
    console.log(this.props);

    return (
      <section class="py-3">
        <Link to="/leaveAllocation" className="btn btn-primary btn-small">
          Back
        </Link>

        <div class="row flex-container space-between mb-3">
          <LeaveSummary />
          <LeaveSummary />
          <LeaveSummary />
        </div>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>LeaveType</th>
              <th>LeaveProcessType</th>
              <th>Days</th>
              <th>DateModified</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {this.renderList()}
            <AllocationForm
              updateAllocation={this.updateAllocation}
              addAllocation={this.addLeaveAllocation}
            />
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  leaveAllocations: state.leaveAllocationStore.leaveAllocations
});
const mapDispatchToProps = dispatch => ({
  getLeaveAllocation: userid => dispatch(getLeaveAllocation(userid)),
  addLeaveAllocation: (leaveAllocationObj, userId) =>
    dispatch(addLeaveAllocation(leaveAllocationObj, userId)),
  deleteAllocation: id => dispatch(deleteLeaveAllocation(id)),
  updateLeaveAllocation: (leaveAllocationObj, id) =>
    dispatch(updateLeaveAllocation(leaveAllocationObj, id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Allocation);
