import React, { Component } from "react";
import { connect } from 'react-redux';
import {createUser,updateUser,validateUser} from '../../../_actions/user-action';
import {showModal}from '../../../_actions/user-action';
import { Modal, Form, Col, Button } from "react-bootstrap";
import { fetchRole } from "../../../_actions/role-actions";
import{isEmpty} from '../../../_function/index';

import swal from 'sweetalert';

let errorArr=[];
class UserModal extends Component {
 state = {
        id:null,
        userName:'',
        email:'',
        role:null,
        password:'',
        action:'',
        error:['']
      }


componentDidMount(){
  this.props.fetchRole();
}
handleChange=(e)=>{
  this.setState({[e.target.name]:e.target.value})
  this.validate(e.target.name,e.target.value)
}
handleSubmit=()=>{
    const userObj={
      id:this.state.id,
      userName:this.state.userName ,
      role: this.state.role,
      email: this.state.email,
      password:this.state.password
    }
    this.props.validateUser(userObj);
    if(this.props.modaldata.action=='ADD' && isEmpty(this.state.error)){
      swal({
        title: "Are you sure?",
        text: "Do you want take this leave !",
        // icon: "sucess",
        buttons: true,
        // dangerMode: true,
      }).then((willCreate) => {
        if (willCreate) {
          this.props.createUser(userObj);
        } 
      });
    }
    else if(this.props.modaldata.action=='EDIT' && this.state.error==null){
          this.props.updateUser(userObj);
        }
    }
     
  componentWillReceiveProps(nextProps){
    if(nextProps.message=='USER_ADDED'){
      swal("Success!", "You have successfully Crated the User!", "success");
      this.setState({userName:'',email:'',password:'',role:null,error:null});
    }
    if(nextProps.message=='USER_EDITED'){
      swal("Success!", "You have successfully Edited the User!", "success");
      this.setState({userName:'',email:'',password:'',role:null,error:null});
    }
    this.setState({
      action:nextProps.modaldata.action
    })
    if (nextProps.error != null) {
      this.setState({ 
        error: nextProps.error
      })
    console.log(this.state.error)
      return;
    }  
      if(nextProps.modaldata.action=='EDIT'){
        this.setState({
        id:nextProps.user.id,
        userName:nextProps.user.userName,
        email:nextProps.user.email,
        role:nextProps.user.role.id,
        password:nextProps.user.password,
        error:null
        });
      }else  
      if(this.state.action=='ADD'){
        this.setState({userName:'',email:'',password:'',role:null,error:['']});
        }
    }

    renderPassword=()=>{
      if(this.state.action=='ADD'){
        return(
          <Form.Row>
          <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              value={this.state.password}
              type="text" 
              name="password"
              onChange={this.handleChange}
              // onBlur={this.handleValidate}
            />
                <small className="text-danger">{this.state.error== null ? '': this.state.error.password}</small>
          </Form.Group>
          </Form.Row>
        )
      }
    }
  // Validation Functions
  
  validate = (name, value) => {
   console.log(errorArr)
    switch (name) {
      case 'userName':
        const USER_NAME_REGEX = RegExp("^[a-zA-Z'.\\s]{1,40}$");
        if (value.length < 5) {
          errorArr['userName']=`username is too short (Minimum ${5} characters needed.)`;
        }
        else if (value.length > 15) {
          errorArr['userName']=`username is too long (Maximum ${15} characters allowed.)`;
        } else if (!USER_NAME_REGEX.test(value)) {
          errorArr['userName']=`Only character allowed.`;
        }else{
          delete errorArr['userName']
        }
    
        break;
        case 'password':
            if (value.length < 8) {
              errorArr['password']= `password is too short (Minimum ${8} characters needed.)`;
            }
            else if (value.length > 10) {
              errorArr['password']=`password is too long (Maximum ${10} characters allowed.)`;
            } else{
              delete errorArr['password']
            }
           
            break;

    }
    
    this.setState({
      error:errorArr
     })
  }
  render() {
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
                <Form.Label>User Name</Form.Label>
                <Form.Control
                value={this.state.userName} 
                type="text" 
                name="userName"
                onChange={this.handleChange}
                // onBlur={this.handleValidate}
                />
                <small className="text-danger">{this.state.error == null ? '': this.state.error.userName}</small>

              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="role">
                <Form.Label>Role :</Form.Label>
                <Form.Control as="select"
                 value={this.state.role}
                  name="role"
                  onChange={this.handleChange}
                  // onBlur={this.handleValidate}
                >
                   <option  value="0">Select The Role</option> 
                  {
                    this.props.roleList.map(role=>
                      <option key={role.id} value={role.id}>{role.roleName}</option>
                      )
                  }
                  
                </Form.Control>
                <small className="text-danger">{this.state.error == null ? '': this.state.error.role}</small>

              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>E-mail</Form.Label>
                <Form.Control 
                  value={this.state.email}
                  type="text" 
                  name="email"
                  onChange={this.handleChange}
                  // onBlur={this.handleValidate}
                />
                <small className="text-danger">{this.state.error == null ? '': this.state.error.mail}</small>

              </Form.Group>
            </Form.Row>
            
           {this.renderPassword()}
           
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            class="btn btn-danger "
            onClick={() => this.props.showModal(false)}
          >
            Close
          </button>
            <button
              type="submit"
              class="btn btn-info "
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

const mapDispachToProps = dispatch => ({
    showModal: showstatus =>
    dispatch(
      showModal({ action: "ADD", show: showstatus, title: "Add User" })
    ),
    createUser:(obj)=>dispatch(createUser(obj)),
    validateUser:(obj)=>dispatch(validateUser(obj)),
    updateUser:(obj)=>dispatch(updateUser(obj)),    
    fetchRole:()=>dispatch(fetchRole())
    
});
const mapStateToProps = state =>({
  roleList:state.roleStore.roles,
  modaldata: state.userStore.modaldata,
  user:state.userStore.user,
  error:state.userStore.errors,
  action:state.userStore.action,
  message:state.userStore.message
})
export default connect (mapStateToProps,mapDispachToProps)(UserModal)