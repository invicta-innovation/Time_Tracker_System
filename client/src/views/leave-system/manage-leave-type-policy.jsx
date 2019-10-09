import React, { Component } from 'react'


import Card from '../../commons/card';
import ManageLeavePolicy from './manage-leave-type-policy/manage-leave-policy';
import ManageLeaveTypes from './manage-leave-type-policy/leave-types';


export default class ManageLeaveTypesAndPolicies extends Component {
    render() {
        return (
   <div>
    <section class="py-3">
      <Card title="Leave Types & Rules for Allocation">
      <div className="row">
          <div className="col-md-6"><ManageLeaveTypes/></div>
          <div className="col-md-6"><ManageLeavePolicy/></div>
      </div>
    
    
      </Card>
      </section>
      </div>
  
        );
    }
}
{/* //export default LeaveConfiguration; */}