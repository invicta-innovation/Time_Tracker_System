import React, { Component } from "react";
import Card from "../../commons/card";
import {
  Modal,
  Popover,
  Form,
  Col
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import ViewFullLeaveHistory from "./components/view-full-leave-details";

class ManageCancelLeaveRequests extends Component{
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
            <button type="submit" class="btn btn-success " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Confirm</button>
            <button type="submit" class="btn btn-danger " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
            <section class="py-3">
            <Card title="Cancel Leave Requests">                           
                <table class="table table-striped table-hover card-text">
                  <thead>
                    <tr> 
                      <th>Employee Name</th>
                      <th>leave Type</th>
                      <th>No of Days</th>
                      
                      <th>Accepted By</th>
                      <th>View</th>
                      <th>Accept/ Reject</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td><Link to="/indivitualLeaveHistory" >john</Link></td>
                      <td>Casual</td>
                      <td>2</td>
                      
                      <td>Sinthuja</td>
                      <td>
                      <ViewFullLeaveHistory></ViewFullLeaveHistory>
                      </td>
                      <td>
                      &nbsp; &nbsp;
                      <button type="submit" class="btn btn-success btn-circle" data-toggle="tooltip" 
                        data-placement="bottom" title="Accept" ><i class="fas fa-check"></i></button>
                        &nbsp; &nbsp;
                        <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" 
                        data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                    </td>
                    </tr>
                    <tr>
                    <td><Link to="/indivitualLeaveHistory" >john</Link></td>
                      <td>Casual</td>
                      
                      <td>2</td>
                      
                      <td>Sinthuja</td>
                      <td>
                      <ViewFullLeaveHistory></ViewFullLeaveHistory>
                      </td>
                      <td>
                      &nbsp; &nbsp;
                      <button type="submit" class="btn btn-success btn-circle" data-toggle="tooltip" 
                        data-placement="bottom" title="Accept" ><i class="fas fa-check"></i></button>
                        &nbsp; &nbsp;
                        <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" 
                        data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                     </td>
                    </tr>
                    <tr>
                      
                      <td><Link to="/indivitualLeaveHistory" >john</Link></td>
                      <td>Casual</td>
                     
                      <td>2</td>
                      
                      <td>Sinthuja</td>
                      <td>
                      <ViewFullLeaveHistory></ViewFullLeaveHistory>
                      </td>
                      <td>
                      &nbsp; &nbsp;
                      <button type="submit" class="btn btn-success btn-circle" data-toggle="tooltip" 
                        data-placement="bottom" title="Accept" ><i class="fas fa-check"></i></button>
                        &nbsp; &nbsp;
                        <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" 
                        data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                     </td>
                    </tr>
                    <tr>
                    <td><Link to="/indivitualLeaveHistory" >john</Link></td>
                      <td>Casual</td>
                      
                      <td>2</td>
                      
                      <td>Sinthuja</td>
                      <td>
                      <ViewFullLeaveHistory></ViewFullLeaveHistory>
                      </td>
                      <td>
                      &nbsp; &nbsp;
                      <button type="submit" class="btn btn-success btn-circle" data-toggle="tooltip" 
                        data-placement="bottom" title="Accept" ><i class="fas fa-check"></i></button>
                        &nbsp; &nbsp;
                        <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" 
                        data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                    </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
          </section>
          </div>
        )
    }
}
export default ManageCancelLeaveRequests;