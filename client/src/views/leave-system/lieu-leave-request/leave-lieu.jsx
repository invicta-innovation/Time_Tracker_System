import React, { Component } from "react";
import {
  Modal,
  Tooltip,
  Popover,
  Form,
  Col,
} from "react-bootstrap";
import EmployeeLieuLeaveHistory from "./employee-lieu-leave-history";
import { connect } from 'react-redux';
import { applyLieuLeaveRequest } from '../../../_actions/lieuLeaveRequest-action';
import authService from '../../../_utils/auth-service';
import swal from 'sweetalert';

class LieuLeave extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      startDate: null,
      endDate: null,
      workedHours: null,
      reason: null,
      userId: null,
      error: {},
      lieuLeaveRequest: ''
    };
  }

  componentDidMount() {
    if (this.props.authData) {
      this.setState({ userId: this.props.authData.id })
    }
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state)
    const obj = this.state;
    swal({
      title: "Are you sure?",
      text: "Do you want take this leave !",
      // icon: "sucess",
      buttons: true,
      // dangerMode: true,
    }).then((willCreate) => {
      if (willCreate) {
        this.props.applyLieuLeaveRequest(obj)
        this.setState({
          startDate: null,
          endDate: null,
          workedHours: null,
          reason: null,
          error: {},
          lieuLeaveRequest: ''
        })
      }
    });

    if (this.isEmpty(this.state.error)) {
      this.handleClose()
    }

  }
  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.error)
    if (nextProps.error != null) {
      this.setState({
        error: nextProps.error
      });
      return;
    }
  }

  render() {
    //console.log(this.props.lieuLeaveRequest.reason)
    //console.log(this.state.error.lieuLeaveRequest)
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Lieu Leave Request Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="startdate">
                  <Form.Label>Start Date : </Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    min="today"
                    value={this.state.startDate}
                    onChange={this.handleChange}
                  />
                  <small className="text-danger">{this.state.error == null ? '' : this.state.error.startDate}</small>
                </Form.Group>

                <Form.Group as={Col} controlId="enddate">
                  <Form.Label>End Date : </Form.Label>
                  <Form.Control
                    min={this.state.startDate}
                    type="date"
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.handleChange}
                  />
                  <small className="text-danger">{this.state.error == null ? '' : this.state.error.endDate}</small>
                </Form.Group>
              </Form.Row>

              <Form.Group as={Col} controlId="days">
                <Form.Label>No Of Days :</Form.Label>
                <Form.Control
                  type="number"
                  min={0.5}
                  step={0.5}
                  max={5}
                  name="workedHours"
                  value={this.state.workedHours}
                  onChange={this.handleChange}
                />

              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Reason</Form.Label>
                  <Form.Control as="textarea" rows="2"
                    name="reason"
                    min={10}
                    max={20}
                    value={this.state.reason}
                    onChange={this.handleChange}
                  />
                  <small className="text-danger">{this.state.error == null ? '' : this.state.error.reason}</small>
                </Form.Group>
              </Form.Row>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="submit" class="btn btn-danger " data-toggle="tooltip" data-placement="bottom" title="close" onClick={this.handleClose}>
              Close
            </button>
            <button
              type="submit" class="btn  btn-successRequest " data-toggle="tooltip" data-placement="bottom" title="request" onClick={this.handleSubmit}>
              Request
            </button>
          </Modal.Footer>
        </Modal>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="d-flex flex-row-reverse ">
          <button type="submit" class="btn btn-successRequest" data-toggle="tooltip" data-placement="bottom" title="request" onClick={this.handleShow}>
            Request Lieu Leave</button>
        </div>
        <EmployeeLieuLeaveHistory />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  lieuLeaveRequests: state.lieuLeaveRequestStore.lieuLeaveRequests,
  lieuLeaveRequest: state.lieuLeaveRequestStore.lieuLeaveRequest,
  error: state.lieuLeaveRequestStore.errors,
  authData: state.authStore.authData
});
const mapDispachToProps = dispatch => ({
  applyLieuLeaveRequest: (lieuLeaveObj) => dispatch(applyLieuLeaveRequest(lieuLeaveObj)),

});
export default connect(mapStateToProps, mapDispachToProps)(LieuLeave);

