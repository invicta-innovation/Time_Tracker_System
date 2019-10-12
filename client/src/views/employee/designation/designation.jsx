import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesignationModal from './designation-modal';
import DesignationList from './designation-list';
import {showModal} from '../../../_actions/designation-action';

class Designation extends Component {
    render() {
        return (
            <section class="py-3">

            <div class="card">
              <div class="d-flex justify-content-between card-header">
                <h3 class="h6 text-uppercase mb-0">List of Designation</h3>
    
                <button
                  type="submit"
                  class="btn btn-info btn"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="add designation"
                  btn-align="right"
                  onClick={()=>this.props.showModal(true)}
                >
                  + 
            </button>
            
                <DesignationModal />
              </div>
              <div class="card-body">
                <DesignationList />
              </div>
            </div>
          </section>
        );
    }
}

const mapStateToProps = state =>({
  
})
const mapDispatchToProps=dispatch=>({
  showModal: (status)=> dispatch(showModal({action:'ADD',show:status,title:'Add Designation'}))
})
export default connect(mapStateToProps,mapDispatchToProps)(Designation)