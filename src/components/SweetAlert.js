import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Col,
} from 'reactstrap';
import './SweetAlert.components.css';
import Swal from 'sweetalert2';


function Sweet() {
  const navigate = useNavigate(); 
  //Obtém a função de navegação

  function showAlert() {
    Swal.fire({
      title: "Você ainda está ai?",
      text: "Agende sua consulta",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: 'Agendar agora',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#9D1A1F',
      iconColor: '#9D1A1F',
      
    }).then((result) => {
      if (result.isConfirmed) {
       //Navega para outra página ao confirmar
        navigate('Agende'); //Substitue pelo seu caminho real
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Execute qualquer ação desejada no cancelamento
        console.log('Cancel button clicked');
      }
    })
  }

  useEffect(() => {
// Defina um cronômetro para mostrar o alerta após 10 segundos
    const timer = setTimeout(showAlert, 15000);

    //Limpa o timer se o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

};

export default Sweet;
