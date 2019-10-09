import React, { Component } from 'react'

export default class RequestLieuLeaveData extends Component {
    render() {
      
        return (
            <div class="col-lg-12 roundy">
              <a href="#" class="cardroundy card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
            <div class="row">
              <div class="col-lg-4 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
               <b> From : </b>&nbsp;{this.props.startDate} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>To :</b>&nbsp;{this.props.endDate}
              </div>
              <div class="col-lg-7 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                <div class="col-lg-4 bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">Number of Days : &nbsp;{this.props.noOfDays}</div>
                <div class="col-lg-5 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
               <b> Approved By :</b>&nbsp;{this.props.approvedBy} 
              </div>
              <div class="col-lg-5 d-flex  flex-column flex-lg-row text-center text-md-left">
               <b> Reason: </b>&nbsp;{this.props.reason}
              </div>
                {/* <img src="assets/img/avatar-1.jpg" alt="..." style={{maxWidth: '3rem'}} class="rounded-circle mx-3 my-2 my-lg-0"/> */}
               
              </div>
            </div>
            </a>
            </div>
        )
    }
}
