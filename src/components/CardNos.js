import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Clinica from './img/imagemGrande.png'
import "./CardNos.components.css";

const CardNos = () => {

    return (
        <Container fluid>
            <Card
                className="border-0 mt-3 borda mb-4 cor card"
                outline
                style={{
                    width: '16rem'

                }}
            >
                <img
                    className='d-block borda'
                    alt="Profissional"
                    src= {Clinica}
                />
                <CardBody >
                    <CardTitle 
                    className='text-center'
                    tag="h3">
                        Gabriela
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2  text-center"
                        tag="h6"
                    >
                        Nutricionista
                    </CardSubtitle>
                </CardBody>
            </Card>

        </Container>
    );
};

export default CardNos;