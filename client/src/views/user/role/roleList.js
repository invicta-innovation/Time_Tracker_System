import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchRole,showModal ,deleteRole} from "../../../_actions/role-actions";
import swal from 'sweetalert';
class RoleList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRole();
    console.log(this.props);
  }
  handeleDelete =(id)=>{
    swal({
      title: "Are you sure?",
      text: "Do you want to Delete Role!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.onDelete(id)
          swal("Role has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Role is safe!");
        }
      });
  }
  

  render() {
    console.log();
    return (
      <Table class="table table-striped table-hover card-text">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Update/Delete</th>
          </tr>
        </thead>

        <tbody>
          {this.props.roles.map(role => (
            <tr key={role.id}>
              <td>{role.roleName}</td>
              <td>
                {" "}
                &nbsp; &nbsp;
                <button
                  type="submit"
                  class="btn btn-success btn-circle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Edit"
                  onClick={()=>this.props.onModalShow(role.id)}
                >
                  <i class="fas fa-pen-fancy"/>
                </button>
                &nbsp; &nbsp; &nbsp;
              
                <button
                  type="submit"
                  class="btn btn-danger btn-circle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Delete"
                  onClick={()=>this.handeleDelete(role.id)}
                >
                  <i class="far fa-trash-alt" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  roles: state.roleStore.roles
});

const mapDispatchToProps = (dispatch) => {
  return {
    onModalShow:(id)=>dispatch(showModal({ action: "EDIT", show: true, title: "Edit User Role",buttonName:'Update' },id)),
    onDelete:(id)=>dispatch(deleteRole(id)),
    fetchRole:()=>dispatch(fetchRole())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoleList);
