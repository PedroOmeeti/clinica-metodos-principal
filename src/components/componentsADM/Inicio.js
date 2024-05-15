import {
  Container,
  Col,
  Row,
  List,
  Button
} from "reactstrap";
import AgendaHorarios from "./AgendaHorarios";

// import Emojisorrindo from '../img/emojisorrindo.png'
import '../Clinica.components.css'
import '../Contato.components.css'

function Inicio() {
  return(
    <div className="container-fluid p-0 fundoAgenda">
        <Row>
            <Col xs='3' className="h5 text-center m-2"><p>Agenda - Dr. Estevão Rada</p></Col>
            <Col><button className="primary m-2 btn text-white text-center"><b>Adicionar em Lista de Espera</b></button></Col>
            <Col><button className="primary m-2 btn text-white text-center"><b>Novo agendamento</b></button></Col>
        </Row>
        <Row>
            <Col xs='2'>
                <Container className="bg-white ms-3 mb-3">
                    <Row className="h5 bg-secondary text-white">
                        <p className="pt-3">Pacientes de hoje</p>
                    </Row>
                    <Row className="pb-2">
                        <p className="h6">09:00 - 09:30</p>
                        <p>Bruno Reis</p>
                        <hr/>
                        <p className="h6">10:30 - 11:00</p>
                        <p>Juliano Alberto</p>
                        <hr/>
                        <p className="h6">11:00 - 11:30</p>
                        <p>Fernando Barros</p>
                        <hr/>
                        <p className="h6">14:00 - 14:30</p>
                        <p>Renata Nascimento</p>
                        <hr/>
                        <p className="h6">15:00 - 15:30</p>
                        <p>André Silva</p>
                        <hr/>
                        <p className="h6">15:30 - 16:00</p>
                        <p>João Camargo</p>
                        <hr/>
                        <p className="h6">16:30 - 17:00</p>
                        <p>Fausto Silva</p>
                    </Row>
                </Container>
            </Col>
            <Col>
                <Container className="bg-white p-0 m-0">
                    <AgendaHorarios />
                </Container>
            </Col>
        </Row>
    </div>
  )
}

export default Inicio