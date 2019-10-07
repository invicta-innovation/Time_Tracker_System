import React, { Component } from 'react'
import { connect } from 'react-redux';
import {NEW_TEST,EDIT_TEST} from '../../_constants/types'
import { Modal, Form, Col, Button } from "react-bootstrap";
import { showModal } from '../../_actions/test-action';

class TestModal extends Component {
  state={
    id:null,
    test:''
  }
  
  componentWillReceiveProps(nextProps){
    console.log(nextProps.testObj)
    this.setState({
      id:nextProps.testObj.id,
       test:nextProps.testObj.test
      });
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit=()=>{
    console.log(this.props.modaldata.action)
    if(this.props.modaldata.action=='EDIT'){
      this.props.updateTest(this.state)
    }else{
      this.props.createTest(this.state)
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
              <Form.Label> Test : </Form.Label>
              <Form.Control
              value={this.state.test} 
              type="text" 
              name="test"
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
    modaldata:state.testStore.modaldata,
    testObj:state.testStore.test
  })
  const mapDispatchToProps=dispatch=>({
    updateTest: (obj)=> dispatch({type:EDIT_TEST,payload:obj}),
    createTest: (obj)=> dispatch({type:NEW_TEST,payload:obj}),
    showModal: status =>dispatch(showModal({action:'ADD',show:status,title:'Add User'}))
  })
export default connect(mapStateToProps,mapDispatchToProps)(TestModal)