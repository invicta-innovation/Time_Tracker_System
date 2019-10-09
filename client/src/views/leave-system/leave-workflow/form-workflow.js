import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class FormWorkFlow extends Component {
  state = {
    role: "",
    userId: "",
    leaveAction: "",
    btnName: "ADD"
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userId, leaveAction } = this.state;

    if (
      leaveAction == null ||
      leaveAction == "" ||
      userId == null ||
      userId == ""
    ) {
      alert("please check all the fields");
    } else {
      const workFlowObj = {
        userId: userId,
        leaveAction: leaveAction
      };

      if (this.state.btnName == "ADD") {
        this.props.addWorkflow(workFlowObj);
      }
    }
  };

  componentWillMount() {}

  render() {
    return (
      <tr>
        <td>
          <Form.Control as="select" name="userRole">
            <option value="0">Role</option>
            <option value="1">Hr</option>
            <option value="2">Admin</option>
          </Form.Control>
        </td>
        <td>
          <Form.Control
            as="select"
            name="userId"
            onChange={this.handleChange}
            value={this.state.LeaveProcessType}
          >
            <option value="0">User</option>
            <option value="1">Ravi</option>
            <option value="2">Kumar</option>
          </Form.Control>
        </td>
        <td>
          <Form.Control
            as="select"
            name="leaveAction"
            onChange={this.handleChange}
            value={this.state.LeaveProcessType}
          >
            <option value="0">Leave Action</option>
            <option value="APPLIED">Apply</option>
            <option value="ACCEPTED">Accept</option>
            <option value="REJECTED">Rejected</option>
          </Form.Control>
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
