import React, { Component } from 'react'

export default class LeaveData extends Component {
    render() {
      
        return (
            <div class="col-lg-12 roundy">
              <a href="#" class="cardroundy card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
            <div class="row">
              <div class="col-lg-5 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                From :&nbsp;{this.props.startDate} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To :&nbsp;{this.props.endDate}
              </div>
              <div class="col-lg-7 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                <div class="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">{this.props.status}</div>
                <a class="mb-0">{this.props.reason}
                <img src="assets/img/avatar-1.jpg" alt="..." style={{maxWidth: '3rem'}} class="rounded-circle mx-3 my-2 my-lg-0"/>
                </a>
              </div>
            </div>
            </a>
            </div>
        )
    }
}
