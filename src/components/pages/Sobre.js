import { Col, Container, Row } from "reactstrap";
import SobreNos from "../SobreNos";
import CardNos from "../CardNos";
import Clinica from '../img/imagemGrande.png'
import Janater from '../img/janater.png'
import Funcionarios from '../img/funcionarios.png'
import Sala from '../img/sala_jana 1.jpg';
import "../SobreNos.components.css";

function Sobre() {

  return (
    <Container>
      <Row>
        <Col>
          <SobreNos />
        </Col>
      </Row>

      <Row className="mt-5 mb-5 align-items-center p-3">
        <Col xs="12" md="12" lg="6" className="col-6">
          <h3 className="mb-2 ti ms-lg-0 ms-4">Equipe</h3>
          <h5 className="fs-4 ms-1">O trabalho em equipe na clínica de psicologia é fundamental para garantir um atendimento completo e de qualidade, desde a recepção calorosa até o acompanhamento psicológico especializado. Cada profissional contribui com suas habilidades e conhecimentos específicos, criando um ambiente acolhedor e propício para o cuidado da saúde mental.</h5>
        </Col>

        <Col className="col-6 ms-lg-0 ms-3 mt-3">
          <img src={Funcionarios} className="d-block mx-auto borda equipe" alt="Infra estrutura da clínica" />
        </Col>
      </Row>
      

      

      <hr />

      <Row className="mt-5 ms-1">
        <h1 className="mb-2 ti ms-lg-0 ms-4">Profissionais</h1>
        <h5 className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</h5>
      </Row>

      <Row className="mt-5">
        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>

        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>

        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>

        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
        </Col>
      </Row>

      <Row >
        <Col xs="6" md="6" lg="6" xl="3" className="col-3">
          <CardNos img={Clinica} especialista="Gabriela" especialidade="Nutricionista" />
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
          <img src={Janater} className="img-fluid Image-height d-block mx-auto borda img" alt="Infra estrutura da clínica" />
        </Col>

        <Col xs="12" md="12" lg="6" className="order-lg-2 order-1">
          <h3 className="ti ms-lg-0 ms-4">Equipe</h3>
          <h5 className="fs-4">Acreditamos que a felicidade é fundamental para uma vida saudável, por isso, oferecemos uma ampla gama de serviços, desde consultas e exames até programas de acompanhamento contínuo. Na Clínica Métodos, você encontra uma equipe comprometida em cuidar de você e de sua família com excelência e dedicação.</h5>
        </Col>
      </Row>


      <Row className="mt-5 mb-5 align-items-center p-3">
        <Col xs="12" md="12" lg="6" className="col-6">
          <h3 className="ti ms-lg-0 ms-4">Conforto</h3>
          <h5 className="fs-4">A Clínica Métodos é um refúgio de tranquilidade e cuidado, onde cada detalhe é pensado para proporcionar um ambiente confortável e acolhedor aos seus pacientes. Desde a recepção calorosa até as salas de atendimento modernas e equipadas, a clínica oferece um espaço harmonioso que inspira confiança e bem-estar. As cores suaves, a iluminação agradável e o mobiliário ergonômico criam uma atmosfera serena, perfeita para quem busca tratamentos de saúde em um local que valoriza o conforto e a tranquilidade. Na Clínica Métodos, o cuidado com o paciente começa no ambiente, promovendo uma experiência de saúde única e diferenciada.</h5>
        </Col>

        <Col xs="12" md="12" lg="6" className="col-6 mt-3">
          <img src={Sala} className="img-fluid Image-height d-block mx-auto borda img" alt="Infra estrutura da clínica" />
        </Col>
      </Row>
    </Container>
  )
}

export default Sobre