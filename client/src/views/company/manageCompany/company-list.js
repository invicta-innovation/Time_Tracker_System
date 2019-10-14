import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showModal,fetchCompany} from '../../../_actions/company-action';

class CompanyList extends Component {
    componentWillMount(){
        this.props.getCompanies();
      }
    render() {
        return (
            <div>
                <table className="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>Id</th>
                <th>Company Name</th>
                <th>Tel No</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {this.props.companies.map(company => (
                <tr key={company.id}>
                  <td>{company.id}</td>
                  <td>{company.companyName}</td>
                  <td>{company.telNo}</td>
                  <td>{company.email}</td>
                  <td>{company.address}</td>
                  <td><button className="btn btn-info btn" onClick={()=>this.props.showModal(company)}>edit</button></td>
                </tr>
              ))}
              
            </tbody>
          </table>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    companies:state.companyStore.companies
  })
  const mapDispatchToProps=dispatch=>({
    getCompanies:()=>dispatch(fetchCompany()),
    showModal: (company)=> dispatch(showModal({action:'EDIT',show:true,title:'Update Company'},company))
  })
export default connect(mapStateToProps,mapDispatchToProps)(CompanyList)