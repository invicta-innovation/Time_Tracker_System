import React, { Component } from "react";
import LeaveAllocationForm from "./Allocation-form";

class AllocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.renderItem = this.renderItem.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  updateItem(evt) {
    evt.preventDefault();
    this.props.editAllocation(this.props.index, this.input.value);
    this.toggleState();
  }

  toggleState() {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    });
  }

  renderItem() {
    return (
      <tr>
        <td>{this.props.details.leaveType.leaveTypeName}</td>
        <td>{this.props.details.leaveProcessType}</td>
        <td>{this.props.details.days}</td>
        <td>{this.props.details.dateOfProcess}</td>

        <td>
          <button
            className="btn btn-danger btn-circle"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Delete"
            onClick={evt => {
              evt.stopPropagation();
              this.props.deleteAllocation(this.props.details.id);
            }}
          >
             <i class="far fa-trash-alt" />
          </button>
 &nbsp;
          <button
            className="btn btn-success btn-circle"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Edit"
            onClick={evt => {
              evt.stopPropagation();
              this.toggleState();
            }}
          >
            <i class="fas fa-pen-fancy" />
          </button>
        </td>
      </tr>
    );
  }

  render() {
    const { isEditing } = this.state;
    return isEditing == false ? (
      this.renderItem()
    ) : (
      <LeaveAllocationForm
        editAllocation={this.props.editAllocation}
        changeButton={this.toggleState}
        leaveAllocation={this.props.details}
        action="EDIT"
        userId=""
      />
    );
  }
}

export default AllocationList;
