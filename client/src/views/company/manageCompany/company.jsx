import React, { Component } from 'react';

class Company extends Component {
    render() {
        return (
            <section class="py-3">

            <div class="card">
              <div class="d-flex justify-content-between card-header">
                <h3 class="h6 text-uppercase mb-0">Company</h3>
    
                <button
                  type="submit"
                  class="btn btn-info btn"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="add company"
                  btn-align="right"
                  onClick={()=>this.props.showModal(true)}
                >
                  + Company
            </button>
            
                {/* <CompanyModal /> */}
              </div>
              <div class="card-body">
                {/* <CompanyList /> */}
              </div>
            </div>
          </section>
        );
    }
}

export default Company;