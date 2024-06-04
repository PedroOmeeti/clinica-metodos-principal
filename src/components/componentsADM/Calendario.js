import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import './Adm.components.css'




// function Calendario() {
//   function Alerta() {
//     alert("Olá mundo")
//   }

//   let dateClick = new Calendario( {
//     plugins: [ interactionPlugin ],
//     dateClick: function(info) {
//       alert('Clicked on: ' + info.dateStr);
//       alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
//       alert('Current view: ' + info.view.type);
//       // change the day's background color just for fun
//       info.dayEl.style.backgroundColor = 'red';
//     }
//   });
//   return (
//     <FullCalendar
//       plugins={[ dayGridPlugin ]}
//       initialView="dayGridMonth"
//       dateClick={Alerta}
      
      
//     />
//   )
// }

// export default Calendario


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
      plugins={[dayGridPlugin, interactionPlugin]} // Ensure both plugins are included
      initialView="dayGridMonth"
      dateClick={handleDateClick} // Pass the `handleDateClick` function
    />
  );
}

export default Calendario; // Export the component for use
