import { Col, Container, Row} from "reactstrap";
import Agendamento from "../Agendamento";
function Agende() {
  return(
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Agendamento />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Agende