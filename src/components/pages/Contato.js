import { Button, Col, Container, Row } from "reactstrap";
import ItemForm from "../ItemForm";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookSquare, FaHandHoldingMedical, FaMapMarkerAlt } from "react-icons/fa";
import "../Contato.components.css";

function Contato() {
  return (
    <div>
      <Container>
        <Row className="my-4">
          <Col className="text-center">
            <h1 className="display-4 text-secondary">Fale Conosco</h1>

            <p>Queremos saber a sua opinião, sugestão, dúvida ou elogio sobre o nosso trabalho. Por favor, preencha o formulário abaixo e deixe sua mensagem. Em breve, entraremos em contato com você.</p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs="12" md="6">
            <ItemForm
              label="Nome"
              name="nome"
              type="text"
              ph="Digite seu nome"
            />
            <ItemForm
              label="Email"
              name="email"
              type="email"
              ph="Digite seu email"
            />
            <ItemForm
              label="Telefone com DDD"
              name="telefone"
              type="tel"
              ph="Telefone ou Whatsapp"
            />
            <ItemForm
              label="Conte um pouco sobre o que precisa"
              name="mensagem"
              type="textarea"
              ph="Deixe sua mensagem"
            />
            <Button className="secondary text-white" color="white" block>
              Enviar
            </Button>
          </Col>
          <Col xs="12" md="6">
            <h2>Informações</h2>
            <p>
              <p className="h5">Telefone</p>
            </p>
            <p><FaPhoneAlt className="p-0 text-secondary"/> (12) 4657-2311</p>
            <hr />
            <p className="h5">Whatsapp</p>
            <p><FaWhatsapp className="p-0 text-secondary"/> (12) 99786-5543</p>
            <hr />
            <p className="h5">E-mail</p>
            <p><FaEnvelope className="p-0 text-secondary"/> clinicarenovar@gmail.com</p>
            <hr />
            <p className="h4">Nos siga nas redes sociais</p>
            <a className="fs-1"><FaInstagram className="p-0 text-secondary" /></a>
            <a className="fs-1"><FaFacebookSquare className="p-0 ms-2 text-secondary" /></a>
          </Col>
        </Row>
      </Container>
      <Container fluid className="Background-Conteudo text-white pb-3">
        <Container>
          <Row>
            <Col xs='12' sm='6'>
                <p className="text-center fs-1"><FaHandHoldingMedical /></p>
              
                <p className="h5">Clinica Renovar Saude Centro</p>
                <p><FaMapMarkerAlt /> R. Estela, 116 - Centro, pindamonhangaba - SP, 12404-200</p>
                <p><FaPhoneAlt /> (12) 8547-3322</p>
                <hr/>
                <p className="h5">Clinica Renovar Saude Crispim</p>
                <p><FaMapMarkerAlt /> Av. dos Autonomistas, 896, Crispim, pindamonhangaba - SP, 12404-372</p>
                <p><FaPhoneAlt /> (12) 4002-8922</p>
                <hr/>
                <p className="h5">Clinica Renovar Saude Taubaté</p>
                <p><FaMapMarkerAlt /> Av. dos Autonomistas, 896, Centro, Taubaté - SP, 12404-372</p>
                <p><FaPhoneAlt /> (12) 4002-8922</p>
            </Col>
            <Col className="d-flex align-self-center" xs='12' sm='6'>
              <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=pindamonhangaba, centro&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                  
    
                  </div>
                </div>
              </Col>
          </Row>
          </Container>
        </Container>
    </div>
  );
}

export default Contato;
