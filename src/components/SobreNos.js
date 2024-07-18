import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import Clinica from './img/sobrenosfoto.jpg'
import "./SobreNos.components.css";

const SobreNos = () => {

    return (
        <Container fluid>
        <Row className='align-items-center mt-5'>
            <Col xs="12" md="12" lg="6" className="order-lg-2 order-1">
                <h3 className="mb-2 ti ms-lg-0 ms-4">Sobre Nós</h3>
                <p className='fs-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Donec volutpat, nisi ut auctor venenatis, velit nisl sollicitudin metus, ut aliquam libero orci eget nunc.
                </p>
            </Col>

            <Col xs="12" md="12" lg="6" className="order-lg-1 order-2">
                <img className='borda d-block mb-4 w-100 img' src={Clinica} />
            </Col>
        </Row>


    </Container>
    );
};

export default SobreNos;