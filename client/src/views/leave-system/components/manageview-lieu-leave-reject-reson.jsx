import React, { Component } from 'react';
import {
    Modal,

} from "react-bootstrap";

export default class ManageviewLieuLeaveRejectReson extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div>
                <button type="submit" class="btn btn-secondary  btn-circle" size="lg-6" data-toggle="tooltip"
                    data-placement="bottom" title="Reject" onClick={this.handleShow}><i class='far fa-eye' ></i></button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Lieu Request More Details </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <section class="py-3">
                            <div class="row"></div>
                            <div class="col-lg-12 mb-12">
                                <div class="card">

                                    <div class="card-body">
                                        <table class="table table-borderless" >
                                            <thead>
                                                <tr >
                                                    <td ><b>Request Reason :  </b></td>
                                                    <td>over Time</td>
                                                </tr>
                                                <tr >
                                                    <td ><b>Rejected Reason :  </b></td>
                                                    <td>Date not match</td>
                                                </tr>
                                                <tr >
                                                    <td ><b>Accepted by :  </b></td>
                                                    <td>HR Manager</td>
                                                </tr>
                                                <tr >
                                                    <td ><b>Rejected by :  </b></td>
                                                    <td>HR Manager</td>
                                                </tr>

                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}
