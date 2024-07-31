import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' 

import navIcon1 from "../../assets/img/nav-icon1.svg"
import navIcon2 from "../../assets/img/nav-icon2.svg"
import navIcon3 from "../../assets/img/nav-icon3.svg"
import logo from "../../assets/Logos/logo-1.png"

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className="aling-item-center">
                <Col sm={6}>
                    <img src={logo} alt="Logo" />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                        <a href=""> <img src={navIcon1} alt="" /> </a>
                        <a href=""> <img src={navIcon2} alt="" /> </a>
                        <a href=""> <img src={navIcon3} alt="" /> </a>
                    </div>
                    <p>©CopyRight 2024. Todos los derechos reservados</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer