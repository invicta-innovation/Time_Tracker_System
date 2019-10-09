import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import FormWorkFlow from "./form-workflow";

export default class WorkflowModal extends Component {
  state = {
    show: false,
    workflow: []
  };

  addWorkFlow = obj => {
    let newworkflow = [...this.state.workflow, obj];
    this.setState({
      workflow: newworkflow
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  renderList() {
    const workflowList = this.state.workflow.map(workflow => (
      <tr key={workflow.id}>
        <td>{workflow.role}</td>
        <td>{workflow.userId}</td>
        <td>{workflow.leaveAction}</td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    ));
    return workflowList;
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <button
              type="submit"
              class="btn btn-danger "
              onClick={this.handleClose}
            >
              X
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Role</th>
                    <th>User</th>
                    <th>Leave Actions</th>
                    <th />
                  </tr>
                </thead>

                <tbody>
                  <FormWorkFlow addWorkflow={this.addWorkFlow} />
                  {this.renderList()}
                </tbody>
              </table>
            </div>
          </Modal.Body>
          <Modal.Footer>
          <button
              type="submit"
              class="btn btn-success"
              data-toggle="tooltip"
              data-placement="bottom"
              title="request"
            >
              Add Workflow
            </button>
          </Modal.Footer>
        </Modal>
        <section class="py-3">
          <div class="d-flex flex-row-reverse ">
            <button
              type="submit"
              class="btn btn-success"
              data-toggle="tooltip"
              data-placement="bottom"
              title="request"
              onClick={this.handleShow}
            >
              Manage Leave Process
            </button>
          </div>
        </section>
      </div>
    );
  }
}
