import React, { Component } from "react";
import {
  Modal,
  Popover,
  Form,
  Col
} from "react-bootstrap";

class ManageCarryforwardRequest extends Component{
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
          //Model Window Config
          <div>
          <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <h6 class="text-uppercase mb-0">Reject Reason</h6>
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
            <button type="submit" class="btn btn-success " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Cinfirm</button>
            <button type="submit" class="btn btn-danger " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Close</button>
          </Modal.Footer>
        </Modal>

        {/* //Carryforward leave Requests form */}
          <section class="py-3">
            <div class="row"></div>
            <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-header">
                <h6 class="text-uppercase mb-0">Carryforward Leave Requests</h6>
              </div>
              <div class="card-body">                           
                <table class="table table-striped table-hover card-text">
                  <thead>
                    <tr> 
                      <th>Employee Name</th>
                      <th>Avilable Days</th>
                      <th>Requested Days</th>
                      <th>Valid Period</th>
                      <th>Accept / Reject</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>10</td>
                      <td>3</td>
                      <td>12.06.2019-15.06.2019</td>
                      <td>
                      &nbsp; &nbsp;
                        <button type="submit" class="btn btn-success btn-circle" data-toggle="tooltip" data-placement="bottom" title="Accept"><i class="fas fa-check"></i></button>
                        &nbsp; &nbsp;&nbsp;
                        <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" data-placement="bottom" title="Reject" onClick={this.handleShow} ><i class="fas fa-times"></i></button>
                    </td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>15</td>
                      <td>7</td>
                      <td>08.08.2020-15.08.2020</td>
                      <td>
                      &nbsp; &nbsp;
                        <button type="submit" class="btn btn-success btn-circle" data-toggle="tooltip" data-placement="bottom" title="Accept"><i class="fas fa-check"></i></button>
                        &nbsp; &nbsp;&nbsp;
                        <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                    </td>
                    </tr>
                    <tr>
                      <td>Larry</td>
                      <td>10</td>
                      <td>10</td>
                      <td>01.01.2020-10.01.2020</td>
                      <td>
                      &nbsp; &nbsp;
                        <button type="submit" class="btn btn-success btn-circle" data-toggle="tooltip" data-placement="bottom" title="Accept"><i class="fas fa-check"></i></button>
                        &nbsp; &nbsp;&nbsp;
                        <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                    </td>
                    </tr>
                    <tr>
                      <td>Sam</td>
                      <td>4</td>
                      <td>2</td>
                      <td>23.12.2020-25.12.2020</td>
                      <td>
                      &nbsp; &nbsp;
                        <button type="submit" class="btn btn-success btn-circle" data-toggle="tooltip" data-placement="bottom" title="Accept"><i class="fas fa-check"></i></button>
                        &nbsp; &nbsp;&nbsp;
                        <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                    </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
       
        </section>
        </div>
        )
    }
}
export default ManageCarryforwardRequest;