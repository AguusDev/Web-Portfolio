import React, {useState, useEffect} from 'react'
import Logo from '../../assets/Logos/logo-1.png'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import CV from '../../../public/CV_06_24-test.pdf'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = ()=>{
      if(window.scrollY > 50){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return()=> window.removeEventListener('scroll', onScroll)
  },[])

  const onUpdateActiveLink = (value)=>{
    setActiveLink(value);
  }

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              alt='Logo Personal' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link 
                href="#home" 
                className={
                  activeLink === 'home'
                    ? 'active navbar-link' 
                    :'navbar-link' } 
                  onClick={ ()=> onUpdateActiveLink('home')}    
                >Inicio
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={
                  activeLink === 'skills'
                    ? 'active navbar-link' 
                    :'navbar-link' } 
                  onClick={ ()=> onUpdateActiveLink('skills')} 
                >Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link' 
                    :'navbar-link' } 
                  onClick={ ()=> onUpdateActiveLink('projects')} 
                >Proyectos
              </Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/federico-agustin-garcia-0040b224a/" target="_blank"><img src={navIcon1} alt='' /></a>
                <a href="https://github.com/AguusDev" target='_blank'><img src={navIcon2} alt='' /></a>
                <a download href={CV}><img src={navIcon3} alt='' /></a>
              </div>
              <a href="#contact">
                <button className='vvd'>
                  <span>Contáctame</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar