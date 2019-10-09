import React, { Component } from 'react'
import Tracker from '../../../commons/tracker';
import {
    Modal,
    Popover,
    Form,
    Col
  } from "react-bootstrap";
export default class LeaveRequest extends Component {
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
            <div class="row roundy py-3 bg-hover-secondary  no-anchor-style" style={{ backgroundColor: '#ffff' }}>
                
                <div class="col-md-8">

                    <Tracker />

                </div>

                <div class="col-md-4" >
                    <div class='row'> <div class='col-md-6'>
                        <b >From :</b></div> <div class='col-md-6'>{this.props.startDate}</div> </div>

                    <div class='row'> <div class='col-md-6'>
                        <b >To :</b></div> <div class='col-md-6'>{this.props.endDate}  </div> </div>
                    <div class='row'> <div class='col-md-6'>
                        <b >No of Days :</b></div > <div class='col-md-6'>{this.props.NoofDays}&nbsp;Days</div> </div>
                    <div class='row'> <div class='col-md-6'>
                        <b >Leave Type :</b></div> <div class='col-md-6'>{this.props.leaveType} </div> </div>
                    <div class='row'> <div class='col-md-6'>
                        <b >Reason :</b></div> <div class='col-md-6'>{this.props.reason}</div> </div>
                    <div class='row'>
                        <div class='col-md-6'>
                            <b >Attachment :  </b>
                        </div>
                        <div class='col-md-6'>
                            <button class="btn btn-primary  btn-circle"><i class='far fa-eye' ></i></button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button class="btn btn-primary btn-circle"><i class="fa fa-download"></i></button>

                        </div>
                    </div>
                       <br></br>
                    <div class='row'>
                    <div class='col-md-11'>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-success btn-sm " data-toggle="tooltip"
                            data-placement="bottom" title="Accept" >Accept</button>
                        &nbsp; &nbsp;
                        <button type="submit" class="btn btn-danger " size="lg-6" data-toggle="tooltip"
                            data-placement="bottom" title="Reject" onClick={this.handleShow}>Reject</button>
                    </div>
                    </div></div>

                </div>
            </div>
            </div>
        )
    }
}