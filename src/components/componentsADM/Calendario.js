import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import './Adm.components.css'
import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
 
 
function Calendario() {
  // Define the `handleDateClick` function for clarity and reusability
  const handleDateClick = (info) => {
    alert('Clicked on: ' + info.dateStr);
    alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    alert('Current view: ' + info.view.type);
    info.dayEl.style.backgroundColor = 'red';
  };
 
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]} // Ensure both plugins are included
      initialView="dayGridWeek"
      //dateClick={handleDateClick} // Pass the `handleDateClick` function
    />
  );
}
 
export default Calendario; // Export the component for use