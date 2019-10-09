import React, { Component } from 'react'
import Card from '../../../commons/card';
import {
   Modal,
   
 } from "react-bootstrap";
export default class ViewFullLeaveHistory extends Component {
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
        return (
           <div>

<button type="submit" class="btn btn-secondary  btn-circle" size="lg-6" data-toggle="tooltip" 
                        data-placement="bottom" title="Reject" onClick={this.handleShow}><i class='far fa-eye' ></i></button>
                    
         <Modal show={this.state.show} onHide={this.handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Leave Details</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <section class="py-3">
          <div class="row"></div>
          <div class="col-lg-12 mb-12">
          <div class="card">
            
            <div class="card-body">                           
              <table  class="table table-borderless" >
                <thead>
                <tr >
                       <td ><b>Employee Name :  </b></td>
                       <td>Mark</td> 
                      
                    </tr>
                    <tr>
                       <td><b>Leave Type : </b></td>
                       <td>Casual</td> 
                    </tr>
                    <tr>
                       <td><b>Start Date : </b></td>
                       <td>08.08.2020</td> 
                    </tr>
                    <tr>
                       <td><b>End Date : </b></td>
                       <td>08.08.2020</td> 
                    </tr>
                    <tr>
                       <td><b>Apply Date : </b></td>
                       <td>08.08.2020</td> 
                    </tr>
                    <tr>
                       <td><b>No of Days :</b></td>
                       <td>2</td> 
                    </tr>
                    <tr>
                       <td><b>Reason : </b></td>
                       <td>exam</td> 
                    </tr>
                    <tr>
                       <td><b>Reject Reason : </b></td>
                       <td>exam</td> 
                    </tr>
                    <tr>
                       <td><b>as employee Cancel request Reason : </b></td>
                       <td>exam</td> 
                    </tr>
                    <tr>
                       <td><b>Cancel Requst Reject Reason : </b></td>
                       <td>exam</td> 
                    </tr>
                    <tr>
                       <td><b>Reject  Requst Disagree Reason : </b></td>
                       <td>exam</td> 
                    </tr>
                    <tr>
                       <td><b>Approved By</b></td>
                       <td>Sinthuja</td> 
                    </tr>
                    <td><b>Attachment :</b></td>
                       
                        <td>
                        <button class="btn btn-secondary  btn-circle"><i class='far fa-eye' ></i></button>&nbsp;&nbsp;&nbsp;&nbsp; 
                        <button class="btn btn-secondary btn-circle"><i class="fa fa-download"></i></button>
                       </td>
                </thead>
                <tbody>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </section>
         </Modal.Body>
         
       </Modal>
       </div>
          
          
        )
    }
}
