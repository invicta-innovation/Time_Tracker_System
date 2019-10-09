import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from 'react-redux';
import {fetchUsers,showModal,updateUserStatus} from '../../../_actions/user-action';
import UserRow from "./user-row";

class UserList extends Component {
 
  
componentDidMount(){
  this.props.getUsers();
  console.log(this.props)
}

componentWillMount(){
 
}

  render() {
    const userLists=this.props.userList.map(userRow=>
     
          <UserRow user={userRow} 
          showModal={this.props.showModal} 
          updateUserStatus={this.props.updateUserStatus} 
          key={userRow.id}/>
        
      )
    return (
      <Table className="table table-striped table-hover card-text">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Active Status</th>
          </tr>
        </thead>
        <tbody>
         { userLists}
         </tbody>
        {/* <nav aria-label="Page navigation example">
          <ul class="pagination -content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </Table>
    );
  }
}
const mapStateToProps = state =>({
  userList:state.userStore.users,
  
})
const mapDispatchToProps=dispatch=>({
  showModal:(user)=>dispatch(showModal({action:'EDIT',show:true,title:'Edit User'},user)),
  getUsers:()=>dispatch(fetchUsers()),
  updateUserStatus:(user,status)=>dispatch(updateUserStatus(user,status)),
 
})
export default connect (mapStateToProps,mapDispatchToProps)(UserList)