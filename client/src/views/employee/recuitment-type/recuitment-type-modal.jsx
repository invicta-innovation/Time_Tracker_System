import React, { Component } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import {
  addRecuitmentType,
  updateRecuitmentType,
  showModal
} from "../../../_actions/recuitment-type-action";
import { RECUITMENT_MIN_LENGTH, RECUITMENT_MAX_LENGTH } from "../../../_constants";
import swal from 'sweetalert';

class RecuitmentTypeModel extends Component {
    state = {
        id: "",
        recuitmentTypeName: "",
        errors: {},
        action:null
    };

  handleChange = (e) => {
    this.setState({ errors: { [e.target.name]: '' } })
    this.setState({ [e.target.name]: e.target.value });
    this.validate(e.target.name, e.target.value);
  };

  handleSubmit =()=> {
    const{action} =this.state;
    let recuitmentTypeObj ={
      id:this.state.id,
      recuitmentTypeName:this.state.recuitmentTypeName
    }
    this.checkEmptySpace();
    
    if (this.isEmpty(this.state.errors)) {
    if (action== "ADD") {
      this.props.addRecuitmentType(recuitmentTypeObj);
      }
     else if (action == "EDIT") {
      this.props.updateRecuitmentType(recuitmentTypeObj);
    }
  }
  };

  isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  

  componentWillReceiveProps(nextProps) {
    const{action} =nextProps.modaldata;
    if (action == "EDIT") {
      let {id,recuitmentTypeName}=nextProps.recuitmentType;
      this.setState({id,recuitmentTypeName,action});
    } else if (action == "ADD") {
      this.setState({ recuitmentTypeName: '', action:action });
    }
    if (nextProps.errors != '') {
      this.setState({ errors: nextProps.errors })
    }
    if(nextProps.messages =='RECUITMENT_TYPE_ADDED'){
      swal("Success!", "You have successfully Saved the Recuitment Type!", "success");
    }
    if(nextProps.messages =='RECUITMENT_TYPE_EDITED'){
      swal("Success!", "You have successfully Edited the Recuitment Type!", "success");
    }
  }

    // Validation Functions
    validate = (name, value) => {
      console.log(name, value);
      switch (name) {
        case 'recuitmentTypeName':
          const RECUITMENT_NAME_REGEX = RegExp("^[a-zA-Z'.\\s]{1,40}$");
          if (value.length < RECUITMENT_MIN_LENGTH) {
            this.setState(
              { errors: { RecuitmentType: `Leave type name is too short (Minimum ${RECUITMENT_MIN_LENGTH} characters needed.)` } }
            )
          }
          else if (value.length > RECUITMENT_MAX_LENGTH) {
            this.setState(
              { errors: { RecuitmentType: `Leave type name is too (Maximum ${RECUITMENT_MAX_LENGTH} characters allowed.)` } }
            )
          } else if (!RECUITMENT_NAME_REGEX .test(value)) {
            this.setState(
              { errors: { RecuitmentType: `Only character allowed.` } }
            )
          }
          else {
            this.setState(
              { errors: {} }
            )
          }
      }
    }

    checkEmptySpace=()=>{
      if(this.state.recuitmentTypeName.trim()===""){
        this.setState(
          { errors: {recuitmentTypeName: `Please enter recuitment type.` } }
        )
      }
    }  

    render() {
      const { show, title, buttonName } = this.props.modaldata;
      
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
                  <Form.Label>Recruitment Type Name</Form.Label>
                  <Form.Control
                    type="text"
                      name="recuitmentTypeName"
                      placeholder="Enter the Recruitmenttype Name.."
                    value={this.state.recuitmentTypeName}
                    onChange={this.handleChange}
                  />
              <small className="text-danger">{this.state.errors.recuitmentType}</small>
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
              title="Accept"
              onClick={()=>this.props.onModalShow(false)}
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-info "
              data-toggle="tooltip"
              data-placement="bottom"
              title="Accept"
              onClick={this.handleSubmit}
            >
             {buttonName}
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    modaldata: state.recuitmentTypeStore.modaldata,
    recuitmentType: state.recuitmentTypeStore.recuitmentType,
    errors: state.recuitmentTypeStore.errors,
    messages: state.recuitmentTypeStore.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onModalShow: (showstatus) => dispatch(showModal({ action: "ADD", show: showstatus, title: "Add Recuitment Type" })),
    addRecuitmentType: obj => dispatch(addRecuitmentType(obj)),
    updateRecuitmentType: obj => dispatch(updateRecuitmentType(obj))
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(RecuitmentTypeModel);
