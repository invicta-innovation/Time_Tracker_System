import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class LeaveAllocationForm extends Component {
  state = {
    id: null,
    LeaveType: "",
    LeaveProcessType: "",
    Days: "",
    DateModified: "",
    btnName: "ADD"
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { LeaveType, LeaveProcessType, Days, DateModified } = this.state;

    if (
      LeaveType == null ||
      LeaveProcessType == null ||
      Days == null ||
      Days == "" ||
      DateModified == null
    ) {
      alert("please check all the fields");
    } else {
      const leaveAllocationObj = {
        leaveTypeId: LeaveType,
        leaveProcessType: LeaveProcessType,
        days: Days,
        dateOfProcess: DateModified
      };

      if (this.state.btnName == "ADD") {
        this.props.addAllocation(leaveAllocationObj);
      } else if (this.state.btnName == "UPDATE") {
        let id = this.state.id;
        this.props.editAllocation(leaveAllocationObj, id);
        this.props.changeButton();
      }
    }
  };

  componentWillMount() {
    this.setState({
      userId: this.props.userId
    });

    if (this.props.action === "EDIT") {
      this.setState({
        btnName: "UPDATE",
        id: this.props.leaveAllocation.id,
        LeaveType: this.props.leaveAllocation.leaveType.id,
        LeaveProcessType: this.props.leaveAllocation.leaveProcessType,
        Days: this.props.leaveAllocation.days,
        DateModified: this.props.leaveAllocation.dateOfProcess
      });
    }
  }

  render() {
    return (
      <tr>
        <td>
          <Form.Control
            as="select"
            name="LeaveType"
            value={this.state.LeaveType}
            onChange={this.handleChange}
          >
            <option value="0">Select Leave type</option>
            <option value="1">Annual</option>
            <option value="2">Casual</option>
          </Form.Control>
        </td>
        <td>
          <Form.Control
            as="select"
            name="LeaveProcessType"
            onChange={this.handleChange}
            value={this.state.LeaveProcessType}
          >
            <option value="0">Select Process type</option>
            <option value="ALLOCATION">Allocated</option>
            <option value="EARNING">Earned</option>
          </Form.Control>
        </td>
        <td>
          <Form.Control
            type="text"
            value={this.state.Days}
            name="Days"
            onChange={this.handleChange}
            placeholder="Days"
          />
        </td>
        <td>
          <Form.Control
            type="date"
            value={this.state.DateModified}
            name="DateModified"
            onChange={this.handleChange}
            placeholder="DateModified"
          />
        </td>
        <td>
          <button
            type="submit"
            className="btn btn-info btn"
            data-toggle="tooltip"
            data-placement="bottom"
            title="add Leave Manager"
            onClick={this.handleSubmit}
          >
            {this.state.btnName}
          </button>
        </td>
      </tr>
    );
  }
}
