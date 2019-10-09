import React, { Component } from "react";
import { Redirect, Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from "../_actions/auth-action";
class Login extends Component {
  state = {
    id: '',
    usernameOrEmail: '',
    password: '',
    errors:null,
    isAuth: false,
    role:null
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = () => {
    const loginData = {
      usernameOrEmail: this.state.usernameOrEmail,
      password: this.state.password
    }
    console.log(loginData);
    this.props.LoginRequest(loginData);
  }
  handlePermission(role){
    switch(role){
      case 'ADMIN':
        return (
          this.props.history.push('/manageUser')
        )
      case 'HR':
            return (
              this.props.history.push('/manageLeaveDashboard')
            )
      case 'EMPLOYEE':
          return (
            this.props.history.push('/leaveDashboard')
          )
          default:
              return (
                this.props.history.push('/')
              )   
  }
}
  componentWillReceiveProps(nextprops) {
    if(nextprops.auth){
      this.handlePermission(nextprops.authData.role);
    }
    
   if(nextprops.errors !==null){
    console.log(nextprops.errors);
     this.setState(
       {errors:nextprops.errors}
     )
   }
  }
 
  render() {
    return (
      <div>
        <div className="col-12 col-lg-2 ml-left mb-12 mb-lg-12 ">
          <div className="pr-lg-12"><img src="assets/img/New Project (1).png" alt="" className="img-fluid" /></div>
        </div>
        <div className="page-holder d-flex align-items-center ">

          <div className="container  ">

            <div className="row align-items-center py-10">
              <div className="col-5 col-lg-7 mx-auto mb-5 mb-lg-10">
                <div className="pr-lg-5"><img src="assets/img/New Project (6).png" alt="" className="img-fluid" /></div>
              </div>
              <div className="col-lg-5 px-lg-4">

                <h1 className="mb-4">Login</h1>
                <span className="alert text-danger">{this.state.errors == null ? '':this.state.errors}</span>
                <form id="loginForm" className="mt-4">
                  <div className="form-group mb-4">
                    <input type="text" name="usernameOrEmail" placeholder="Username or Email address" className="form-control border-0 shadow form-control-lg"
                      value={this.state.usernameOrEmail} onChange={this.handleChange} />
                  </div>
                  <div className="form-group mb-4">
                    <input type="password" name="password" placeholder="Password" className="form-control border-0 shadow form-control-lg text-violet"
                      value={this.state.password} onChange={this.handleChange} />
                  </div>
                  <div className="form-group mb-4">
                    <div className="custom-control custom-checkbox">
                      <input id="customCheck1" type="checkbox" checked className="custom-control-input" readOnly />
                      <label htmlFor="customCheck1" className="custom-control-label">Remember Me</label>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary shadow px-5"onClick={this.handleSubmit}>Log in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.authStore.isAuth,
  errors:state.authStore.errors,
  authData: state.authStore.authData,

});

const mapDispachToProps = dispatch => ({
  LoginRequest: (userData) => dispatch(login(userData)),

});

export default connect(mapStateToProps, mapDispachToProps)(Login);