import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import ImagemGrande from './img/imagemGrande.jpg'
import "./Agendamento.components.css"

const Agendamento = () => {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [especialista, setEspecialista] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do agendamento para o servidor
    console.log('Dados do agendamento:', data, horario, especialidade,especialista);
  };

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center">
          <Col className="text-center my-4">
            <h1>Agende a sua consulta</h1>
          </Col>
      </Row>
    
      <Form onSubmit={handleSubmit} className='mb-5 '>
        <Row className='align-items-center justify-content-center'>
          <Col md="5" xs="12">
            <img id='imagem' className='rounded-5 d-block mx-auto mb-4'  src={ImagemGrande} />
          </Col>
          
          <Col>

            <Row>
              <Col> 
                <FormGroup>
                  <Label for="email">Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Insira seu email"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <FormGroup>
                  <Label for="especialidade">Especialidades:</Label>
                  <Input
                    type="select"
                    name="especialidade"
                    id="especialidade"
                    value={especialidade}
                    onChange={(e) => setEspecialidade(e.target.value)}>

                    <option value="">Selecione uma especialidade</option>
                    <option value="Dermatologista">Psicologia</option>
                    <option value="Psicólogo">Nutrição</option>
                    <option value="Ortopedia">Fonoaudiologia</option>
                    <option value="Ortopedia">Psiquiatria</option>
                    <option value="Ortopedia">Psicopedagogia</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="especialista">Especialistas:</Label>
                  <Input
                    type="select"
                    name="especialista"
                    id="especialista"
                    value={especialista}
                    onChange={(e) => setEspecialidade(e.target.value)}>

                    <option value="">Selecione um especialista</option>
                    <option value="Dermatologista">Jaciane F.L Moreira</option>
                    <option value="Psicólogo">Gabriela C. Alves Rada</option>
                    <option value="Ortopedia">Jacqueline</option>
                    <option value="Ortopedia">Vinícius</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="data">Data:</Label>
                  <Input
                    type="date"
                    name="data"
                    id="data"
                    value={data}
                    onChange={(e) => setData(e.target.value)} />

                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label for="horario">Horário:</Label>
                  <Input
                    type="time"
                    name="horario"
                    id="horario"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)} />
                </FormGroup>
              </Col>
            </Row>
            
            
            <Row>
              <Col className='text-lg-start text-md-start text-center mt-4'>
                <Button type="submit" className='secondary'>Agendar</Button>
              </Col>
            </Row> 

          </Col>
        </Row>
        
      </Form>

    </Container>
  );
};

export default Agendamento;
