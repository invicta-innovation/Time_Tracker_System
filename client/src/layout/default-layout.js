import React, { Component } from 'react';
import { Redirect,Route,Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProtectedRoute } from '../commons/shared/auth/ProtectedRoute';
import { LoggedInRoute } from '../commons/shared/auth/LoggedInRoute';
import SideBar from './side-bar';
import Header from './header';
import Footer from './footer';
import LeaveDashboard from '../views/leave-system/leave-dashboard';

import LeaveHistory from '../views/leave-system/leave-history';
import LieuLeave from '../views/leave-system/lieu-leave-request/leave-lieu';
import ManageLeaveDashBoard from '../views/leave-system/manage-leave-dashboard';
import ManageLeaveLieu from '../views/leave-system/manage-lieu-leave';
import ManageCarryforward from '../views/leave-system/manage-carryforward';

import ConfigureCalendar from '../views/settings/configureCalendar';
import Role from '../views/user/role';


import ManageIndivitualLeaveHistory from '../views/leave-system/manage-indivitual-leave-history';
import CarryForwardLeaveHistory from '../views/leave-system/components/carry-forward-leave-history';

import Users from '../views/user/users';
import ManageLeaveAllocation from '../views/leave-system/manage-leave-allocation';
import ManageProcessLeave from '../views/leave-system/manage-process-leave';
import ManageLeaveTypesAndPolicies from '../views/leave-system/manage-leave-type-policy';
import RecuitmentType from '../views/employee/recuitment-type';
import ManageDesignation from '../views/leave-system/manage-Designation';
import RequestLeave from '../views/leave-system/leave-request/index';
import authService from "../_utils/auth-service";
import Allocation from '../views/leave-system/leave-allocation/Allocation';
import ModalCalendar from '../views/leave-system/leave-request/ModalCalendar';
import WorkflowMain from '../views/leave-system/leave-workflow/workflow-main';

export class DefaultLayout extends Component {
 
      renderLogin=()=>{
        if(this.props.auth){
          return (<Redirect to ={{pathname:'/'}}/>)
        }else{
          return (<Redirect to ={{pathname:'/login'}}/>)
      
        }
      }

    render() {
        return (
            <div>
        <Header />
        <div className="d-flex align-items-stretch">
          <SideBar />
          <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
            <Switch>
                <ProtectedRoute  path="/leaveDashboard" component={LeaveDashboard} />
                <ProtectedRoute  path="/requestLeave" component={RequestLeave} />
                <ProtectedRoute  path="/leaveHistory" component={LeaveHistory} />
                <ProtectedRoute  path="/lieuLeave" component={LieuLeave} />
                <ProtectedRoute  path="/manageLeaveDashboard" component={ManageLeaveDashBoard} />
                <ProtectedRoute  path="/manageLeaveRequests" component={ManageProcessLeave} />
                <ProtectedRoute  path="/manageLeaveLeiuLeave" component={ManageLeaveLieu} />
                <ProtectedRoute  path="/manageCarryForward" component={ManageCarryforward} />
                <ProtectedRoute  path="/configurecalendar" component={ConfigureCalendar} />
                <ProtectedRoute  path="/manageRole" component={Role} />
                <ProtectedRoute  path="/manageUser" component={Users} />
                <ProtectedRoute  path="/configleave" component={ManageLeaveTypesAndPolicies} />
                <ProtectedRoute  path="/indivitualLeaveHistory" component={ManageIndivitualLeaveHistory} />
                <ProtectedRoute  path="/leaveAllocation" component={ManageLeaveAllocation} />
                <ProtectedRoute  path="/manageAllocation/:id" component={Allocation} />
                <ProtectedRoute  path="/recuitmentType" component={RecuitmentType} />
                <ProtectedRoute  path="/designation" component={ManageDesignation} />
                <ProtectedRoute  path="/workflow/:id" component={WorkflowMain} />
                {this.renderLogin()}
             </Switch>
           
            </div>
            <Footer />
          </div>
        </div>
      </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.authStore.isAuth
  });

  export default connect(mapStateToProps, null)(DefaultLayout);
  
