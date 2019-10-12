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
              </tr>
            </thead>
            <tbody>
              {this.props.companies.map(company => (
                <tr key={company.id}>
                  <td>{company.id}</td>
                  <td>{company.company}</td>
                  <button onClick={()=>this.props.showModal(company)}>edit</button>
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