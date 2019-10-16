import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecruitmentModal from './recruitment-modal';
import RecruitmentList from './recruitment-list';
import {showModal} from '../../../_actions/employee/recruitment-action';

class Recruitment extends Component {
    render() {
        return (
            <section className="py-3">

            <div className="card">
              <div className="d-flex justify-content-between card-header">
                <h3 className="h6 text-uppercase mb-0">List of Recruitment</h3>
    
                <button
                  type="submit"
                  className="btn btn-info btn"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="add recruitment"
                  btn-align="right"
                  onClick={()=>this.props.showModal(true)}
                >
                  + Recruitment
            </button>
            
                <RecruitmentModal />
              </div>
              <div className="card-body">
                <RecruitmentList />
              </div>
            </div>
          </section>
        );
    }
}

const mapStateToProps = state =>({
  
})
const mapDispatchToProps=dispatch=>({
  showModal: (status)=> dispatch(showModal({action:'ADD',show:status,title:'Add Recruitment'}))
})
export default connect(mapStateToProps,mapDispatchToProps)(Recruitment)