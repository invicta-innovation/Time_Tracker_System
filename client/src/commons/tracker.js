import React, { Component } from 'react';
import './tracker.css';

export default class Tracker extends Component {
    state = {
        status: [
            { id: 1, roleName: 'John', status: 'Request', date: '2019-06-23' },
            { id: 2, roleName: 'Manager', status: 'Accept', date: '2019-06-23' },
            { id: 3, roleName: 'HR', status: 'Reject', date: '2019-06-23' },
            
        ]
    }

    render() {
        const { status } = this.state;

        let handlebadge = function (value) {
            if (value == 'Accept') {
                return <span class="badge badge-success badge-pill">{value}</span>
            } else if (value == 'Reject') {
                return <span class="badge badge-danger badge-pill">{value}</span>
            } else if (value == 'Request') {
                return <span class="badge badge-primary badge-pill">{value}</span>
            }
        }
            return(
                <div>

                    <div class="holder">
                        <ul class="SteppedProgress">
                            {
                                status.map(status => 
                                (
                                    <li class="complete">
                                        <img src="assets/img/avatar-1.jpg" alt="..." style={{ maxWidth: '3rem' }} class="rounded-circle" />

                                        <br />
                                        <small class='small'>{status.roleName}</small>
                                        <br />
                                        {handlebadge(status.status)}
                                        <br />
                                        <small class=' extra small'>on :<br></br>{status.date}</small>
                                    </li>
                                )
                            )
                            }

                        </ul>
                    </div>
                </div>

            )
    }
}