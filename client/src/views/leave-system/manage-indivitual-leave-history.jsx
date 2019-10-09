import React, { Component } from "react";
import Card from "../../commons/card";
import MyLeaveHistory from "./components/leave-my-history";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom';
class ManageIndivitualLeaveHistory extends Component{
    render(){
        return(
            <div>
              <Breadcrumb>
                <Breadcrumb.Item ><Link to="/manageLeaveRequests" >Leave Requests</Link></Breadcrumb.Item>
                
                <Breadcrumb.Item active>Indivitual Leave History</Breadcrumb.Item>
              </Breadcrumb>

              <MyLeaveHistory></MyLeaveHistory>
            </div>
        )
    }
}
export default ManageIndivitualLeaveHistory;