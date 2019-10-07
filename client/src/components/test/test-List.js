import React, { Component } from 'react'
import {showModal, fetchTests} from '../../_actions/test-action'
import { connect } from 'react-redux';

class TestList extends Component {
    componentWillMount(){
        this.props.getTests();
      }
    
    render() {
        return (
            <table className="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>Id</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tests.map(test => (
                <tr key={test.id}>
                  <td>{test.id}</td>
                  <td>{test.test}</td>
                  <button onClick={()=>this.props.showModal(test)}>edit</button>
                </tr>
              ))}
              
            </tbody>
          </table>
        )
    }
}
const mapStateToProps = state =>({
    tests:state.testStore.tests
  })
  const mapDispatchToProps=dispatch=>({
    getTests:()=>dispatch(fetchTests()),
    showModal: (test)=> dispatch(showModal({action:'EDIT',show:true,title:'Update Test'},test))
  })
export default connect(mapStateToProps,mapDispatchToProps)(TestList)