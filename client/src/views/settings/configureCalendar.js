import React, { Component } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

export default class ConfigureCalendar extends Component {
    calendarComponentRef = React.createRef();

    state = {
        calendarWeekends: true,
        calendarEvents: [
            // initial event data
            { title: "Event Now", start: new Date() }
        ]
    };
    render() {
        return (
            <div>
                <FullCalendar
                    defaultView="dayGridMonth"
                    selectable="true"
                    header={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth"
                    }}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    ref={this.calendarComponentRef}
                    weekends={this.state.calendarWeekends}
                    events={this.state.calendarEvents}
                    
                    select={this.handleDateSelect}
                />
            </div>
        )
    }

    toggleWeekends = () => {
        this.setState({
            // update a property
            calendarWeekends: !this.state.calendarWeekends
        });
    };

    handleDateSelect=info=>{
        alert('selected : '+info.startStr+'to : '+info.endStr);
    }

    gotoPast = () => {
        let calendarApi = this.calendarComponentRef.current.getApi();
        calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
    };

    handleDateClick = arg => {
        // if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
        this.setState({
            // add new event data
            calendarEvents: this.state.calendarEvents.concat({
                // creates a new array
                title: "New Event",
                start: arg.date,
                allDay: arg.allDay
            })
        });
        // }
    };
}
