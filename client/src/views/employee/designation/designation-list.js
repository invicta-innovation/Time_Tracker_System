import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showModal,fetchDesination} from '../../../_actions/designation-action';



class DesignationList extends Component {
    componentWillMount(){
        this.props.getDesignation();
      }
    render() {
        return (
            <div>
                <table className="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>Id</th>
                <th>Designation Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.designations.map(designation => (
                <tr key={designation.id}>
                  <td>{designation.id}</td>
                  <td>{designation.designation}</td>
                  <button onClick={()=>this.props.showModal(designation)}>edit</button>
                </tr>
              ))}
              
            </tbody>
          </table>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    designations:state.designationStore.designations
  })
  const mapDispatchToProps=dispatch=>({
    getDesignation:()=>dispatch(fetchDesination()),
    showModal: (designation)=> dispatch(showModal({action:'EDIT',show:true,title:'Update Designation'},designation))
  })
export default connect(mapStateToProps,mapDispatchToProps)(DesignationList)