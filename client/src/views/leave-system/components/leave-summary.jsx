import React, { Component } from "react";
import {
  Modal,
  Popover,
  Form,
  Col
} from "react-bootstrap";
import IndividualLeaveCountTable from "./individualLeaveCountTable";


class LeaveSummary extends Component {
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

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );

    return (
      <div>
      <Modal show={this.state.show} onHide={this.handleClose}>
    <Modal.Header>
      <Modal.Title>Reject Reason</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
              <Form.Row>
                  <Form.Group as={Col} controlId="roleId">
                  <Form.Label>Reason </Form.Label>
                  <Form.Control as="textarea" />
                  </Form.Group>
              </Form.Row>
              
              </Form>
    </Modal.Body>
    <Modal.Footer>
      <button type="submit" class="btn btn-danger " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Close</button>
      <button type="submit" class="btn btn-success " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Send</button>
    </Modal.Footer>
  </Modal>
      <section class="py-3">
        
       
        <div className="roundy row p-3" style={{backgroundColor:'#fff'}}>
          <div className="col-md-2 text-center pt-3">
            <img src='assets/img/avatar-1.jpg' class="rounded circle"/>
            <h5>Thirupparan</h5>
            <h6>Software Engineer</h6>
          </div>
          <div className="col-md-9">
         <IndividualLeaveCountTable />
         </div>
        </div>


        <section class="py-3">
        <div className="roundy row p-3" style={{backgroundColor:'#fff'}}>
          <div className="col-md-2 text-center pt-3">
            <img src='assets/img/avatar-1.jpg' class="rounded circle"/>
            <h5>Thiru</h5>
            <h6>QA Engineer</h6>
          </div>
          <div className="col-md-9">
         <IndividualLeaveCountTable/>
         </div>
        </div>
               
        </section>
      </section>
      </div>
    );
  }
}
export default LeaveSummary;
