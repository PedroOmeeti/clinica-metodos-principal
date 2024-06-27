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
        <Row>
          <h1 className="mt-5 text-center">Planos</h1>

        </Row>

        <Row className="cabecalho mt-5 text-center">
          <Col className="textoimg text-center d-flex align-items-center">
            <h1 className="texto mt-5 fs-4">Escolha o plano ideal para sua <span className="bordo">saúde </span> <span className="icone"><CiMedicalCross />
            </span> </h1>


          </Col>
          <Col className="">
            <img className="img" src={cartao}></img>
          </Col>
        </Row>

        <hr className="custom-hr"></hr>


        <Row className="corpo">
          <Col className="especialidades d-flex align-items-center">
            <ul className="lista list-unstyled d-flex flex-column align-column">
              <h2>Especialidades do nosso plano</h2>
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
              <CardHeader className="header text-center">
                <CardTitle tag="h5">
                  <p>Plano</p>
                </CardTitle>
                <p>Individual</p>

                <CardText className="text-center d-flex justify-content-center">

                  <p>R$</p> <h2 className="text-success">100</h2>

                </CardText>
              </CardHeader>
              <CardBody className="text-center">


                <Button className="btn btn-danger">
                  <a href="https://api.whatsapp.com/send?phone=5512996448045&text=Quero%20saber%20mais%20sobre%20o%20plano%20individual
" target="_blank">Saber mais</a>
                </Button>
                <ul className="lista list-unstyled mt-4">
                  <li className="esp">1 pessoa</li>
                  <li className="esp">3 meses de plano</li>
                  <li className="esp">Consultas a partir 60 reais</li>
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
              <CardHeader className="header text-center">
                <CardTitle tag="h5">
                  <p>Plano</p>
                </CardTitle>
                <p>Familiar</p>

                <CardText className="text-center d-flex justify-content-center">

                  <p>R$</p> <h2 className="text-success">150</h2>

                </CardText>
              </CardHeader>
              <CardBody className="text-center">


                <Button className="btn btn-danger">
                  <a href="https://api.whatsapp.com/send?phone=5512996448045&text=Quero%20saber%20mais%20sobre%20o%20plano%20Fam%C3%ADlia
" target="_blank">Saber mais</a>
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

      </Container>
    </div>
  )
}

export default Plano;