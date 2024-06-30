import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Col,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { FaRegUser } from "react-icons/fa";
import './NavA.components.css';
import ModalLogin from './ModalLogin';
import { MdHealthAndSafety } from "react-icons/md";
import Logo from './img/Logo.png';

function NavA() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className=''>
      <Navbar id='menu' expand="md" className='p-5 bg-light'>
        <Col className='ms-md-5'>
          <Link className='navbar-brand cor-texto' to="/"><img className='img-fluid' id='logo' src={Logo} alt='Logo' /></Link>
        </Col>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="text-center mt-md-0 mt-5">
          <Nav id='barra' className=" d-flex ms-auto justify-content-md-end justify-content-center align-items-center" navbar>
            <NavItem>
              <Link id='roter' className='nav-link cor-texto' to="/">Início</Link>
            </NavItem>
            <NavItem>
              <Link id='roter' className='nav-link cor-texto' to="/Plano">Plano</Link>
            </NavItem>
            <NavItem>
              <Link id='roter' className='nav-link cor-texto' to="/Sobre">Sobre</Link>
            </NavItem>
            <NavItem>
              <Link id='roter' className='nav-link cor-texto' to="/Contato">Contato</Link>
            </NavItem>
            <NavItem>
              <Link id='roter' className='nav-link cor-texto' to="/Agende">Agende</Link>
            </NavItem>
            <NavItem className='d-flex justify-content-center'>
              <ModalLogin />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavA;
