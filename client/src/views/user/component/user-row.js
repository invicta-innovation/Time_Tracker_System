import React, { Component } from 'react'
import swal from 'sweetalert';

class UserRow extends Component {
state={
    checked:false
}
componentWillMount(){
    this.setState({
        checked:this.props.user.userStatus
    })
}

handleChange =(e)=>{
    const checkedValue=e.target.checked
    swal({
      title: "Are you sure?",
      text: "Do you want to Take this Action !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.props.updateUserStatus(this.props.user,checkedValue)
        console.log(checkedValue)
        this.setState({
          checked:checkedValue
      })
      } 
    });

    console.log(e.target.checked)
  }
    render() {
        const {user,showModal}=this.props;
        return (
           
                 <tr key={user.id}>
              <td>{user.userName}</td>
              <td>{user.role.roleName}</td>
              <td>{user.email}</td>
              <td>
                &nbsp; &nbsp;
                <button
                  type="submit"
                  className="btn btn-success btn-circle"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Edit"
                  onClick={()=>showModal(user)}
                  disabled={!this.state.checked}
                >
                  <i className="fas fa-pen-fancy"/>
                </button>
              </td>
              <td>
              <label className="switch">
                  <input 
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.state.checked}
                  />
                  <span className="slider round"></span>
                </label>

              </td>
          </tr>
           
        )
    }
}

export default UserRow;