import { Col, Container, Row } from "reactstrap"
import cartao from '../img/cartao.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, CardText } from 'reactstrap';
import '../Plano.components.css';
import { CiMedicalCross } from "react-icons/ci";


function Plano() {
  return (
    <div>
      <Container >

        <Row className="cabecalho mt-5 text-center">
          <Col xs="12" md="12" lg="6" className="textoimg text-center d-flex align-items-center justify-content-center">
            <h1 className="texto mt-5 fs-4">Escolha o plano ideal para sua <span className="bordo">saúde </span> <span className="icone"><CiMedicalCross /></span></h1>
          </Col>
          <Col className="d-flex text-center justify-content-md-end justify-content-center mt-5 p-4">
            <img className="img-fluid rounded" src={cartao} alt="Cartão de plano de saúde"></img>
          </Col>
        </Row>

        <hr className="custom-hr"></hr>


        <Row className="corpo">
          <Col xs="12" lg="3" className="especialidades d-flex align-items-center ms-lg-5 justify-content-center mb-5 mb-lg-0">
            <ul className="lista list-unstyled d-flex flex-column align-column text-lg-start text-center">
              <h2>Especialidades do nosso plano </h2>
              <li>• Clinica Geral </li>
              <li>• Geriatria </li>
              <li>• Psicologia </li>
              <li>• Terapia de Casal </li>
              <li>• Terapia Familiar </li>
              <li>• Fonoaudiologia </li>
              <li>• Orientação Vocacional </li>
              <li>• Nutrição </li>
              <li>• Fisioterapia </li>
              <li>• Psicopedagogia </li>
              <hr className="mt-3 custom-hr"></hr>
              <li className="mt-2   ">• Desconto nas consultas de Psiquiatria Infantil e Adulto </li>
            </ul>
          </Col>
          <Col xs="12" md="6" lg="4" className="d-flex justify-content-md-end justify-content-center mb-3">
            <Card className="my-2" style={{ width: '20rem' }}>
              <CardHeader className="header text-center">
                <CardTitle tag="h5">Plano</CardTitle>
                <p>Individual</p>
                <CardText className="text-center d-flex justify-content-center">
                  <p>R$</p> <h2 className="text-success">100</h2>
                </CardText>
              </CardHeader>
              <CardBody className="text-center">
                <Button className="btn btn-danger">
                  <a href="https://api.whatsapp.com/send?phone=5512996448045&text=Quero%20saber%20mais%20sobre%20o%20plano%20individual" target="_blank" rel="noopener noreferrer">Saber mais</a>
                </Button>
                <ul className="lista list-unstyled mt-4">
                  <li className="esp">1 pessoa</li>
                  <li className="esp">3 meses de plano</li>
                  <li className="esp">Consultas a partir 60 reais</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6" lg="4" className="d-flex justify-content-center mb-3">
            <Card className="my-2" style={{ width: '20rem' }}>
              <CardHeader className="header text-center">
                <CardTitle tag="h5">Plano</CardTitle>
                <p>Familiar</p>
                <CardText className="text-center d-flex justify-content-center">
                  <p>R$</p> <h2 className="text-success">150</h2>
                </CardText>
              </CardHeader>
              <CardBody className="text-center">
                <Button className="btn btn-danger">
                  <a href="https://api.whatsapp.com/send?phone=5512996448045&text=Quero%20saber%20mais%20sobre%20o%20plano%20Fam%C3%ADlia" target="_blank" rel="noopener noreferrer">Saber mais</a>
                </Button>
                <ul className="lista list-unstyled mt-4">
                  <li className="esp">Até 4 Familiares</li>
                  <li className="esp">3 meses de plano</li>
                  <li className="esp">Consultas a partir 60 reais</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5 mb-5">
            <h3 className="mb-3">Também atendemos por:</h3>
            <p className="bottom">PARTICULAR <span className="text-danger">•</span> POLICLIN <span className="text-danger">•</span> UNIMED <span className="text-danger">•</span> LEVIDA <span className="text-danger">•</span> FUSEX <span className="text-danger">•</span> GAMA SAÚDE <span className="text-danger">•</span> SPA SAÚDE</p>
          </Col>
        </Row>


      </Container>
    </div>
  )
}

export default Plano;