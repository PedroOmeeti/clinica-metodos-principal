import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import ItemForm from "./ItemForm";
import { FaUserAlt } from "react-icons/fa";

import "./ModalLogin.components.css";
import { Link } from "react-router-dom";

function ModalRegister(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <a className="nav-link" color="danger" onClick={toggle}>
        Criar uma conta
      </a>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle} className="text-center">
          <FaUserAlt /> Login
        </ModalHeader>
        <ModalBody>
        <ItemForm
            label="CPF"
            name="cpf"
            type="text"
            ph="Digite seu CPF"
          />
          <ItemForm
            label="Nome"
            name="nome"
            type="text"
            ph="Digite seu Nome"
          />
          <ItemForm
            label="Data de Nascimento"
            name="nascimento"
            type="date"
            ph="Digite sua data de Nascimento"
          />
          <ItemForm
            label="Convênio"
            name="convenio"
            type="text"
            ph="Digite seu Convênio"
          />
          <ItemForm
            label="Celular"
            name="celular"
            type="text"
            ph="Digite seu número de celular"
          />
          
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
            ph="Digite uma senha"
          />
          <ItemForm
            label="Confirme a sua Senha"
            name="confirmesenha"
            type="password"
            ph="Confirme sua senha"
          />
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Pessoa com Deficiência
            </Label>
          </FormGroup>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
          <a
            href="#"
            className="text-secondary nav-link"
            color=""
            onClick={toggle}
          >
            ?
          </a>{" "}
          <a
            href="#"
            className="btn secondary text-white"
            color="white"
            onClick={toggle}
          >
            Enviar
          </a>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalRegister;
