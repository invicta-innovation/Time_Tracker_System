import React, { Component } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import{formatDate} from '../../../_function/index'

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import ApplyLeaveForm from "./apply-leave-form";

export default class ModalCalendar extends Component {
  state = {
    show: false,
    modalStartDate:null,
    modalEndDate:null,
    modalNoOfDays:null,
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "Event Now", start: new Date() }
    ]
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (startdate,endDate) => {
    this.setState({ 
      show: true,
      modalStartDate:startdate,
      modalEndDate:endDate
     });
  };
 

  
  calendarComponentRef = React.createRef();
  handleDateSelect=info=>{
    let endDate=new Date(info.endStr);
    endDate.setDate(endDate.getDate()-1);
    let endStr=formatDate(endDate);
    this.handleShow(info.startStr,endStr);
}

  render() {
    return (
      <div>
        <Modal  size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Apply leave</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ApplyLeaveForm startdate={this.state.modalStartDate} enddate={this.state.modalEndDate} handleClose={this.handleClose}/>
          </Modal.Body>
        </Modal>

        <FullCalendar
          defaultView="dayGridMonth"
          selectable="true"
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth"
          }}
          businessHours={{
            daysOfWeek:[1,2,3,4,5],
            startTime:'08:00',
            endTime:'18:00'
          }
          }
          plugins={[dayGridPlugin, interactionPlugin]}
          ref={this.calendarComponentRef}
          weekends={this.state.calendarWeekends}
          events={this.state.calendarEvents}
         
          select={this.handleDateSelect}
        />
      </div>
    );
  }

}
