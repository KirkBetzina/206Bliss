import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { InlineWidget } from '@calendly/javascript';


const localizer = momentLocalizer(moment);

function MyCalendar(props) {
  const events = props.events.map(event => ({
    start: new Date(event.start),
    end: new Date(event.end),
    title: event.title,
    id: event.id,
  }));

  const handleSelectEvent = event => {
    window.location.href = event.url;
  };

  return (
    <div style={{ height: '500pt' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
}

export default MyCalendar;
