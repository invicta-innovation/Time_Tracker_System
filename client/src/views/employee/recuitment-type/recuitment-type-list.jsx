import React, { Component } from 'react'
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchRecuitmentType, showModal, deleteRecuitmentType } from "../../../_actions/recuitment-type-action";
import swal from 'sweetalert';

class RecuitmentTypeList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRecuitmentType();
   // console.log(this.props);
  }
  handleDelete =(id)=>{
    swal({
      title: "Are you sure?",
      text: "Do you want to Delete Recuitment Type\!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.onDelete(id)
          swal("Recuitment Type has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Recuitment Type is safe!");
        }
      });
  }
	render() {
		return (
<Table class="table table-striped table-hover card-text">
        <thead>
          <tr>
            <th>Recruitment Type Name</th>
            <th>Update/Delete</th>
          </tr>
        </thead>

        <tbody>
        {this.props.recuitmentTypes.map(recuitmentType => (
            <tr key={recuitmentType.id}>
              <td>{recuitmentType.recuitmentTypeName}</td>
              <td>
                {" "}
                &nbsp; &nbsp;
                <button
                  type="submit"
                  class="btn btn-success btn-circle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                title="Edit"
                onClick={()=>this.props.onModalShow(recuitmentType.id)}
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
                  onClick={()=>this.handleDelete(recuitmentType.id)}
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
  recuitmentTypes: state.recuitmentTypeStore.recuitmentTypes
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecuitmentType: () => dispatch(fetchRecuitmentType()),
    onModalShow:(id)=>dispatch(showModal({action: 'EDIT', show: true, title: 'Edit Recuitment Type', buttonName: 'Update' }, id)),
    onDelete:(id)=>dispatch(deleteRecuitmentType(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecuitmentTypeList);


