import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Col,
  NavbarToggler,
  Collapse,
  Row,
} from 'reactstrap';
import './NavA.components.css';
import ModalLogin from './ModalLogin';
import Logo from './img/Logo.png';
import { FaUser } from "react-icons/fa";

function NavA() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className=''>
      <Navbar id='menu' expand="md" className='p-5 bg-light'>
        <Col className='ms-md-5'>
          <NavLink className='navbar-brand cor-texto' to="/"><img className='img-fluid' id='logo' src={Logo} alt='Logo' /></NavLink>
        </Col>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="text-center mt-md-0 mt-5">
          <Nav id='barra' className="d-flex ms-auto justify-content-md-end justify-content-center align-items-center" navbar>
            <NavItem>
              <NavLink id='roter' className='nav-link cor-texto' to="/" activeClassName="active">Início</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id='roter' className='nav-link cor-texto' to="/Plano" activeClassName="active">Plano</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id='roter' className='nav-link cor-texto' to="/Sobre" activeClassName="active">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id='roter' className='nav-link cor-texto' to="/Contato" activeClassName="active">Contato</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink id='roter' className='nav-link cor-texto' to="/Agende" activeClassName="active">Agende</NavLink>
            </NavItem> */}
            <NavItem className='d-flex justify-content-center'>
            <a  id='' className='text-white' href="http://localhost:3001/Login"><FaUser color='#800100' /></a>
              
            </NavItem>
          </Nav>
        </Collapse>

      </Navbar>
    </div>
  );
}

export default NavA;
