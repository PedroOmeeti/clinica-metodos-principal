import { Col, Container, Row } from "reactstrap"
import MarcarComponent from './Marcar.component'

function Marcar() {
    return(
        <Container>
            <Row>
                <Col>
                    <MarcarComponent />
                </Col>
            </Row>
        </Container>
    )
}

export default Marcar