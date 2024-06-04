import {
  Container,
  Col,
  Row,
  List
} from "reactstrap";
import CarouselA from "../CarouselA";
import Infraestrutura from '../img/infraestrutura.png'
// import Emojisorrindo from '../img/emojisorrindo.png'
import '../Clinica.components.css'
import { Link } from "react-router-dom";
import '../Contato.components.css'
import { RiPsychotherapyLine } from "react-icons/ri";
// import { FaHandHoldingMedical } from "react-icons/fa6";
import { IoNutritionOutline } from "react-icons/io5";
import { MdHearing } from "react-icons/md";
import { MdPsychology } from "react-icons/md";

import { MdOutlinePsychology } from "react-icons/md";
import { FaHandsHoldingChild } from "react-icons/fa6";

import Ambiente1 from '../img/ambiente1.png'
import Ambiente2 from '../img/ambiente2.png'




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
        <Row>
          <Col className="fs-4 text-center mb-4">A clínica oferece serviços de Psicologia personalizados para suas necessidades pessoais, executados com maestria. Entre em contato hoje mesmo para saber mais sobre os nossos serviços.</Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="p-5 fundin text-white">
          <Row>
            <Col className="text-center fs-5">
              <RiPsychotherapyLine className="fs-1" />
            </Col>
            
            <Col className="text-center fs-5">
              <IoNutritionOutline className="fs-1" /> 
            </Col>
            <Col className="text-center fs-4">
              <MdHearing className="fs-1" />
            </Col>
            <Col className="text-center fs-4">
              <MdOutlinePsychology className="fs-1" />
            </Col>
            <Col className="text-center fs-4">
              <FaHandsHoldingChild className="fs-1" />
            </Col>
          </Row>
          <Row>
            <Col className="text-center fs-4">
              Psicologia  
            </Col>
            <Col className="text-center fs-4">
              Nutrição 
            </Col>
            <Col className="text-center fs-4">
              Fonoaudiologia   
            </Col>
            <Col className="text-center fs-4">
              Psiquiatria   
            </Col>
            <Col className="text-center fs-4">
              Psicopedagogia   
            </Col>
            
          </Row>
        </Row>
      </Container>


        <Container>
        <Row className="mt-4">
          <Col></Col>
          <Col>
            <Link className='nav-link fundin fs-4 text-center p-3 rounded-3 my-3 text-white' to="/Contato">Onde estamos localizados</Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      
      <Container>

        <Row>
          <Col className="fs-4 text-center mb-4">
            A cada dia, a Métodos Clínica continua a escrever sua história de sucesso, tocando vidas e proporcionando esperança a todos que passam por suas portas. É um lugar onde o cuidado vai além da medicina, onde a cura começa no momento em que se é recebido com um sorriso caloroso e um abraço sincero.
          </Col>
        </Row>

        <Row>
          <Col>
            <img className="img-fluid Image-height d-block mx-auto my-5 rounded-2" src={Ambiente1}></img>
          </Col>

          <Col>
            <img className="img-fluid Image-height d-block mx-auto my-5 rounded-2 imagem-ambiente" src={Ambiente2}></img>
          </Col>
        </Row>

      </Container>
      
    </div>
  );
}

export default Clinica;
