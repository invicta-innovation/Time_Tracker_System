import React, { Component } from 'react';
import { UPDATE_PROJECT, ADD_PROJECT } from '../../../_constants/types';
import { connect } from 'react-redux';
import {Modal,Form,Col} from "react-bootstrap";
import {showModal} from '../../../_actions/project-action';

class ProjectModal extends Component {
    state={
        id:null,
        project:''
      }
      
      componentWillReceiveProps(nextProps){
        console.log(nextProps.projectObj)
        this.setState({
          id:nextProps.projectObj.id,
          project:nextProps.projectObj.project
          });
      }
      handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }
      handleSubmit=()=>{
        console.log(this.props.modaldata.action)
        if(this.props.modaldata.action==='EDIT'){
          this.props.updateProject(this.state)
        }else{
          this.props.addProject(this.state)
        }
      }
      
      render() {
        console.log("call compnent render");
        const { show,title} = this.props.modaldata;
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
                <Form.Label>Id : </Form.Label>
                <Form.Control
                value={this.state.id} 
                type="text" 
                name="id"
                onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Project : </Form.Label>
                  <Form.Control
                  value={this.state.company} 
                  type="text" 
                  name="project"
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
                onClick={()=>this.props.showModal(false)}
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
            )
        }
    }
    const mapStateToProps = state =>({
        modaldata:state.projectStore.modaldata,
        projectObj:state.projectStore.project
      })
      const mapDispatchToProps=dispatch=>({
        updateProject: (obj)=> dispatch({type:UPDATE_PROJECT,payload:obj}),
        addProject: (obj)=> dispatch({type:ADD_PROJECT,payload:obj}),
        showModal: status =>dispatch(showModal({action:'ADD',show:status,title:'Add Project'}))
      })
    export default connect(mapStateToProps,mapDispatchToProps)(ProjectModal)