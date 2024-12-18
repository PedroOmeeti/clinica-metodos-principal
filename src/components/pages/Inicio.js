import {
  Container,
  Col,
  Row,
  List
} from "reactstrap";
import CarouselA from "../CarouselA";
import CarouselServicos from "../CarouselServicos";
import Janaina from '../img/janaina.jpg'
// import Emojisorrindo from '../img/emojisorrindo.png'

import '../Clinica.components.css'
import { Link } from "react-router-dom";
import '../Contato.components.css'
import { RiPsychotherapyLine } from "react-icons/ri";
import { IoNutritionOutline } from "react-icons/io5";
import { MdHearing } from "react-icons/md";
import { MdOutlinePsychology } from "react-icons/md";
import { FaHandsHoldingChild } from "react-icons/fa6";


import Sala from '../img/saladeespera.jpg'
import recepcao from '../img/recepcao.jpg'

import { LuStethoscope } from "react-icons/lu";
import { MdElderlyWoman } from "react-icons/md";
import { GiLovers } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { SlBriefcase } from "react-icons/sl";
import { TbPhysotherapist } from "react-icons/tb";





function Inicio() {
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
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="fs-4">A Métodos Clínica foi inaugurada em março de 2020, sendo fundada pela Empresária e Psicóloga Janaina Gomes. Nossa equipe possui profissionais e colaboradores altamente qualificados e comprometidos em oferecer serviços de saúde abrangentes e personalizados. Nosso foco é a saúde mental e emocional da população, proporcionando atendimentos com terapias alternativas e consultas, visando a qualidade de vida. Venha nos visitar e descubra o caminho para uma vida mais saudável e feliz!</p>
          </Col>
        </Row>

        <Row className="mt-5 d-flex justify-content-center">
          <Col xs="6" md="6" lg="6" className="col-8">
            <Link className='nav-link fundin fs-4 text-center p-3 rounded-3 my-3 text-white' to='https://api.whatsapp.com/send?phone=5512996448045&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta!' target="_blank">Agende sua Consulta!</Link>
          </Col>    
        </Row>
        <Row>
          <Col>
            <img src={Janaina} className="img-fluid Image-height d-block mx-auto my-5 rounded-2" alt="Infra estrutura da clínica" />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col>
            <CarouselServicos />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-4 d-flex justify-content-center">
          <Col xs="6" md="6" lg="6" className="col-8">
            <Link className='nav-link fundin fs-4 text-center p-3 rounded-3 my-3 text-white' to="/Contato">Onde estamos localizados</Link>
          </Col>
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
            <h3 className="mt-4 text-center">Recepção</h3>
            <img className="img-fluid Image-height d-block mx-auto my-5 rounded-2 imagem-ambiente" src={recepcao}></img>
          </Col>

          <Col xs="12" md="12" lg="6">
            <h3 className="mt-4 text-center">Sala de Espera</h3>
            <img className="img-fluid Image-height d-block mx-auto my-5 rounded-2 imagem-ambiente" src={Sala}></img>
          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default Inicio;
