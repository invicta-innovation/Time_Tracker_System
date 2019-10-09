import React, { Component } from "react";
import {
  Modal,
  Popover,
  Form,
  Col
} from "react-bootstrap";
import LeaveRequest from "../components/leave-request";


class ManageLeaveRequests extends Component{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
    render(){
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
        return(
          <div>
            
             <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reject Reason</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="roleId">
                <Form.Label>Reason </Form.Label>
                <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <button type="submit" class="btn btn-danger " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Close</button>

            <button type="submit" class="btn btn-success " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Confirm</button>
          </Modal.Footer>
        </Modal>

            <section class="py-4">

            <div class="form-group d-flex justify-content-end">
            <label class="py-2">
              Search Leave by Type : 
            </label>
            <div class="col-sm-3">
              <select
                data-filter="make"
                class="filter-make filter form-control"
              >
                <option>All Request</option>
                <option>Leave Request</option>
                <option>Cancel Leave Request </option>
                <option>Re-Appeal Request</option>
                
              </select>
            </div>
          </div>

          <LeaveRequest startDate='2019-05-4' endDate='2019-05-5' reason=' exam in university of jaffna' NoofDays='3' leaveType='Casual'/><br/>
          
        </section>
          </div>
        )
    }
}
export default ManageLeaveRequests;