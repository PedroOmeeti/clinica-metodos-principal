import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import ItemForm from "../ItemForm";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookSquare, FaHandHoldingMedical, FaMapMarkerAlt } from "react-icons/fa";
import "../Contato.components.css";
import { IoChatbubbles } from "react-icons/io5";
import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contato() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceId = 'service_2vy1ify';
    const templateId = 'template_tj7cce2';
    const publicKey = 'hhlr88uannMLQMdJY';
    
    const templateParams = {
      from_name: nome,
      email: email,
      to_name: 'clinica-metodos',
      message: mensagem,
      reply_to: email

    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       setNome('');
       setEmail('');
       setMensagem('');
    }).catch(function(error) {
       console.log('FAILED...', error);
    });
    
    
    
    // Limpa os campos do formulário
    setNome('');
    setEmail('');
    setMensagem('');
  };

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
          <Col className="border p-3" xs="12" md="6">
            <form onSubmit={handleSubmit}>
                <Label for="nome">Nome:</Label>
                <Input
                  className="mb-3"
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}
                  name="nome"
                  type="text"
                  placeholder="Digite seu nome"
                />
                <Label for="email">Email:</Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="mb-3"
                  name="email"
                  type="email"
                  placeholder="Digite seu email"
                />
              
                <Label for="mensagem">Nos envie uma mensagem:</Label>
                <Input
                  onChange={(e) => setMensagem(e.target.value)}
                  value={mensagem}
                  className="mb-3"
                  name="mensagem"
                  type="textarea"
                  placeholder="Deixe sua mensagem"
                />
                <Button type="submit" className="secondary text-white" color="white" block>
                  Enviar
                </Button>
            </form>
          </Col>
          <Col xs="12" md="6" className="text-lg-start text-md-start text-center">
            <h2 className="text-center mt-4">Informações</h2>
            <p>
              <p className="h5">Telefone</p>
            </p>
            <p><FaPhoneAlt className="p-0 text-secondary" /> (12) 3643-7796</p>
            <hr />
            <p className="h5">Whatsapp</p>

            <a className="zap" href="https://api.whatsapp.com/send?phone=5512996448045&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20cl%C3%ADnica.
" target="_blank" >
              <p><FaWhatsapp className="p-0 text-secondary" /> (12) 99644-8045 <IoChatbubbles /></p></a>
            <hr />

            <p className="h5">E-mail</p>
            <p><FaEnvelope className="p-0 text-secondary" /> metodosclinicarecepcao@outlook.com</p>
            <hr />
            <p className="h4">Nos siga nas redes sociais</p>
            <a id="rede1" className="fs-1" href="https://www.instagram.com/metodosclinica/" target="_blank"><FaInstagram /></a>
            <a id="rede2" className="fs-1" href="https://www.facebook.com/metodosclinica" target="_blank"><FaFacebookSquare /></a>
          </Col>
        </Row>
        
      </Container>
      <Container fluid className="Background-Conteudo text-white pb-3">
        <Container>
          <Row>
            <Col xs="12" md="6" lg="6" className="mt-lg-5 p-5">
              <p className="text-center fs-1"><FaHandHoldingMedical /></p>
              <hr />
              {/* <p className="h5">Clinica Renovar Saude Centro</p>
                <p><FaMapMarkerAlt /> R. Estela, 116 - Centro, pindamonhangaba - SP, 12404-200</p>
                <p><FaPhoneAlt /> (12) 8547-3322</p>
                <hr/> */}
              <p className="h5">Métodos Clinica | Pindamonhangaba</p>
              <p><FaMapMarkerAlt /> R. Manoel Cembraneli, 225 - Chácara Galega, Pindamonhangaba - SP, 12422-200</p>
              <p><FaPhoneAlt /> (12) 3643-7796</p>
              <hr />
              {/* <p className="h5">Clinica Renovar Saude Taubaté</p>
                <p><FaMapMarkerAlt /> Av. dos Autonomistas, 896, Centro, Taubaté - SP, 12404-372</p>
                <p><FaPhoneAlt /> (12) 4002-8922</p> */}
            </Col>
            <Col className="d-flex align-self-center mt-lg-5 mt-sm-5 mb-5" xs="12" md="6" lg="6">
              <div className="mapouter">
                <div className="gmap_canvas">

                  <iframe id="gmap_canvas" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rua%20Manoel%20Cembranelli,%20225,%20Ch%C3%A1cara%20Galega,%20Pindamonhangaba,%20SP,%20Brazil+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

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
