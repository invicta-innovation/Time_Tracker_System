import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesignationModal from './designation-modal';
import DesignationList from './designation-list';
import { showModal } from '../../../_actions/employee/designation-action';

class Designation extends Component {
  render() {
    return (
      <section className="py-3">

        <div className="card">
          <div class="d-flex justify-content-between card-header">
            <h3 class="h6 text-uppercase mb-0">List of Designation</h3>

            <button
              className="btn btn-info btn"
              title="add designation"
              onClick={() => this.props.showModal(true)}>
              Add Designation
              <DesignationModal />

            </button>
            {/* <div>
              <DesignationModal />
            </div> */}

          </div>
          <div className="card-body">
            <DesignationList />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  showModal: (status) => dispatch(showModal({ action: 'ADD', show: status, title: 'Add Designation' }))
})
export default connect(mapStateToProps, mapDispatchToProps)(Designation)