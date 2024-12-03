import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import './Adm.components.css'
import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import timeGridWeekPlugin from '@fullcalendar/timegrid'
import timeGridDayPlugin from '@fullcalendar/timegrid'
 
 
function Calendario() {
 const headerToolbar= {
  left: 'prev,next today',
  center: 'title',
  right: 'timeGridWeek,timeGridDay'
}
 
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, timeGridWeekPlugin, timeGridDayPlugin]} // Ensure both plugins are included
      initialView="timeGridWeek"
      headerToolbar={headerToolbar}
      events='https://fullcalendar.io/api/demo-feeds/events.json'
      locale="pt-br"
    />
  );
}
 
export default Calendario; // Export the component for use