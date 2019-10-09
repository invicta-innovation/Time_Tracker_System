import React, { Component } from 'react';
import Card from "../../commons/card";
import { Link } from 'react-router-dom';
import ManageviewLieuLeaveRejectReson from './components/manageview-lieu-leave-reject-reson';

export default class ManageLieuLeaveRequestHistory extends Component {
    render() {
        return (
            <div>
                <section class="py-3">
                    <Card title="Lieu Leave Request History">
                        <table class="table table-striped table-hover card-text">
                            <thead>
                                <tr>
                                    <th>Employee Name</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>No of Days</th>
                                    <th>Approved by</th>
                                    <th>Status</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to="/LieuLeave" >Betsy</Link></td>
                                    <td>12.06.2019</td>
                                    <td>12.06.201</td>
                                    <td>01</td>
                                    <td>Project Manager</td>
                                    <td style={{color: 'Red'}}>Reject </td>
                                    <td><ManageviewLieuLeaveRejectReson></ManageviewLieuLeaveRejectReson></td>
                                     
                                </tr>
                                <tr>
                                    <td><Link to="/LieuLeave" >Sinthuya</Link></td>
                                    <td>01.07.2019</td>
                                    <td>03.07.201</td>
                                    <td>03</td>
                                    <td>Project Manager</td>
                                    <td style={{color: 'Green'}}>Accepted</td>
                                    <td><ManageviewLieuLeaveRejectReson></ManageviewLieuLeaveRejectReson></td>
                                </tr>
                                <tr>
                                    <td><Link to="/LieuLeave" >Priyanka</Link></td>
                                    <td>19.06.2019</td>
                                    <td>19.06.201</td>
                                    <td>01</td>
                                    <td>Project Manager</td>
                                    <td style={{color: 'Red'}}>Reject </td>
                                    <td><ManageviewLieuLeaveRejectReson></ManageviewLieuLeaveRejectReson></td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </section>


            </div>
           
        )
    }
}
