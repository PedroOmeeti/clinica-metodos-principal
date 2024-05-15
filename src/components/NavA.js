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

function NavA() {
 

  return (
    <div className=''>
      <Navbar expand="md bg-light" className='p-5'>
        <Col className='ms-5' >
          <Link id='titulo' className='navbar-brand cor-texto' to="/"><MdHealthAndSafety className='mb-1 me-1' />Métodos Clínica</Link>
        </Col>
        
        <Nav id='titulo2' className="me-auto d-md-row justify-content-around'" navbar>
          <NavItem>
            <Link className='nav-link cor-texto' to="/">Clínica</Link>
          </NavItem>
          <NavItem>
            <Link className='nav-link cor-texto' to="/Contato">Contato</Link>
          </NavItem>
          <NavItem>
            <Link className='nav-link cor-texto' to="/Agende">Agende</Link>
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