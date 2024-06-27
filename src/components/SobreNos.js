import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import Clinica from './img/sobrenosfoto.jpg'
import "./SobreNos.components.css";

const SobreNos = () => {

    return (
        <Container fluid>
            <Row className="d-flex justify-content-center align-items-center d-flex justify-content-start">
                <Col className="text-center my-4">
                </Col>
            </Row>

            <Row>
                <Col className="col-6">
                    <img className='borda d-block  mb-4 w-100' src={Clinica} />
                </Col>

                <Col className="col-6">
                    <h3 className="mb-2 ti">Sobre Nós</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Donec volutpat, nisi ut auctor venenatis, velit nisl sollicitudin metus, ut aliquam libero orci eget nunc.</h5>
                </Col>
            </Row>

        </Container>
    );
};

export default SobreNos;