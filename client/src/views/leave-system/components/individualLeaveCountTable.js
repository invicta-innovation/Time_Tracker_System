import React, { Component } from 'react'

export default class IndividualLeaveCountTable extends Component {
    render() {
        return (
            <table class="table table-striped table-hover card-text">
                 
                  <thead>
                    <tr>
                     
                      <th>#</th>
                      <th>Annual</th>
                      <th>Casual </th>
                      <th>Lieu </th>
                      <th>Medicel </th>
                      {/* <th>Accept/Reject</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                     
                      <td>Total</td>
                   
                      <td>
                        1
                      </td>
                      <td>
                        2
                      </td>
                      <td>
                        3
                      </td>
                      <td>
                        4
                      </td>
                    </tr>
                    <tr>
                     
                      <td>utilized</td>
                      
                      <td>
                        1
                      </td>
                      <td>
                        2
                      </td>
                      <td>
                        3
                      </td>
                      <td>
                        4
                      </td>
                    </tr>
                    <tr>
                     
                      <td>Remaining</td>
                     
                      <td>
                        1
                      </td>
                      <td>
                        2
                      </td>
                      <td>
                        3
                      </td>
                      <td>
                        4
                      </td>
                    </tr>
                  </tbody>
                </table>
        )
    }
}
