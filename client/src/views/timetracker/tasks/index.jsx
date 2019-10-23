import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import DailyTask from "./taskList";
import { Modal} from "react-bootstrap";

class TimeSheet extends Component {
  calendarComponentRef = React.createRef();
  state = {
    show: false,
    selectedDate: null,
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "Event Now", start: new Date() }
    ]
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = date => {
    this.setState({
      show: true,
      selectedDate: date
    });
  };

  handleDateClick = info => {
    let selectedDate = info.dateStr;
    this.handleShow(selectedDate);
  };

  render() {
    return (
      <>
      <Modal size="xl" show={this.state.show} onHide={this.state.show}>
      <Modal.Header className="d-flex ">
            <div> <Modal.Title>Daily Tasks</Modal.Title></div>
            <div className=""><Modal.Title>{this.state.selectedDate}</Modal.Title></div>
      </Modal.Header>
      <Modal.Body>
        <DailyTask selectedDate={this.state.selectedDate} handleClose={this.handleClose}/>
      </Modal.Body>
      <Modal.Footer>
          <button
            type="submit"
            class="btn btn-danger "
            onClick={this.handleClose}
          >
            Close
          </button>
            
        </Modal.Footer>
    </Modal>
      <div className="col-sm-8">
        <section class="py-3">
          <div class="card">
            <div class="card-body">
              <FullCalendar
                dateClick={this.handleDateClick}
                plugins={[dayGridPlugin, interactionPlugin]}
              />
             
            </div>
          </div>
        </section>
      </div>
      </>
    );
  }
}

export default TimeSheet;
