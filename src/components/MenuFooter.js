import React from 'react'
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./MenuFooter.components.css"
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

function MenuFooter(){
    return(
        <div className='text-center text-white p-4 fundo'>
                <Row>
                    <Col xs='12' sm="4" className='align-items-center d-flex justify-content-center pe-5 fs-4'><p><MdHealthAndSafety className='me-1 mb-1' />Clínica Renovar Saúde</p></Col>
                    <Col xs='12' sm="4" className='column fs-6 mt-5'>
                            <p><Link className='nav-link' to='/'>Clínica</Link></p>
                            <p><Link className='nav-link' to='/contato'>Contato</Link></p>
                            <p><Link className='nav-link' to='/agende'>Agende</Link></p>
                    </Col>
                    <Col xs='12' sm="4" className=''>
                        <p className='fs-5'>Nossas Redes Sociais</p>
                        <div className='text-start mt-3'>
                            <p><FaEnvelope/> clinicarenovar@gmail.com</p>
                            <p><FaFacebookSquare/> Clinica Renovar Pinda</p>
                            <p><FaInstagram/> @clinicarenovar</p>
                            <p><FaWhatsapp/> (12) 99590-8846</p>
                        </div>
                    </Col>
                </Row>        
        </div> 
    )
}

export default MenuFooter;