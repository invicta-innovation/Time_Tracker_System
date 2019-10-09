import React, { Component } from "react";
import LeaveSummary from './components/leave-summary';
import LeaveSummaryYear from './components/leave-summary-for-year';
import LeaveCalanderView from "./components/leave-calander-view";

class ManageLeaveDashBoard extends Component{
   

   
    render(){
        return(
            <LeaveCalanderView />
        )
    }
}
export default ManageLeaveDashBoard;