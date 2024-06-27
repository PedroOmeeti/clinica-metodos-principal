import { Col, Container, Row } from "reactstrap"
import SobreNos from "../SobreNos";
import CardNos from "../CardNos";

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
          <CardNos />
        </Col>

        <Col className="col-3">
          <CardNos />
        </Col>

        <Col className="col-3">
          <CardNos />
        </Col>

        <Col className="col-3">
          <CardNos />
        </Col>
      </Row>

      <Row>
        <Col className="col-3">
          <CardNos />
        </Col>

        <Col className="col-3">
          <CardNos />
        </Col>

        <Col className="col-3">
          <CardNos />
        </Col>

        <Col className="col-3">
          <CardNos />
        </Col>
      </Row>
    </Container>
  )
}

export default Sobre