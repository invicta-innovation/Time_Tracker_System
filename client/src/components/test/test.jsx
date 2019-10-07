import React, { Component } from 'react'
import { connect } from 'react-redux';
import {showModal} from '../../_actions/test-action'
import TestModal from './test-modal';
import TestList from './test-List';

class Test extends Component {
  
    render() {
        return (
        <div className="col-sm-4">
          <div className="card">
          <div className="d-flex justify-content-between card-header">
            <h3 className="h6 mb-0">List of tests</h3>
            <button
          type="submit"
          className="btn btn-info btn"
          data-toggle="tooltip"
          data-placement="bottom"
          title="addUser"
          btn-align="right"
          onClick={()=>this.props.showModal(true)}
          >
          + Test
        </button>
        <TestModal/>
          </div>
          <div className="card-body">
            <TestList />
          </div>
        </div>
        </div>
        )
    }
}
const mapStateToProps = state =>({
    // tests:state.testStore.tests
  })
  const mapDispatchToProps=dispatch=>({
    showModal: (status)=> dispatch(showModal({action:'ADD',show:status,title:'Create Test'}))
  })
export default connect(mapStateToProps,mapDispatchToProps)(Test)