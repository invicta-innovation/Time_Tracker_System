import React, { Component } from 'react'

export default class ManageLeavePolicy extends Component {
state={
  leaveRules:[
    {emptype:'Permanent',leaverule:'Leave Allocated for 10 days',allocationdays:15},
    {emptype:'Temporary',leaverule:'Leave Allocated for 10 days',allocationdays:15}
  ]
}

    render() {
      const {leaveRules}=this.state;
        return (
                               
             <table class="table table-striped table-hover card-text">
               <thead>
                 <tr> 
                   
                   <th>Employment Type</th>
                   <th>Valid Period Start</th>
                   <th>Valid Period End</th>
                   <th>Allocated Days</th>
                 </tr>
               </thead>
               <tbody>

{
  leaveRules.map(leaverule=>(
    <tr>
               
    <td>{leaverule.emptype}</td>
    <td>{leaverule.leaverule}</td>
    <td>{leaverule.allocationdays}</td>
  </tr>
  ))
}
  </tbody>
</table>
      
        )
    }
}
