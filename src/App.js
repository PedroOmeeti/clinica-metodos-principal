import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import NavA from "./components/NavA";
import Clinica from "./components/pages/Clinica.js";
import Contato from "./components/pages/Contato.js";
import Agende from "./components/pages/Agende.js";
import Adm from "./components/pages/pagesADM/Adm.js";
import MenuFooter from "./components/MenuFooter.js"


function App() {
  return (
    <Container fluid className="p-0 overflow-hidden">
      <BrowserRouter>
        
        <Row>
          <NavA />
        </Row>

        <Row>
          <Routes>
            <Route path="/" element={<Clinica />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/agende" element={<Agende />} />
            <Route path="/adm" element={<Adm />} />
            
          </Routes>
        </Row>

        <Row>
          <MenuFooter />
        </Row>    

        <Row>
          <Col className="text-center Footer-color p-2">
            <span className="fs-5">&copy;2024 Copyright - GUPE Desenvolvimento</span>
          </Col>   
        </Row>
      </BrowserRouter>
    </Container>
  );
}

export default App;
