import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { FaRegUser } from "react-icons/fa";
import ItemForm from './ItemForm';
import { FaUserAlt } from "react-icons/fa";

import './ModalLogin.components.css'
import { Link } from 'react-router-dom';
import ModalRegister from './ModalRegister';

function ModalLogin(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <a id='icone' className='nav-link text-white' color="danger" onClick={toggle}>
        <bold ><FaRegUser color='#800100' /></bold>
      </a>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle} className='text-center'><FaUserAlt /> Login</ModalHeader>
        <ModalBody>
        <ItemForm
              label="Email"
              name="email"
              type="email"
              ph="Digite seu email"
            />
            <ItemForm
              label="Senha"
              name="senha"
              type="password"
              ph="Digite sua senha"
            />
            <Row>
              <Col>
                <a href="#" className='nav-link text-secondary'>Esqueci minha senha</a>
              </Col>
             
            </Row>
        </ModalBody>
        <ModalFooter className='d-flex justify-content-between'>
          <a href="#" className='nav-link text-secondary text-end' ><ModalRegister /></a>
          <Link to="/Adm" className='btn secondary text-white' color="white" onClick={toggle}>
            Enviar
          </Link>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalLogin;