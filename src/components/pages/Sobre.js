import { Col, Container, Row } from "reactstrap";
import CardNos from "../CardNos";
import Clinica from '../img/imagemGrande.png'
import SobreN from '../img/sobrenosfoto.jpg'
import Janater from '../img/janater.png'
import Funcionarios from '../img/funcionarios.png'
import Sala from '../img/sala_jana 1.jpg';
import "../Sobre.components.css";

function Sobre() {

  return (
    <Container>

      <Row className='align-items-center mt-5'>
        <Col xs="12" md="12" lg="6" className="order-lg-2 order-1">
          <h3 className="mb-2 ti ms-lg-0 ms-4">Sobre Nós</h3>
          <h5 className='fs-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Donec volutpat, nisi ut auctor venenatis, velit nisl sollicitudin metus, ut aliquam libero orci eget nunc.
          </h5>
        </Col>

        <Col xs="12" md="12" lg="6" className="order-lg-1 order-2">
          <img className='borda d-block mb-4 w-100 img' src={SobreN} />
        </Col>
      </Row>

      <Row className="mt-5 mb-5 align-items-center p-3">
        <Col xs="12" md="12" lg="6" className="col-6">
          <h3 className="mb-2 ti ms-lg-0 ms-4">Equipe</h3>
          <p className="fs-4 ms-1">O trabalho em equipe na clínica de psicologia é fundamental para garantir um atendimento completo e de qualidade, desde a recepção calorosa até o acompanhamento psicológico especializado. Cada profissional contribui com suas habilidades e conhecimentos específicos, criando um ambiente acolhedor e propício para o cuidado da saúde mental.</p>
        </Col>

        <Col className="col-6 ms-lg-0 ms-3 mt-3">
          <img src={Funcionarios} className="d-block mx-auto borda equipe" alt="Infra estrutura da clínica" />
        </Col>
      </Row>

      <hr />

      <Row className="mt-5 ms-1">
        <h1 className="mb-2 ti ms-lg-0 ms-4">Profissionais</h1>
        <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
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
          <p className="fs-4">Acreditamos que a felicidade é fundamental para uma vida saudável, por isso, oferecemos uma ampla gama de serviços, desde consultas e exames até programas de acompanhamento contínuo. Na Clínica Métodos, você encontra uma equipe comprometida em cuidar de você e de sua família com excelência e dedicação.</p>
        </Col>
      </Row>


      <Row className="mt-5 mb-5 align-items-center p-3">
        <Col xs="12" md="12" lg="6" className="col-6">
          <h3 className="ti ms-lg-0 ms-4">Conforto</h3>
          <p className="fs-4">A Clínica Métodos é um refúgio de tranquilidade e cuidado, onde cada detalhe é pensado para proporcionar um ambiente confortável e acolhedor aos seus pacientes. Desde a recepção calorosa até as salas de atendimento modernas e equipadas, a clínica oferece um espaço harmonioso que inspira confiança e bem-estar. As cores suaves, a iluminação agradável e o mobiliário ergonômico criam uma atmosfera serena, perfeita para quem busca tratamentos de saúde em um local que valoriza o conforto e a tranquilidade. Na Clínica Métodos, o cuidado com o paciente começa no ambiente, promovendo uma experiência de saúde única e diferenciada.</p>
        </Col>

        <Col xs="12" md="12" lg="6" className="col-6 mt-3">
          <img src={Sala} className="img-fluid Image-height d-block mx-auto borda img" alt="Infra estrutura da clínica" />
        </Col>
      </Row>
    </Container>
  )
}

export default Sobre