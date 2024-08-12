import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { Navbar, Nav, NavItem, Col } from 'reactstrap';
import './SweetAlert.components.css';
import Swal from 'sweetalert2';

function Sweet() {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const alertShownRef = useRef(false); // Variável de controle para rastrear se o alerta foi exibido

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (!alertShownRef.current && window.location.pathname != "/Adm") {
      timeoutRef.current = setTimeout(showAlert, 15000);
    }
  };

  const showAlert = () => {
    alertShownRef.current = true; // Marque que o alerta foi exibido
    Swal.fire({
      title: "Você ainda está aí?",
      text: "Agende sua consulta",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: 'Agendar agora',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#9D1A1F',
      iconColor: '#9D1A1F',
    }).then((result) => {
      if (result.isConfirmed) {
        
        window.open('https://api.whatsapp.com/send?phone=5512996448045&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta!');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log('Cancel button clicked');
      }
    });
  };

  useEffect(() => {
    // Eventos para resetar o timer de inatividade
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    document.onclick = resetTimer;
    document.onscroll = resetTimer;
    document.onkeydown = resetTimer;

    // Limpa o timer ao desmontar o componente
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.onload = null;
      document.onmousemove = null;
      document.onkeypress = null;
      document.onclick = null;
      document.onscroll = null;
      document.onkeydown = null;
    };
  }, []);

  return (
    <div className='d-none'>
      <Navbar>
        <Nav>
          <NavItem>
            {/* Itens de navegação */}
          </NavItem>
        </Nav>
      </Navbar>
      {/* Restante do conteúdo da sua página */}
    </div>
  );
}

export default Sweet;
