import React, { Component } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { addRole, updateRole, showModal } from '../../../_actions/role-actions';
import { ROLE_MIN_LENGTH, Role_MAX_LENGTH } from "../../../_constants";
import swal from 'sweetalert';

class RoleModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {

      id: '',
      roleName: '',
      errors: {},
      action: null


    };
  }


  handleSubmit = () => {
    const { action } = this.state;

    const roleObj = {
      id: this.state.id,
      roleName: this.state.roleName
    }

    if (action == 'ADD') {
      if (this.isEmpty(this.state.errors)) {
         this.props.addRole(roleObj);
      }
    } else if (action == 'EDIT') {
      if (this.isEmpty(this.state.errors)) {
      this.props.updateRole(roleObj);
      }
    }

  }

  componentWillReceiveProps(nextProps) {
    const { action } = nextProps.modaldata;
    if (action == 'EDIT') {
      let { id, roleName } = nextProps.role;
      this.setState({ id, roleName, action });
    } else if (action == 'ADD') {
      this.setState({ roleName: '', action });
    }

    if (nextProps.errors != '') {
      this.setState({ errors: nextProps.errors })
    }
    if (nextProps.messages == 'Role_ADDED') {
      swal("Success!", "You have successfully saved the Role!", "success");
    }

    if (nextProps.messages == 'ROLE_UPDATED') {
      swal("Success!", "You have successfully Edited the Role!", "success");
    }
  }

  isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  handleChange = e => {
    this.setState({ errors: { [e.target.name]: '' } });
    this.setState({ [e.target.name]: e.target.value });
    this.validate(e.target.name, e.target.value);
    // {e => {
    //   role.roleName = e.target.value;
    //   this.setState({ role });
    // }}
  };

  // Validation Functions
  validate = (name, value) => {
    console.log(name, value);
    switch (name) {
      case 'roleName':

        const ROLE_NAME_REGEX = RegExp("^[a-zA-Z'.\\s]{1,40}$");
        if (value.length < ROLE_MIN_LENGTH) {
          this.setState(
            { errors: { roleName: `Role name is too short (Minimum ${ROLE_MIN_LENGTH} characters needed.)` } }
          )
        }
        else if (value.length > Role_MAX_LENGTH) {
          this.setState(
            { errors: { roleName: `Leave type name is too (Maximum ${Role_MAX_LENGTH} characters allowed.)` } }
          )
        } else if (!ROLE_NAME_REGEX.test(value)) {
          this.setState(
            { errors: { roleName: `Only character allowed.` } }
          )
        }
        else {
          this.setState(
            { errors: {} }
          )
        }
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
                  <Form.Label>Role Name</Form.Label>
                  <Form.Control type="text"
                    value={this.state.roleName}
                    name="roleName"
                    placeholder="Enter the Role Name"
                    onChange={this.handleChange}
                    autoComplete="off"
                  />

                  <small className="text-danger">{this.state.errors.roleName}</small>
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
              title="Close"
              onClick={() => this.props.onModalShow(false)}
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-info "
              data-toggle="tooltip"
              data-placement="bottom"
              title={buttonName}
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



const mapStatetoProps = (state) => {
  return {
    modaldata: state.roleStore.modaldata,
    role: state.roleStore.role,
    errors: state.roleStore.errors,
    messages: state.roleStore.messages
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModalShow: (showstatus) => dispatch(showModal({ action: "ADD", show: showstatus, title: "Add User Role" })),
    addRole: (obj) => dispatch(addRole(obj)),
    updateRole: (obj) => dispatch(updateRole(obj))
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(RoleModal)
