import React, { Component } from 'react';
export default class CreditCard extends Component {
    render() {
        return (
           
            <div class="col-lg-12 mb-2 mt-3 mb-lg-0">
            <div class="credit-card bg-hover-gradient-primary">
              <div class="content d-flex flex-column justify-content-between p-4">
                <div class="d-flex justify-content-between">
                  <div class="text-uppercase">
                    <div class="font-weight-bold mb-2">{this.props.title} &nbsp;&nbsp;&nbsp;<a class="mb-2">{this.props.days}</a></div>
                 <ul>
                      {
                        this.props.rule.map((value)=>(
                        <li class="leave-rule">
                        {value}
                        </li>
                      ))}
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
