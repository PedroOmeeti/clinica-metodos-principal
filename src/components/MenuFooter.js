import React from 'react'
import { Row, Col, Container } from "reactstrap";
import "./MenuFooter.components.css"
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Logo from './img/logo branca.png'

function MenuFooter(){
    return(
        <div className='text-center text-white p-4 fundo'>
            <Container>
                <Row>
                    <Row className='logosize mb-2'>
                        <Col className='align-items-center d-flex justify-content-center'><img id='logo' src={Logo}  ></img></Col>
                    </Row>
                    <Row>
                            <div className='mt-3'>
                                <a href='#' className='me-3 p-1 fs-3'><FaEnvelope/></a>
                                <a href='#' className='me-3 fs-3'><FaFacebookSquare/></a>
                                <a href='#' className='me-3 fs-3'><FaInstagram/></a>
                                <a href='#' className='fs-3'><FaWhatsapp/></a>
                            </div>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                            <a href='#' className='text-white'>Informações </a>
                            <a href='#' className='text-light'>▪️</a>
                            <a href='#' className='text-white'> Suporte </a>
                            <a href='#' className='text-light'>▪️</a>
                            <a href='#' className='text-white'> Quem somos nós</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href='#' className='text-white'>Termos de Uso </a>
                            <a href='#' className='text-light'>▪️</a>
                            <a href='#' className='text-white'> Politica de Privacidade</a>
                        </Col>
                    </Row>
                </Row>    
            </Container>    
        </div> 
    )
}

export default MenuFooter;  