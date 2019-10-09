import React, { Component } from "react";
import LeaveData from "./leave-data";

class MyLeaveHistory extends Component {
  render() {
    return (
      <section class="py-5">

      <div class="col-lg-12 mb-2">
       <LeaveData startDate="2019-04-29" endDate="2019-04-30" status="Accepted" reason="got to colombo"/>
       <LeaveData startDate="2019-05-25" endDate="2019-05-28" status="Rejected" reason="got to colombo"/>
       <LeaveData startDate="2019-05-29" endDate="2019-05-30" status="pending" reason="got to colombo"/>
       <LeaveData startDate="2019-05-29" endDate="2019-05-30" status="pending" reason="got to colombo"/>
       <LeaveData startDate="2019-05-29" endDate="2019-05-30" status="pending" reason="got to colombo"/>

       </div>
       
       </section>
    );
  }
}
export default MyLeaveHistory;
