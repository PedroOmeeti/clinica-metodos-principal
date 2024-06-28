import { Col, Container, Row } from "reactstrap"
import SobreNos from "../SobreNos";
import CardNos from "../CardNos";
import Clinica from '../img/imagemGrande.png'

function Sobre() {
  return (
    <Container>
      <Row>
        <Col>
          <SobreNos />
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <h1 className="mt-5">Profissionais</h1>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista"/>
        </Col>

        <Col className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>

        <Col className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>

        <Col className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>
      </Row>

      <Row>
        <Col className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>

        <Col className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>

        <Col className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>

        <Col className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>
      </Row>
    </Container>
  )
}

export default Sobre