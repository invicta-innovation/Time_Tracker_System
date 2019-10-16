import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showModal,fetchRecruitment} from '../../../_actions/employee/recruitment-action';

class RecruitmentList extends Component {
    componentWillMount(){
        this.props.getrecruitments();
      }
    render() {
        return (
            <div>
                <table className="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>Id</th>
                <th>Employee Name</th>
                <th>Company Name</th>
                <th>Started Date</th>
                <th>End Date</th>
                <th>Work Role</th>
                <th>Employee Status</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {this.props.recruitments.map(recruitment => (
                <tr key={recruitment.id}>
                  <td>{recruitment.id}</td>
                  <td>{recruitment.employeeName}</td>
                  <td>{recruitment.companyName}</td>
                  <td>{recruitment.startedDate}</td>
                  <td>{recruitment.endDate}</td>
                  <td>{recruitment.employeeStatus}</td>
                  <td>{recruitment.workRole}</td>
                  <td>{recruitment.designation}</td>
                  <td><button className="btn btn-info btn" onClick={()=>this.props.showModal(recruitment)}>edit</button></td>
                </tr>
              ))}
              
            </tbody>
          </table>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    recruitments:state.recruitmentStore.recruitments
  })
  const mapDispatchToProps=dispatch=>({
    getrecruitments:()=>dispatch(fetchRecruitment()),
    showModal: (recruitment)=> dispatch(showModal({action:'EDIT',show:true,title:'Update recruitment'},recruitment))
  })
export default connect(mapStateToProps,mapDispatchToProps)(RecruitmentList)