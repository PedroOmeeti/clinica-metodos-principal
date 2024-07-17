import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Clinica from './img/imagemGrande.png'
import "./CardNos.components.css";


const CardNos = ({ img, especialista, especialidade }) => {

    return (
        <Container fluid className='d-flex justify-content-center'>
            <Card
                className="border-0 mt-3 mb-4 cor card"
                outline
                style={{
                    width: '16rem'

                }}
            >
                <img
                    className='d-block'
                    alt="Profissional"
                    src={img}
                />
                <CardBody className='titulo' >
                    <CardTitle
                        className='text-center'
                        tag="h3">
                        {especialista}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2  text-center"
                        tag="h6"
                    >
                        {especialidade}
                    </CardSubtitle>
                </CardBody>
            </Card>

        </Container>
    );
};

export default CardNos;