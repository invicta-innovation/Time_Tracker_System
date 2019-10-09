import React, { Component } from 'react'
export default class StatsCard extends Component {
    render() {
        return (
            <div class="card mb-3">
                  <div class="card-body">
                    <div class="row align-items-center flex-row">
                      <div class="d-flex d-flex-row">
                        <table class="table">
                            <tr>
                                <th></th>
                                <th>Annual</th>
                                <th>Casual</th>
                                <th>Medical</th>
                                <th>Lieu</th>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <th>10</th>
                                <th>8</th>
                                <th>2</th>
                            </tr>
                            <tr>
                                <th>Utilized</th>
                                <th>10</th>
                                <th>8</th>
                                <th>2</th>
                            </tr>
                            <tr>
                                <th>Remaining</th>
                                <th>10</th>
                                <th>8</th>
                                <th>2</th>
                            </tr>
                        </table>

                       
                        <div>
                            <div class="d-flex d-flex-column">
                        <img src="assets/img/avatar-1.jpg" class="rounded-circle"/>
                        <div>Software Engineer</div>
                        <div>John doe</div>
                        </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
        )
    }
}
