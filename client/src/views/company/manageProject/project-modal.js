import React, { Component } from 'react';
import { UPDATE_PROJECT, ADD_PROJECT } from '../../../_constants/types';
import { connect } from 'react-redux';
import {Modal,Form,Col} from "react-bootstrap";
import {showModal,addProject} from '../../../_actions/company/project-action';

class ProjectModal extends Component {
    state={
        id:null,
        projectName:'',
        startedDate:'',
        finishedDate:'',
        description:'',
        projectStatus:''
      }
      
      componentWillReceiveProps(nextProps){
        console.log(nextProps.projectObj)
        this.setState({
          id:nextProps.projectObj.id,
          projectName:nextProps.projectObj.projectName,
          startedDate:nextProps.projectObj.startedDate,
          finishedDate:nextProps.projectObj.finishedDate,
          description:nextProps.projectObj.description,
          projectStatus:nextProps.projectObj.projectStatus,
          
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
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Project Name: </Form.Label>
                  <Form.Control
                  value={this.state.projectName} 
                  type="text" 
                  name="projectName"
                  onChange={this.handleChange}
                  />
                </Form.Group>
            </Form.Row>
              
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Started Date: </Form.Label>
                  <Form.Control
                  value={this.state.startedDate} 
                  type="date" 
                  name="startedDate"
                  onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Finished Date: </Form.Label>
                  <Form.Control
                  value={this.state.finishedDate} 
                  type="date" 
                  name="finishedDate"
                  onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              
              <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Project Status: </Form.Label>
                  <Form.Control
                  value={this.state.projectStatus} 
                  type="text" 
                  name="projectStatus"
                  onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea2">
                  <Form.Label> Description: </Form.Label>
                  <Form.Control
                  value={this.state.description} 
                  type="text" 
                  name="description"
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
        addProject: (obj)=> dispatch(addProject(obj)),
        showModal: status =>dispatch(showModal({action:'ADD',show:status,title:'Add Project'}))
      })
    export default connect(mapStateToProps,mapDispatchToProps)(ProjectModal)