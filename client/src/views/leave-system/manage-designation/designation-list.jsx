import React, { Component } from "react";
import { connect } from "react-redux";
import { getDesignation,showModal,deleteDesignation } from "../../../_actions/designation-action";
import swal from "sweetalert";
import { Table } from "react-bootstrap";




class DesignationList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getDesignation();
  }
  handleDelete=(id)=>{
    swal({
      title: "Are you sure?",
      text: "Do you want to Delete Designation\!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete)=>{
      if(willDelete){
        this.props.onDelete(id)
        swal("Poof! Your imaginary Designation Type has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary Designation Type is safe!");
      }
    })
  }
  render() {
    
    return (
      <Table class="table table-striped table-hover card-text">
      
    
          {this.props.designationList.map(designation => (
            <tr key={designation.id}>
              
              <td class="d-flex justify-content-between"> 
              {designation.designation}
              
                <div className="d-inline-flex">
                  <button
                    type="submit"
                    class="btn btn-success btn-circle"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Edit"
                    onClick={()=>this.props.onModalShow(designation.id)}
                  >
                    <i class="fas fa-pen-fancy"/>
                  </button>
                  &nbsp;&nbsp;&nbsp;

                  <button
                    type="submit"
                    class="btn btn-danger btn-circle"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete"
                    onClick ={()=>this.handleDelete(designation.id)}
                  >
                    <i class="far fa-trash-alt" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        
      
      </Table>
    );
  }
}
const mapStateToProps = state => ({
  designationList: state.designationStore.designations,
 
});

const mapDispatchToProps=dispatch=>{
  return{
  onModalShow:(id)=>dispatch(showModal({action:'EDIT',show:true,title:'Edit Designation',buttonName:'Update'},id)),
  getDesignation:()=>dispatch(getDesignation()),
  onDelete:(id)=>dispatch(deleteDesignation(id))
  }
}

export default connect(
  mapStateToProps,
   mapDispatchToProps 
)(DesignationList);
