import React, { Component } from "react";

import ManageCarryforwardRequest from "./components/manage-carryforward-request";
import ManageCarryForwardLeaveHistory from "./components/carry-forward-leave-history";


class ManageCarryforward extends Component {
  render() {
    return (
        <section class="py-5">
       
       <nav>
        <div class="nav nav-pills flex-column flex-sm-row" id="nav-tab" role="tablist">
        <a class="flex-sm-fill text-sm-center nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
         role="tab" aria-controls="nav-home" aria-selected="true">Carry Forward Leave Request</a>
          <a class="flex-sm-fill text-sm-center nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" 
          role="tab" aria-controls="nav-profile" aria-selected="false">Carry Forward Leave History</a>
          </div>
          </nav>

        <div class="tab-content" id="nav-tabContent">
         <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><ManageCarryforwardRequest /></div> 
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><ManageCarryForwardLeaveHistory /></div>
       </div>
</section>
    );
  }
}
export default ManageCarryforward;

 