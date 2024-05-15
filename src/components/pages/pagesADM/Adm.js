import { useState } from 'react';
import { Col, Container, Row } from "reactstrap";
import Inicio from "../../componentsADM/Inicio";
import '../../componentsADM/Adm.components.css'
import Adicionar from '../../componentsADM/Adicionar';
import Marcar from '../../componentsADM/Marcar';


function Adm() {

  const [Navegacao, setNavegacao] = useState(Inicio);

  const ResultadoNavegacao = (item) => {
    if (item === 'Horarios') {
      setNavegacao(Inicio);
    } else if (item === 'Adicionar') {
      setNavegacao(Adicionar)
    } else if (item === 'Marcar') {
      setNavegacao(Marcar)
    }
  }
  


  return(
    <Container>
      <Row>
        <Col className="col-1 listBackGround text-white">
          <button className="aperta nav-link py-1 ms-2" onClick={() =>ResultadoNavegacao('Horarios')}>Horarios</button>
          <button className="aperta nav-link py-1 ms-2" onClick={() => ResultadoNavegacao('Adicionar')}>Adicionar clientes</button>
          <button className="aperta nav-link py-1 ms-2" onClick={() => ResultadoNavegacao('Marcar')}>Marcar Consulta</button>
        </Col>
        
        
        <Col className='p-0 m-0'>
          <div>{Navegacao}</div>
         
        </Col>
      </Row>
    </Container>
  )
}

export default Adm