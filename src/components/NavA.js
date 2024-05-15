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
      <Navbar expand="md secondary">
        <Col >
          <Link className='navbar-brand text-white' to="/"><MdHealthAndSafety className='mb-1 me-1' />Clínica Renovar Saúde</Link>
        </Col>
        
        <Nav className="me-auto d-md-row" navbar>
          <NavItem>
            <Link className='nav-link text-white' to="/">Clínica</Link>
          </NavItem>
          <NavItem>
            <Link className='nav-link text-white' to="/Contato">Contato</Link>
          </NavItem>
          <NavItem>
            <Link className='nav-link text-white' to="/Agende">Agende</Link>
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