import React, { Component } from "react";
import DesignationForm from "./designation-form";
import DesignationList from "./designation-list";

import { connect } from "react-redux";
import { showModal } from "../../../_actions/designation-action";

class Designation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section class="py-3">
        <div class="card">
          <div class="d-flex justify-content-between card-header">
            <h3 class="h6 text-uppercase mb-0">Designation</h3>

            <button
              type="submit"
              class="btn btn-info btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="add designation"
              btn-align="right"
              onClick={() => this.props.onModalShow(true)}
            >
              + Designation
            </button>

            <DesignationForm />
          </div>
          <div class="card-body">
            <DesignationList />
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onModalShow: showstatus =>
      dispatch(
        showModal({
          action: "ADD",
          show: showstatus,
          title: "Add Designation",
          buttonName: "Save"
        })
      )
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Designation);
