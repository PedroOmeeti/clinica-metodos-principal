import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import NavA from "./components/NavA";
import Inicio from "./components/pages/Inicio.js";
import Contato from "./components/pages/Contato.js";
import Agende from "./components/pages/Agende.js";
import Adm from "./components/pages/pagesADM/Adm.js";
import MenuFooter from "./components/MenuFooter.js";
import Sweet from "./components/SweetAlert.js";
import Sobre from "./components/pages/Sobre.js";
import Plano from "./components/pages/Plano.js";

function App() {
 

  
  return (
    <Container fluid className="p-0 overflow-hidden">
      <BrowserRouter>
      
        <Row>
          <NavA />
        </Row>

        <Row>
          <AnimatedRoutes />
        </Row>
        
        <Sweet />
        <Row>
          <MenuFooter />
        </Row>



        <Row>
          <Col className="text-center Footer-color p-2">
            <span className="fs-5">&copy;2024 Copyright - Todos os direitos reservados - Clínica Métodos Pindamonhangaba</span>
          </Col>
        </Row>
      </BrowserRouter>
    </Container>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={600}
      >
        <Routes location={location}>
        {
        console.log(useLocation().pathname)
        }
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/plano" element={<Plano />} />
          <Route path="/contato" element={<Contato />} />
          {/* <Route path="/agende" element={<Agende />} /> */}
          
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
