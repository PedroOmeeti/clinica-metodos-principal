import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Button, FormGroup, Input, Label } from 'reactstrap';
import { FaUser } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import './ModalLogin.components.css'
import { Link, useNavigate } from 'react-router-dom';
import ModalRegister from './ModalRegister';
import { useJwt } from 'react-jwt';

function ModalLogin(args) {
  const [modal, setModal] = useState(false);

  // consumo API
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const token = localStorage.getItem('token');
  const { decodedToken, isExpired } = useJwt(token);

  const tokenDecoded = decodedToken

//----

  const toggle = () => setModal(!modal);


  

  return (
    <div>
      <a id='icone' className='nav-link text-white' color="danger" onClick={toggle}>
        <FaUser color='#800100' />
      </a>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle} className='text-center'><FaUserAlt /> Login</ModalHeader>
        <form onSubmit={e => {
          e.preventDefault(); 
          
        }}>
        <FormGroup>
          <ModalBody>
              <Label for="email">Email:</Label>
                <Input className='mb-3'
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Digite seu email"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                />
              
              <Label for="senha">Senha:</Label>
                <Input className='mb-3'
                    
                    name="senha"
                    type="password"
                    id="senha"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
              
              <Row>
                  <Col>
                    <a href="#" className='nav-link text-secondary'>Esqueci minha senha</a>
                  </Col>
              </Row>
          </ModalBody>
        </FormGroup>

          <ModalFooter className='d-flex justify-content-between'>
            <span className='nav-link text-secondary text-end' ><ModalRegister /></span>
            <Button className='btn secondary text-white' color="white" type='submit' onClick={toggle} >
              Enviar
            </Button>
            
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

export default ModalLogin;