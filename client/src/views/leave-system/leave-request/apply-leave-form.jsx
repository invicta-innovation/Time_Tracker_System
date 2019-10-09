import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import {CreateLeaveRequest,fetchLeaveRequests} from '../../../_actions/leave-action';
import {getLeaveType} from '../../../_actions/leaveType-action';
import swal from 'sweetalert';
import{getNumberOfDays,isEmpty} from '../../../_function/index';

class ApplyLeaveForm extends Component {

state={
    
    startDate: null,
    endDate: null,
    noOfDays:0,
    reason: null,
    leaveType:null,
    error:['']
}

componentWillMount(){
  this.props.getLeaveType();
  this.setState({
    startDate:this.props.startdate,
    endDate:this.props.enddate
  })
  
}
componentDidMount(){
  this.setState({noOfDays:getNumberOfDays(this.state.startDate,this.state.endDate)})
}
componentWillReceiveProps(nextprops){
  if(nextprops.message=="LEAVE_ADDED"){
    swal("Success!", "You have successfully Applied the Leave!", "success");
  }
}
getEndDatenoOfDay=(e)=>{
  this.handleChange(e);
  this.setState({noOfDays:getNumberOfDays(this.state.startDate,e.target.value)}) 
}
getStartDatenoOfDay=(e)=>{
  this.handleChange(e);
  this.setState({noOfDays:getNumberOfDays(e.target.value,this.state.endDate)})

}
handleChange=(e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
  this.validate(e.target.name, e.target.value);
}

handleSubmit=()=>{
 const obj={
  startDate: this.state.startDate,
  endDate: this.state.endDate,
  noOfDays:this.state.noOfDays,
  reason: this.state.reason,
  leaveType:this.state.leaveType
 }
 console.log(obj);
const errors=[];
  if(this.state.startDate==null){
      errors['startDate']= `Start date is required !!, Please select StartDate`;
  } if(this.state.endDate==null){
    errors['endDate']= `End date is required !!, Please select EndDate`;

    
  } if(this.state.leaveType==null){
    errors['leaveType']= `Leavetype is required !!, Please select Leavetype `;
  }if(this.state.reason==null){
    errors['reason']= `reason is required !!, Please Enter the reason`;
  }
  this.setState(
      { error: errors }
    )

  if(isEmpty(this.state.error)){
    swal({
      title: "Are you sure?",
      text: "Do you want take this leave !",
      // icon: "sucess",
      buttons: true,
      // dangerMode: true,
    }).then((willCreate) => {
      if (willCreate) {
       let requestUser=this.props.authData.id
       console.log(requestUser)
        this.props.CreateLeaveRequest(obj,requestUser);
        this.props.handleClose();
      } 
    });
  }
 
}
validate = (name, value) => {
  let errorArr=[];
  switch (name) {
    case 'reason':
      const REASON_REGEX = RegExp("^[a-zA-Z'.\\s]{1,40}$");
      if (value.length < 10) {
        errorArr['reason']=`reason is too short (Minimum ${10} characters needed.)`;
        
      }
     else if (value.length > 100) {
      errorArr['reason']= `reason is too long (Maximum ${100} characters allowed.)`;
      } 
      else if (!REASON_REGEX.test(value)) {
        errorArr['reason']= `Only character allowed.`;
      }
      this.setState(
        {error:errorArr}
      )
      console.log(this.state.error)
      break;
 
  }
}

render() {
    return (
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="startdate">
              <Form.Label>Start Date : </Form.Label>
              <Form.Control 
              type="date" 
              min="today"
              name="startDate" 
              value={this.state.startDate} 
              onChange={this.getStartDatenoOfDay}
              max={this.state.endDate} 
              />
                <small className="text-danger">{this.state.error == null ? '': this.state.error.startDate}</small>

            </Form.Group>

            <Form.Group as={Col} controlId="enddate">
              <Form.Label>End Date : </Form.Label>
              <Form.Control 
              min={this.state.startDate}
              type="date"
               name="endDate" 
               value={this.state.endDate} 
               onChange={this.getEndDatenoOfDay}

                />
                <small className="text-danger">{this.state.error == null ? '': this.state.error.endDate}</small>
            </Form.Group>

            <Form.Group as={Col} controlId="days">
              <Form.Label>No Of Days :</Form.Label>
              <Form.Control 
                name="noOfDays"
                readOnly  
                value={this.state.noOfDays}
                />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="leavetype">
              <Form.Label>Leave type :</Form.Label>
              <Form.Control as="select"
                 value={this.state.leaveType}
                  name="leaveType"
                  onChange={this.handleChange}
                >
                   <option  value="0">Select The LeaveType</option> 
                  {
                    this.props.leavetypeList.map(leavetype=>
                      <option key={leavetype.id} value={leavetype.id}>{leavetype.leaveTypeName}</option>
                      )
                  }
                  
                </Form.Control>
                <small className="text-danger">{this.state.error == null ? '': this.state.error.leaveType}</small>

            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>&nbsp;</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <Form.Label>Reason</Form.Label>
              <Form.Control as="textarea" 
              name="reason" 
              rows="2" 
              onChange={this.handleChange}
              />
                <small className="text-danger">{this.state.error == null ? '': this.state.error.reason}</small>
            </Form.Group>
          </Form.Row>
          <Button 
          variant="primary" 
          onClick={this.handleSubmit}
          >
            Apply
          </Button>
          <Button 
          variant="primary" 
          onClick={ this.props.handleClose}
          >
            Close
          </Button>
        </Form>
      </div>
    );
  }
}
const mapDispachToProps = dispatch => ({
  CreateLeaveRequest:(leaveObj,id)=>dispatch(CreateLeaveRequest(leaveObj,id)),
  fetchLeaveRequests:()=>dispatch(fetchLeaveRequests()),
  getLeaveType:()=>dispatch(getLeaveType())
});
const mapStateToProps = state =>({
  leaveRequests:state.leaveStore.leaveRequests,
  // message:state.leaveStore.message,
  leaveError:state.leaveStore.errors,
  noOfDay:state.leaveStore.noOfDay,
  leavetypeList:state.leaveTypeStore.leaveTypes,
  auth: state.authStore.isAuth,
  authData: state.authStore.authData
});
export default connect(mapStateToProps,mapDispachToProps)(ApplyLeaveForm);