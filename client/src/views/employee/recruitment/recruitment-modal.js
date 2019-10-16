import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_RECRUITMENT, UPDATE_RECRUITMENT } from "../../../_constants/types";
import { Modal, Form, Col } from "react-bootstrap";
import { showModal } from "../../../_actions/employee/recruitment-action";

class RecruitmentModal extends Component {
  state = {
    id: null,
    employeeName: "",
    companyName: "",
    startDate: "",
    endDate: "",
    workRole: "",
    employeeStatus: "",
    designation: ""
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.recruitmentObj);
    this.setState({
      id: nextProps.recruitmentObj.id,
      employeeName: nextProps.recruitmentObj.employeeName,
      companyName: nextProps.recruitmentObj.companyName,
      startedDate: nextProps.recruitmentObj.startedDate,
      endDate: nextProps.recruitmentObj.endDate,
      workRole: nextProps.recruitmentObj.workRole,
      employeeStatus: nextProps.recruitmentObj.employeeStatus,
      designation: nextProps.recruitmentObj.designation
    });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    console.log(this.props.modaldata.action);
    if (this.props.modaldata.action === "EDIT") {
      this.props.updateRecruitment(this.state);
    } else {
      this.props.addRecruitment(this.state);
    }
  };

  render() {
    console.log("call recruitment render");
    const { show, title } = this.props.modaldata;
    return (
      <div>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Id : </Form.Label>
                  <Form.Control
                    value={this.state.id}
                    type="text"
                    name="id"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Employee Name: </Form.Label>
                  <Form.Control
                    value={this.state.employeeName}
                    type="text"
                    name="employeeName"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Company Name: </Form.Label>
                  <Form.Control
                    value={this.state.companyName}
                    type="text"
                    name="companyName"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Work Role : </Form.Label>
                  <Form.Control
                    value={this.state.workRole}
                    type="text"
                    name="workRole"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Start Date : </Form.Label>
                  <Form.Control
                    value={this.state.startedDate}
                    type="date"
                    name="startedDate"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> End Date : </Form.Label>
                  <Form.Control
                    value={this.state.endDate}
                    type="date"
                    name="endDate"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Employee Status : </Form.Label>
                  <Form.Control
                    value={this.state.employeeStatus}
                    type="text"
                    name="employeeStatus"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Designation : </Form.Label>
                  <Form.Control
                    value={this.state.designation}
                    type="text"
                    name="designation"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="submit"
              className="btn btn-danger "
              onClick={() => this.props.showModal(false)}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-info "
              onClick={this.handleSubmit}
            >
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  modaldata: state.recruitmentStore.modaldata,
  recruitmentObj: state.recruitmentStore.recruitment
});
const mapDispatchToProps = dispatch => ({
  updateRecruitment: obj => dispatch({ type: UPDATE_RECRUITMENT, payload: obj }),
  addRecruitment: obj => dispatch({ type: ADD_RECRUITMENT, payload: obj }),
  showModal: status =>
    dispatch(showModal({ action: "ADD", show: status, title: "Add Recruitment" }))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecruitmentModal);
