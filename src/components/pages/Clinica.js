import {
  Container,
  Col,
  Row,
  List
} from "reactstrap";
import CarouselA from "../CarouselA";
import Infraestrutura from '../img/estrutura-clinica.jpg'
// import Emojisorrindo from '../img/emojisorrindo.png'
import '../Clinica.components.css'
import { Link } from "react-router-dom";
import '../Contato.components.css'
import { RiPsychotherapyLine } from "react-icons/ri";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";

function Clinica() {
  return (
    <div>
      <Row>
        <Col>
          <CarouselA />
        </Col>
      </Row>
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="mt-5">Cuidando do seu bem-estar </h1>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="fs-4">Nossa equipe de profissionais altamente qualificados está comprometida em oferecer serviços de saúde abrangentes e personalizados. Desde consultas médicas até terapias alternativas, estamos aqui para ajudar você a renovar sua saúde e qualidade de vida. Venha nos visitar e descubra o caminho para uma vida mais saudável e feliz!</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <img src={Infraestrutura} className="img-fluid Image-height d-block mx-auto my-5 rounded-2" alt="Infra estrutura da clínica" />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="p-5 fundin text-white">
          <Row>
            <Col className="text-center fs-5">
              <RiPsychotherapyLine className="fs-1" />
            </Col>
            
            <Col className="text-center fs-5">
              <FaHandHoldingMedical className="fs-1" /> 
            </Col>
            <Col className="text-center fs-4">
              <GiMedicines className="fs-1" />
            </Col>
          </Row>
          <Row>
            <Col className="text-center fs-4">
              Psicologia  
            </Col>
            <Col className="text-center fs-4">
              Dermatologia 
            </Col>
            <Col className="text-center fs-4">
              Ortopedia   
            </Col>
            
          </Row>
        </Row>
      </Container>


        <Container>
        <Row className="mt-4">
          <Col></Col>
          <Col>
            <Link className='nav-link LoginColor fs-4 text-center p-3 rounded-3 my-3 text-white secondary' to="/Contato">Onde estamos localizados</Link>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col className="fs-4 text-center mb-4"> A Clínica Renovar Saúde trás para sua empresa as soluções para a gestão e envio dos eventos de saúde. Além disso, a clínica oferece serviços de Psicologia personalizados para suas necessidades pessoais, executados com maestria. Entre em contato hoje mesmo para saber mais sobre os serviços da Clínica Renovar Saúde.</Col>
        </Row>
        
      </Container>
      
    </div>
  );
}

export default Clinica;
