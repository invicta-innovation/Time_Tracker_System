import React, { Component } from "react";
import MetricPill from "../../../commons/metric-pill";
import ApplyLeaveForm from './apply-leave-form';
import { ProtectedRoute } from '../../../commons/shared/auth/ProtectedRoute';
import { Redirect,Route,Router,BrowserRouter, Switch } from 'react-router-dom';

import Card from '../../../commons/card';
import ModalCalendar from './ModalCalendar'
import { connect } from 'react-redux';
import {fetchLeaveRequests} from '../../../_actions/leave-action'
import { Link } from 'react-router-dom';

const leaveCounts = [
  { title: "Casual", total: 10, count: 3 },
  { title: "Annual", total: 8, count: 5 },
  { title: "Medical", total: 15, count: 13 },
  { title: "LieuLeave", total: 15, count: 7 }
];

class RequestLeave extends Component {
 

  render() {
    let leavePill = leaveCounts.map(leaveCount => {
      return (
        <MetricPill
          title={leaveCount.title}
          total={leaveCount.total}
          count={leaveCount.count}
        />
      );
    });
    return (
      <section className="py-5">
        <div className="">
        <Link  to={"/requestLeave/calender"}  className="btn btn-primary ml-2"> <i className="far fa-calendar-alt" /> &nbsp;&nbsp; 
            Calander View
             </Link>
             <Link  to={"/requestLeave/form"}  className="btn btn-primary ml-2"><i className="fas fa-user-clock" /> &nbsp;&nbsp; Form View
             </Link>
        </div>
        <div className="row mt-2">
          <div className="col-lg-9">
               <div className="mt-3">
               <Switch>
                  <Route exact path="/requestLeave/calender" component={ModalCalendar} key={1}/>
                  <Route exact path="/requestLeave/form"  key={2} render={
                    ()=>{
                      return(
                        <Card title="Leave Application Form">
                          <ApplyLeaveForm/>
                        </Card>
                      )
                    }
                  } />
                </Switch>
                </div>
          </div>
          <div className="col-lg-3">{leavePill}</div>
        </div>
      </section>
    );
  }
}
const mapDispachToProps = dispatch => ({
  getLeaveRequests:()=>dispatch(fetchLeaveRequests())
});
const mapStateToProps = state =>({
  leaveRequests:state.leaveStore.leaveRequests
});
export default connect(mapStateToProps,mapDispachToProps)(RequestLeave);
