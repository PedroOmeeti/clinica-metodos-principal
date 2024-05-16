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
import withReactContent from 'sweetalert2-react-content'

const Swal = withReactContent(Swal)


function Sweet() {


  return (
    <div className=''>

      <button onclick="alert()" >Agende sua consulta</button>

      {/* <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.11.0/dist/sweetalert2.all.min.js"></script> */}

      <script>
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
      </script>
    </div>
  );
}

export default Sweet;