import React, { Component } from "react";
import { connect } from "react-redux";
import { getLeaveType, showModal, deleteLeaveType } from "../../../_actions/leaveType-action";

import swal from 'sweetalert';


class LeaveTypesList extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getLeaveType();
  }

  handleDelete = (id) => {


    swal({
      title: "Are you sure?",
      text: "Do you want to Delete Leave Type\!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.deleteLeaveType(id)
          swal("Poof! Your imaginary Leave type has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary Leave type is safe!");
        }
      });
  }

  render() {

    return (
      <React.Fragment>

        {this.props.leaveTypeList.map(leaveType => (
          <tr key={leaveType.id}>
            <td class="d-flex justify-content-between">
              {leaveType.leaveTypeName}
              <div className="d-inline-flex">
                <button
                  type="submit"
                  class="btn btn-success btn-circle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Edit"
                  onClick={() => this.props.showModal(leaveType.id)}
                >
                  <i class="fas fa-pen-fancy" />
                </button>
                &nbsp; &nbsp; &nbsp;
                  <button
                  type="submit"
                  class="btn btn-danger btn-circle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Delete"
                  onClick={() => this.handleDelete(leaveType.id)}
                >
                  <i class="far fa-trash-alt" />
                </button>
              </div>
            </td>
          </tr>
        ))}


      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  leaveTypeList: state.leaveTypeStore.leaveTypes,

});

const mapDispatchToProps = dispatch => ({
  showModal: (id) => dispatch(showModal({ action: 'EDIT', show: true, title: 'Edit Leave Type', buttonName: 'Update' }, id)),
  getLeaveType: () => dispatch(getLeaveType()),
  deleteLeaveType: (id) => dispatch(deleteLeaveType(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaveTypesList);
