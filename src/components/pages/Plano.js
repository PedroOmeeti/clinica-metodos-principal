import { Col, Container, Row } from "reactstrap"
import cartao from '../img/cartao.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, CardText } from 'reactstrap';
import '../Plano.components.css';

function Plano() {
  return (
    <div>
      <Container >
        <Row>
          <h1 className="mt-5 text-center">PLANOS</h1>

        </Row>
        <Row>
          <p className="mt-5 fs-4 text-center">Escolha o plano ideal para sua sauáde</p>
        </Row>

        <Row className="corpo mt-5">
          <Col className="d-flex align-items-center">
            <ul className="list-unstyled d-flex flex-column justify-content-end align-column">
              <h2>Especialidades</h2>
              <li>• Clinica Geral</li>
              <li>• Geriatria</li>
              <li>• Psiciologia</li>
              <li>• Terapia de Casal</li>
              <li>• Terapia Familiar</li>
              <li>• Fonoaudiologia</li>
              <li>• Orientação Vocacional</li>
              <li>• Nutrição</li>
              <li>• Fisioterapia</li>
              <li>• Psicopedagogia</li>
            </ul>
          </Col>

          {/* Card 1 */}
          <Col className="d-flex justify-content-end">
            <Card
              className="my-2"
              style={{
                width: '20rem'
              }}
            >

              <CardBody className="text-center">
                <CardTitle tag="h5">
                  <p className="text-center">Plano</p>
                </CardTitle>
                <p>Individual</p>
                <CardText className="text-center d-flex justify-content-center">

                  <p>R$</p> <h2 className="text-success">100</h2>

                </CardText>
                <Button className="btn btn-danger">
                  <a href="api.whatsapp.com/send?phone=5512996448045&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20cl%C3%ADnica.%20">Saber mais</a>
                </Button>
                <ul className="list-unstyled mt-4">
                  <li>1 pessoa</li>
                  <li>3 meses de plano</li>
                  <li>Consultas a partir 60 reais</li>
                </ul>
              </CardBody>
            </Card>

          </Col>

          {/* Card 2 */}
          <Col className="d-flex justify-content-start">
            <Card
              className="my-2"
              style={{
                width: '20rem'
              }}
            >

              <CardBody className="text-center">
                <CardTitle tag="h5">
                  <p className="text-center">Plano</p>
                </CardTitle>
                <p>Familiar</p>
                <CardText className="text-center d-flex justify-content-center">

                  <p>R$</p> <h2 className="text-success">150</h2>

                </CardText>
                <Button className="btn btn-danger">
                  <a href="api.whatsapp.com/send?phone=5512996448045&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20cl%C3%ADnica.%20">Saber mais</a>
                </Button>
                <ul className="lista list-unstyled mt-4">
                  <li>Até 4 Familiares</li>
                  <li>3 meses de plano</li>
                  <li>Consultas a partir 60 reais</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Plano;