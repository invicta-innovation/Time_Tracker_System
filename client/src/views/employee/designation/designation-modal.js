import React, { Component } from 'react';
import { UPDATE_DESIGNATION, ADD_DESIGNATION } from '../../../_constants/types';
import { connect } from 'react-redux';
import { Modal, Form, Col } from "react-bootstrap";
import { showModal, addDesignation, updateDesignation } from '../../../_actions/employee/designation-action';

class DesignationModal extends Component {
  state = {
    id: null,
    designation: '',
    action: null
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentWillReceiveProps(nextProps) {
      this.setState({ action: action });
    const { action } = nextProps.modaldata;
    // if (action === "EDIT") {
    // }else if (action === "ADD") {
    //   let {id, designation} = nextProps.designationObj;
    //   this.setState({ id: id, designation: designation, action: action });
    // }    
  }

  handleSubmit = () => {
    const { action } = this.state;
    let designationObj = {
      designation: this.state.designation
    }
    this.props.addDesignation(designationObj);
    // if (action === "ADD") {

    // } else if (action === "EDIT") {
    //   this.props.updateDesignation(designationObj);
    // }
    //  else if (action == "EDIT") {
    //   this.props.updateRecuitmentType(recuitmentTypeObj);
    // }

  };




  render() {
    // console.log("call compnent render");
    const { show, title } = this.props.modaldata;
    return (
      <div>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Id : </Form.Label>
                  <Form.Control
                    value={this.state.id}
                    type="text"
                    name="id"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row> */}
              <Form.Row>
                <Form.Group as={Col} controlId="designation">
                  <Form.Label> Designation : </Form.Label>
                  <Form.Control
                    value={this.state.designation}
                    type="text"
                    name="designation"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="submit"
              class="btn btn-danger "
              onClick={() => this.props.showModal(false)}>
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
    )
  }
}
const mapStateToProps = state => ({
  modaldata: state.designationStore.modaldata,
  designationObj: state.designationStore.designation
})
const mapDispatchToProps = dispatch => ({
  showModal: status => dispatch(showModal({ action: 'ADD', show: status, title: 'Add Designation' })),
  addDesignation: designationObj => dispatch(addDesignation(designationObj)),
  updateDesignation: designationObj => dispatch(updateDesignation(designationObj))

})

export default connect(mapStateToProps, mapDispatchToProps)(DesignationModal)