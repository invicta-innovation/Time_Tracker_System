import React, { Component } from "react";
import LeaveData from "./leave-data";

class LeaveCancelled extends Component {
  render() {
    return (
      <section class="py-5">
      <div class="col-lg-12 mb-2">
       <LeaveData startDate="2019-05-29" endDate="2019-05-30" status="Cancelled" reason="got to colombo"/>
       </div>
       </section>
    );
  }
}
export default LeaveCancelled;
