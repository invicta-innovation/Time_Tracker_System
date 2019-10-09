import React, { Component } from "react";
import LeaveData from './components/leave-data';
import ApplyCarryforwardLeave from "./components/apply-carryforward-leave";
import CountPill from "../../commons/count-pill";
import LeavePolicy from "./components/leave-policy";

class LeaveDashBoard extends Component{
  state={
    leavedays:[
      { title: "Anual Leave", 
            circledatas:[
            {name:'Allocated',count:12},
            {name:'Remaining',count:10},
            {name:'Utilized',count:10}
          ]
      },
      { title: "Casual Leave", 
            circledatas:[
            {name:'Earnings',count:9},
            {name:'Remaining',count:10},
            {name:'Utilized',count:10}
          ]
      },
      { title: "Leiu Leave", 
      circledatas:[
      {name:'Earnings',count:9},
      {name:'Remaining',count:10},
      {name:'Utilized',count:10}
    ]
},
{ title: "Medical Leave", 
            circledatas:[
            {name:'Earnings',count:9},
            {name:'Remaining',count:10},
            {name:'Utilized',count:10}
          ]
      }
    ]
    }
  
 
    render(){
      const {leavedays}=this.state
      
        return(
            <div  >
              <div className="col-lg-12 mt-2 mb-2">
                  <LeaveData startDate="2019-05-29" endDate="2019-05-30" status="pending" reason="got to colombo"/>
              </div>
                {/* <ApplyCarryforwardLeave/> */}
            <div className="row">
            <div className="col-lg-7">
              {
                leavedays.map(ldays=>(
                  <CountPill title={ldays.title} circledatas={ldays.circledatas} />
                ))
              } 
           
            </div>
            <div className="col-lg-5">
              <LeavePolicy/>
              </div>
           </div>
           </div>    
        )
    }
}
export default LeaveDashBoard;

