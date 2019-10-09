import React, { Component } from "react";
import { Modal, Form, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import{isEmpty} from '../../../_function/index';

import {
  showModal,
  addLeaveType,
  updateLeaveType,
  checkLeaveTypeAvailability
} from "../../../_actions/leaveType-action";

import swal from 'sweetalert';
import { LEAVE_TYPE_MAX_LENGTH, LEAVE_TYPE_MIN_LENGTH } from "../../../_constants";

class LeaveTypeForm extends Component {
  state = {
    id: '',
    leaveTypeName: '',
    errors: null,
    action: null
  };

  

  handleChange = e => {
    this.setState({ errors: { [e.target.name]: '' } })
    this.setState({ [e.target.name]: e.target.value });
    this.validate(e.target.name, e.target.value);
  };

  handleSubmit = () => {

    const { action } = this.state;
    let leavetypeObj = {
      id: this.state.id,
      leaveTypeName: this.state.leaveTypeName
    }


    this.checkEmptySpace();

    if (isEmpty(this.state.errors)) {
      if (action == "ADD") {
        this.props.addLeaveType(leavetypeObj);
      } else if (action == "EDIT") {
        this.props.updateLeaveType(leavetypeObj);
      }

    };
  }

    handleAvailability = (e) => {
      this.props.checkLeaveTypeAvailability(
        e.target.value
      )
    };

    componentWillReceiveProps(nextProps) {
      const { action } = nextProps.modaldata;
      if (nextProps.errors !==null ) {
        this.setState({ errors: nextProps.errors });
        return;
      }
      if (action == "EDIT") {
        let { id, leaveTypeName } = nextProps.leaveType;
        this.setState({ id, leaveTypeName, action,errors:null });
      } else if (action == "ADD") {
        this.setState({ leaveTypeName: '', action: action,errors:null });
      }

      

      if (nextProps.messages == 'LEAVE_TYPE_ADDED') {
        swal("Success!", "You have successfully saved the leave type!", "success");
      }

      if (nextProps.messages == 'LEAVE_TYPE_EDITED') {
        swal("Success!", "You have successfully edited the leave type!", "success");
      }

    }


    // Validation Functions
    validate = (name, value) => {
      console.log(name, value);
      switch (name) {
        case 'leaveTypeName':
          const LEAVETYPE_NAME_REGEX = RegExp("^[a-zA-Z'.\\s]{1,40}$");
          if (value.length < LEAVE_TYPE_MIN_LENGTH) {
            this.setState(
              { errors: { LeaveType: `Leave type name is too short (Minimum ${LEAVE_TYPE_MIN_LENGTH} characters needed.)` } }
            )
          }
          else if (value.length > LEAVE_TYPE_MAX_LENGTH) {
            this.setState(
              { errors: { LeaveType: `Leave type name is too (Maximum ${LEAVE_TYPE_MAX_LENGTH} characters allowed.)` } }
            )
          } else if (!LEAVETYPE_NAME_REGEX.test(value)) {
            this.setState(
              { errors: { LeaveType: `Only character allowed.` } }
            )
          }
          else {
            this.setState(
              { errors: {} }
            )
          }
      }
    }

    checkEmptySpace = ()=> {
      if (this.state.leaveTypeName.trim() === "") {
        this.setState(
          { errors: { LeaveTypeName: `Please enter Leavetype.` } }
        )
      }
    }

    render() {
      const { show, title, buttonName } = this.props.modaldata;

      return (
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>{title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Leave type</Form.Label>
                  <Form.Control
                    type="text"
                    name="leaveTypeName"
                    autoComplete="off"
                    onBlur={this.handleAvailability}
                    placeholder="Enter the Leave Type"
                    value={this.state.leaveTypeName}
                    onChange={this.handleChange}

                  />
                  <small className="text-danger">{this.state.errors == null ? '':this.state.errors.LeaveType}</small>

                </Form.Group>

              </Form.Row>

            </Form>

          </Modal.Body>
          <Modal.Footer>
            <button
              type="submit"
              class="btn btn-danger "
              variant="secondary"
              title="close"
              onClick={() => this.props.showModal(false)}
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-info "
              title={buttonName}
              onClick={this.handleSubmit} >
              {buttonName}
            </button>
          </Modal.Footer>
        </Modal>
      );
    }
  }


  // Validation functions End here

  const mapStateToProps = state => ({
    leaveTypeList: state.leaveTypeStore.leaveTypes,
    modaldata: state.leaveTypeStore.modaldata,
    leaveType: state.leaveTypeStore.leaveType,
    errors: state.leaveTypeStore.errors,
    messages: state.leaveTypeStore.messages
    //error:state.leaveTypeStore.existLeaveTypeError
  });

  const mapDispatchToProps = dispatch => ({
    showModal: showstatus =>
      dispatch(
        showModal({ action: "ADD", show: showstatus, title: "Add Leave Type" })
      ),
    addLeaveType: leaveTypeObj => dispatch(addLeaveType(leaveTypeObj)),
    updateLeaveType: leaveTypeObj => dispatch(updateLeaveType(leaveTypeObj)),
    checkLeaveTypeAvailability: leaveType => dispatch(checkLeaveTypeAvailability(leaveType))
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LeaveTypeForm);
