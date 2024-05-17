import { Link } from 'react-router-dom'
import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Col,
} from 'reactstrap';
import './SweetAlert.components.css'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'



function Sweet() {
 
  function alert(){
    Swal.fire({
      title: "Já está indo embora?",
      text: "Agende sua consulta",
      icon: "question",
      showCancelButton: true
    }
    ).then((result) => {
      if (result.iDismissed) {
        alert('cancelou');
      }
    }
    )
  }

  return (
    <div className=''>

      <button onClick={alert} >Agende sua consulta</button>

     {/* teste */}

     
        
    
    </div>
  );
}

export default Sweet;