import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import './Marcar.component.css';

function MarcarComponent() {
  const [cpf, setCpf] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [dataHora, setDataHora] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados da consulta
  };

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Row>
        <Col>
          <h1 className='mt-5 text-center'>Marcar Consulta</h1>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit} className='mt-5 mb-5 centraliza'>
        <Row>
          <Col>
            <FormGroup>
              <Label for="cpf">CPF:</Label>
              <Input
                type="text"
                name="cpf"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="especialidade">Especialidade:</Label>
              <Input
                type="text"
                name="especialidade"
                id="especialidade"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="dataHora">Data e Horário:</Label>
          <Input
            type="datetime-local"
            name="dataHora"
            id="dataHora"
            value={dataHora}
            onChange={(e) => setDataHora(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" className='secondary'>Marcar Consulta</Button>
      </Form>
    </div>
  );
}

export default MarcarComponent