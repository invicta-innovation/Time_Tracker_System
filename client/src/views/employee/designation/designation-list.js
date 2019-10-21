import React, { Component } from 'react';
import { connect } from 'react-redux';



class DesignationList extends Component {
  componentWillMount() {
    // this.props.getDesignation();
  }
  render() {
    return (
      <div>
        <table className="table table-striped table-hover card-text">
          <thead>
            <tr>
              <th>Id</th>
              <th>Designation Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.designations.map(designation => (
              <tr key={designation.id}>
                <td>{designation.id}</td>
                <td>{designation.designation}</td>
                <td align="right"> <button
                  type="submit"
                  class="btn btn-success btn-circle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Edit"
                >
                  <i class="fas fa-pen-fancy" />
                </button>
                  &nbsp;&nbsp;&nbsp;
  
                <button
                    type="submit"
                    class="btn btn-danger btn-circle"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete"
                    btn-align="right">
                    <i class="far fa-trash-alt" />
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  designations: state.designationStore.designations
})
const mapDispatchToProps = dispatch => ({
  // getDesignation:()=>dispatch(fetchDesination()),
  // showModal: (designation)=> dispatch(showModal({action:'EDIT',show:true,title:'Update Designation'},designation))
})
export default connect(mapStateToProps, mapDispatchToProps)(DesignationList)