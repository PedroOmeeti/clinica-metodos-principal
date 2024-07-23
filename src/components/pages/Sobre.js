import { Col, Container, Row } from "reactstrap";
import CardNos from "../CardNos";
import SobreN from '../img/sobrenosfoto.jpg'
import Janater from '../img/janater.png'
import Funcionarios from '../img/funcionarios.png'
import Sala from '../img/sala_jana 1.jpg';
import "../Sobre.components.css";

import Clinica from '../img/imagemGrande.png'
import Fisio from '../img/fisio.png'
import Fisiom from '../img/fisiom.jpg'
import Fono from '../img/fono.jpg'
import Nsei from '../img/nsei.png'

function Sobre() {

  return (
    <Container>

      <Row className='align-items-center mt-5'>
        <Col xs="12" md="12" lg="6" className="order-lg-2 order-1">
          <h3 className="mb-2 ti ms-lg-0 ms-4">Sobre Nós</h3>
          <p className='fs-4'>
            A Métodos Clínica foi inaugurada no período da pandemia em março de 2020 pela profissional Psicóloga e Empresária Janaina Gomes, que anteriormente, tinha o consultório de Psicologia desde 2013.
            O nome Métodos surgiu com a  proposta de ser um espaço de acolhimento familiar na área da saúde mental.
            A visão da clinica é promover prevenção e promoção de saúde para a população com atendimento especializado e de qualidade.
          </p>
        </Col>

        <Col xs="12" md="12" lg="6" className="order-lg-1 order-2">
          <img className='borda d-block mb-4 w-100 fun' src={SobreN} />
        </Col>
      </Row>

      <Row className="mt-5 mb-5 align-items-center p-3">
        <Col xs="12" md="12" lg="6" className="col-6">
          <h3 className="mb-2 ti ms-lg-0 ms-4">Equipe</h3>
          <p className="fs-4 ms-1">A Equipe de profissionais, são capacitados e periodicamente realizam treinamentos e reuniões com embasamento teórico e prático para desenvolver novas estratégias de atendimentos e projetos em prol da saúde emocional e mental dos pacientes.</p>
        </Col>

        <Col className="col-6 ms-lg-0 ms-3 mt-3">
          <img src={Funcionarios} className="d-block mx-auto borda equipe fun" alt="Infra estrutura da clínica" />
        </Col>
      </Row>

      <hr />

      <Row className="mt-5 ms-1">
        <h1 className="mb-2 ti ms-lg-0 ms-4">Profissionais</h1>
        <p className="fs-4">Os profissionais parceiros e atuantes na Métodos, são comprometidos, qualificados e excelentes para acolher e identificarem as demandas dos pacientes e famílias.</p>
      </Row>

      <Row className="mt-5">
        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>

        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Fisio} especialista="Maicon" especialidade="Fisioterapia" />
        </Col>

        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Fisiom} especialista="Angela" especialidade="Fisioterapia" />
        </Col>

        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Fono} especialista="Jacquelini" especialidade="Fonoaudiologia" />
        </Col>
      </Row>

      <Row >
        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Nsei} especialista="Nsei" especialidade="Nutricionista" />
        </Col>

        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>

        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>

        <Col xs="6" md="6" lg="6 " xl="3" className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>
        <hr />
      </Row>

      <Row className="mt-5 mb-5 align-items-center p-3">
        <Col xs="12" md="12" lg="6" className="order-lg-1 order-2 mt-3">
          <img src={Janater} className="img-fluid Image-height d-block mx-auto borda fun" alt="Infra estrutura da clínica" />
        </Col>

        <Col xs="12" md="12" lg="6" className="order-lg-2 order-1">
          <h3 className="ti ms-lg-0 ms-4">Corpo Clínico</h3>
          <p className="fs-4">O profissionalismo dos profissionais contribui com um atendimento humanizado de nossos pacientes.
            Periodicamente, existe a reunião com todos os profissionais, e mensalmente, as discussões de casos entre Psicólogos, sendo supervisionados pela responsável Técnica Psicóloga Janaina Gomes.
            Em casos, de pacientes que realizam atendimentos com a equipe, os profissionais realizam debates sobre as possibilidades de intervenções nos âmbitos terapêuticos, familiares e escolares.
            A equipe busca exercer de maneira ética, profissional e zelosa a melhora do quadro clínico do paciente.</p>
        </Col>
      </Row>


      <Row className="mt-5 mb-5 align-items-center p-3">
        <Col xs="12" md="12" lg="6" className="col-6">
          <h3 className="ti ms-lg-0 ms-4">Conforto</h3>
          <p className="fs-4">A Clínica Métodos é um refúgio de tranquilidade e cuidado, onde cada detalhe é pensado para proporcionar um ambiente confortável e acolhedor aos seus pacientes. Desde a recepção calorosa até as salas de atendimento modernas e equipadas, a clínica oferece um espaço harmonioso que inspira confiança e bem-estar. As cores suaves, a iluminação agradável e o mobiliário ergonômico criam uma atmosfera serena, perfeita para quem busca tratamentos de saúde em um local que valoriza o conforto e a tranquilidade. Na Clínica Métodos, o cuidado com o paciente começa no ambiente, promovendo uma experiência de saúde única e diferenciada.</p>
        </Col>

        <Col xs="12" md="12" lg="6" className="col-6 mt-3">
          <img src={Sala} className="img-fluid Image-height d-block mx-auto borda fun" alt="Infra estrutura da clínica" />
        </Col>
      </Row>
    </Container>
  )
}

export default Sobre