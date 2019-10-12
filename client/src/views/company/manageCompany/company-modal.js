import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ADD_COMPANY,UPDATE_COMPANY} from '../../../_constants/types';
import {Modal,Form,Col} from "react-bootstrap";
import {showModal} from '../../../_actions/company-action';

class CompanyModal extends Component {
    state={
        id:null,
        company:''
      }
      
      componentWillReceiveProps(nextProps){
        console.log(nextProps.companyObj)
        this.setState({
          id:nextProps.companyObj.id,
          company:nextProps.companyObj.company
          });
      }
      handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }
      handleSubmit=()=>{
        console.log(this.props.modaldata.action)
        if(this.props.modaldata.action==='EDIT'){
          this.props.updateCompany(this.state)
        }else{
          this.props.addCompany(this.state)
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
                  <Form.Label> Company : </Form.Label>
                  <Form.Control
                  value={this.state.company} 
                  type="text" 
                  name="company"
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
        modaldata:state.companyStore.modaldata,
        companyObj:state.companyStore.company
      })
      const mapDispatchToProps=dispatch=>({
        updateCompany: (obj)=> dispatch({type:UPDATE_COMPANY,payload:obj}),
        addCompany: (obj)=> dispatch({type:ADD_COMPANY,payload:obj}),
        showModal: status =>dispatch(showModal({action:'ADD',show:status,title:'Add Company'}))
      })
    export default connect(mapStateToProps,mapDispatchToProps)(CompanyModal)