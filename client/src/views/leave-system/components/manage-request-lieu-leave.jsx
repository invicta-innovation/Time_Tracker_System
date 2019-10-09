import React, { Component } from "react";
import { Modal, Popover, Form, Col } from "react-bootstrap";
import Card from "../../../commons/card";

class ManageRequestLieuLeave extends Component {
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
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );

    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Reject Reason</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="roleId">
                  <Form.Label>Reason </Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="submit"
              class="btn btn-danger "
              data-toggle="tooltip"
              data-placement="bottom"
              onClick={this.handleClose}
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-success "
              data-toggle="tooltip"
              data-placement="bottom"
              onClick={this.handleClose}
            >
              Send
            </button>
          </Modal.Footer>
        </Modal>
        <section class="py-3">
          <Card title="Manage Lieu Leave Request">
            <table class="table table-striped table-hover card-text">
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th>No of Days</th>
                  <th>Approved by</th>
                  <th>Reason</th>
                  <th>Accept/Reject</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Betsy</td>
                  <td>12.06.2019</td>
                  <td>12.06.201</td>
                  <td>01</td>
                  <td>Project Manager</td>
                  <td>Medical</td>
                  <td>
                    &nbsp; &nbsp;
                    <button
                      type="submit"
                      class="btn btn-success btn-circle"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Accept"
                    >
                      <i class="fas fa-check" />
                    </button>
                    &nbsp; &nbsp;
                    <button
                      type="submit"
                      class="btn btn-danger btn-circle"
                      size="lg-6"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Reject"
                      onClick={this.handleShow}
                    >
                      <i class="fas fa-times" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Sinthuja</td>
                  <td>01.07.2019</td>
                  <td>03.07.201</td>
                  <td>03</td>
                  <td>Project Manager</td>
                  <td>Personal</td>
                  <td>
                    &nbsp; &nbsp;
                    <button
                      type="submit"
                      class="btn btn-success btn-circle"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Accept"
                    >
                      <i class="fas fa-check" />
                    </button>
                    &nbsp; &nbsp;
                    <button
                      type="submit"
                      class="btn btn-danger btn-circle"
                      size="lg-6"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Reject"
                      onClick={this.handleShow}
                    >
                      <i class="fas fa-times" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Priyanga</td>
                  <td>19.06.2019</td>
                  <td>19.06.201</td>
                  <td>01</td>
                  <td>Project Manager</td>
                  <td> Casual</td>
                  <td>
                    &nbsp; &nbsp;
                    <button
                      type="submit"
                      class="btn btn-success btn-circle"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Accept"
                    >
                      <i class="fas fa-check" />
                    </button>
                    &nbsp; &nbsp;
                    <button
                      type="submit"
                      class="btn btn-danger btn-circle"
                      size="lg-6"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Reject"
                      onClick={this.handleShow}
                    >
                      <i class="fas fa-times" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </section>
      </div>
    );
  }
}
export default ManageRequestLieuLeave;
