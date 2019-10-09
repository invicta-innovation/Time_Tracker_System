import React, { Component } from 'react';
import { Modal, Form, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  showModal,
  addDesignation,
  updateDesignation
} from "../../../_actions/designation-action";
import { DESIGNATION_MIN_LENGTH, DESIGNATION_MAX_LENGTH } from "../../../_constants";
import swal from 'sweetalert';

class DesignationForm extends Component {
    state = {
        id: "",
        designation: "",
        errors:{},
        action:null
      };

      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({errors:{[e.target.name]:''}});
        this.validate(e.target.name,e.target.value);
      };
      handleSubmit = () => {
    const{action}=this.state;
        let designationObj={
          id:this.state.id,
          designation:this.state.designation
        }
        this.checkEmptySpace();
        if(this.isEmpty(this.state.errors)){
          if(action=="ADD"){
          this.props.addDesignation(designationObj);
        }
        else if(action=="EDIT"){
          this.props.updateDesignation(designationObj);
        }
        }
        };
      isEmpty=(obj)=>{
        for(var key in obj){
          if(obj.hasOwnProperty(key))
          return false;
        }
        return true;
      }
    
      componentWillReceiveProps(nextProps) {
        const{action} = nextProps.modaldata;
        if (action == "EDIT") {
          let {id,designation}=nextProps.designation;
          this.setState({id,designation,action});
        } else if (action == "ADD") {
          this.setState({ designation: '',action:action});
        }
        if (nextProps.errors != '') {
          this.setState({ errors: nextProps.errors })
        }
        if(nextProps.messages =='DESIGNATION_ADDED'){
          swal("Sucess!", "You have suceesfully saved the Designation!", "success");
        }
        if(nextProps.messages =='Designation_EDITED'){
          swal("Sucess!", "You have suceesfully Edited the Designation!", "success");
        }
      }

      validate=(name,value)=>{
        console.log(name,value);
        switch(name){
          case 'designation':
            const DESIGNATION_NAME_REGEX=RegExp("^[a-zA-Z'.\\s]{1,40}$");
            if(value.length<DESIGNATION_MIN_LENGTH){
              this.setState(
                {errors:{designation:`Designation is Too Short(Minimum ${DESIGNATION_MIN_LENGTH} characters needed.)`}}
              )
            }
            else if(value.length>DESIGNATION_MAX_LENGTH){
              this.setState({
                errors:{
                  designation:`Designation is too (Maximum ${DESIGNATION_MAX_LENGTH} charectors allowed)`}}
              )
            }
          else{
            this.setState({errors:{}}
              )
          }
        }
      }
      checkEmptySpace=()=>{
        if(this.state.designation.trim()===""){
          this.setState(
            {errors:{designation:`please enter designation `}}
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
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                      type="text"
                      name="designation"
                      placeholder="Enter the Designation Name"
                      value={this.state.designation}
                      onChange={this.handleChange}
                    />
                    <small className="text-danger">{this.state.errors.designation}</small>
                  </Form.Group>
                </Form.Row>

              </Form>

            </Modal.Body>
            <Modal.Footer>
              <button
                type="submit"
                class="btn btn-danger "
                data-toggle="tooltip"
              data-placement="bottom"
                onClick={() => this.props.onModalShow(false)}
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-info "
                onClick={this.handleSubmit}
                title="Accept"
                data-toggle="tooltip"
                data-placement="bottom" >
             { buttonName}
                </button>
            </Modal.Footer>
          </Modal>
       
        )
    }
}

const mapStateToProps = state => {
  return{
    modaldata: state.designationStore.modaldata,
    designation: state.designationStore.designation,
    errors: state.designationStore.errors,
    messages:state.designationStore.messages
  };
};
  
  const mapDispatchToProps = dispatch => {
    return{
    onModalShow:(showstatus)=>dispatch(showModal({action:"ADD",show:showstatus,title:"Add  Designation"})),
    addDesignation: obj => dispatch(addDesignation(obj)),
    updateDesignation: obj => dispatch(updateDesignation(obj))
  }};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DesignationForm);
  
