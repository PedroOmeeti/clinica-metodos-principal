import { Col, Container, Row } from "reactstrap"
import AdicionarComponent from "./Adicionar.component"

function Adicionar() {
  return(
    <Container>
      <Row>
        <Col className="text-center">
          <h1 className="my-2">Cadastrar</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AdicionarComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default Adicionar