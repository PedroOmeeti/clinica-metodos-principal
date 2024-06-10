import { Link } from 'react-router-dom'
import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Col,
} from 'reactstrap';
import { FaRegUser } from "react-icons/fa";
import './NavA.components.css'
import ModalLogin from './ModalLogin';
import { MdHealthAndSafety } from "react-icons/md";
import Logo from './img/Logo.png'

function NavA() {


  return (
    <div className=''>
      <Navbar id='menu' expand="md bg-light" className='p-5'>
        <Col className='ms-5' >
            <Link className='navbar-brand cor-texto' to="/"><img id='logo' src={Logo} ></img></Link>
        </Col>

        <Nav id='barra' className="me-auto d-md-row justify-content-around'" navbar>
          <NavItem>
            <Link className='roter nav-link cor-texto' to="/">Clínica</Link>
          </NavItem>
          <NavItem>
            <Link className='roter nav-link cor-texto' to="/Contato">Contato</Link>
          </NavItem>
          <NavItem>
            <Link className='roter nav-link cor-texto' to="/Agende">Agende</Link>
          </NavItem>
          <NavItem>
            <ModalLogin />
          </NavItem>
        </Nav>     
      </Navbar>

    </div>

  );
}

export default NavA;