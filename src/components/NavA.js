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
    <div>
      <Navbar expand="md bg-light">
        <Col >
          <Link className='navbar-brand cor-texto' to="/"><MdHealthAndSafety className='mb-1 me-1' />Métodos Clínica</Link>
        </Col>
        
        <Nav className="me-auto d-md-row" navbar>
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