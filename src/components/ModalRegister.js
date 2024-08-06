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
  Input,
  Button
} from "reactstrap";
import ItemForm from "./ItemForm";
import { FaUserAlt } from "react-icons/fa";

import "./ModalLogin.components.css";
import { Link } from "react-router-dom";

function ModalRegister(args) {
  const [modall, setModall] = useState(false);

  const togglee = () => setModall(!modall);

  // consumo API
  const [cpf, setCpf] = useState('');
  const [data_nasc, setData_nasc] = useState('');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone1, setTelefone1] = useState('');
  const [telefone2, setTelefone2] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [complemento, setComplemento] = useState('');

  
    
    
    
 

  return (
    <div>
      <a href="#" className="nav-link text" onClick={togglee}>
        Criar uma conta
      </a>
      <Modal size="lg" isOpen={modall} toggle={togglee} {...args}>
        <ModalHeader toggle={togglee} className="text-center">
          <FaUserAlt /> Cadastrar
        </ModalHeader>
        <form onSubmit={e => {
          e.preventDefault();
          
        }}>
          <ModalBody>
            <Row>
              <Col>
                <Label for="cpf">CPF:</Label>
                <Input className="mb-3"
                  name="cpf"
                  type="text"
                  id="cpf"
                  placeholder="Digite seu CPF"
                  value={cpf}
                  onChange={e => setCpf(e.target.value)}
                />
              </Col>
              <Col>
                <Label for="data_nasc">Data de Nascimento:</Label>
                <Input className="mb-3"
                  name="data_nasc"
                  type="date"
                  id="data_nasc"
                  placeholder="Digite sua data de Nascimento"
                  value={data_nasc}
                  onChange={e => setData_nasc(e.target.value)}
                />
              </Col>
              
            </Row>
            <Row>
              <Col>
                <Label for="nome">Nome:</Label>
                <Input className="mb-3"
                  name="nome"
                  type="text"
                  id="nome"
                  placeholder="Digite seu Nome Completo"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />  
              </Col>
              
            </Row>
            
            <Row>
              <Col>
                <Label for="telefone1">Celular:</Label>
                <Input className="mb-3"
                  name="telefone1"
                  type="text"
                  id="telefone1"
                  placeholder="Digite seu número de Celular"
                  value={telefone1}
                  onChange={e => setTelefone1(e.target.value)}
                />
              </Col>
              <Col> 
                <Label for="telefone2">Telefone:</Label>
                <Input className="mb-3"
                  name="telefone2"
                  type="text"
                  id="telefone2"
                  placeholder="Digite seu telefone"
                  value={telefone2}
                  onChange={e => setTelefone2(e.target.value)}
                />
              </Col>
            </Row>
            
            <Row>
              <Col>
                <Label for="cep">CEP:</Label>
                <Input className="mb-3"
                  name="cep"
                  type="text"
                  id="cep"
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={e => setCep(e.target.value)}
                />
              </Col>
              <Col>
                <Label for="estado">Estado:</Label>
                <Input className="mb-3"
                  name="estado"
                  type="text"
                  id="estado"
                  placeholder="Digite seu estado"
                  value={estado}
                  onChange={e => setEstado(e.target.value)}
                />
              </Col>
            </Row>

            <ItemForm
              label="Convênio"
              name="convenio"
              type="text"
              ph="Digite seu Convênio"
            />
    
            <Row>
              <Col>
                <Label for="rua">Rua:</Label>
                <Input className="mb-3"
                  name="rua"
                  type="text"
                  id="rua"
                  placeholder="Digite sua Rua"
                  value={rua}
                  onChange={e => setRua(e.target.value)}
                />
              
              </Col>
              
              <Col>
                <Label for="numero">Numero:</Label>
                <Input className="mb-3"
                  name="numero"
                  type="text"
                  id="numero"
                  placeholder="Digite o número de sua casa"
                  value={numero}
                  onChange={e => setNumero(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Label for="bairro">Bairro:</Label>
                <Input className="mb-3"
                  name="bairro"
                  type="text"
                  id="bairro"
                  placeholder="Digite seu Bairro"
                  value={bairro}
                  onChange={e => setBairro(e.target.value)}
                />
              </Col>

              <Col>
                <Label for="cidade">Cidade:</Label>
                <Input className="mb-3"
                  name="cidade"
                  type="text"
                  id="cidade"
                  placeholder="Digite sua Cidade"
                  value={cidade}
                  onChange={e => setCidade(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Label for="complemento">Complemento:</Label>
                <Input className="mb-3"
                  name="complemento"
                  type="text"
                  id="complemento"
                  placeholder="Digite o Complemento"
                  value={complemento}
                  onChange={e => setComplemento(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Label for="email">Email:</Label>
                <Input className="mb-3"
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Col>

              <Col>
                <Label for="senha">Senha:</Label>
                <Input
                  name="senha"
                  type="password"
                  id="senha"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
              </Col>
            </Row>

          
            
            {/* <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Pessoa com Deficiência
              </Label>
            </FormGroup> */}
          </ModalBody>
          <ModalFooter className="d-flex justify-content-between">
            <Button
              className="text-secondary nav-link"
              color=""
              onClick={togglee}
            >
              Voltar
            </Button>
            <Button
              className="btn secondary text-white"
              color="white"
              type='submit'
              onClick={togglee}
            >
              Enviar
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

export default ModalRegister;
