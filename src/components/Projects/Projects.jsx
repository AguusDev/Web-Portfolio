import ProjectCards from '../ProjectCards/ProjectCards';

import {Container, Row, Col} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import TrackVisibility from 'react-on-screen';


import colorSharp2 from "../../assets/img/color-sharp2.png"

import projImg1 from '../../assets/img/projects-img/project-1.png'
import projImg2 from '../../assets/img/projects-img/project-2.png'
import projImg3 from '../../assets/img/projects-img/project-3.png'
import projImg4 from '../../assets/img/projects-img/project-4.png'
import projImg5 from '../../assets/img/projects-img/project-5.png'
import projImg6 from '../../assets/img/projects-img/project-6.png'
import projImg7 from '../../assets/img/projects-img/project-7.png'
import projImg8 from '../../assets/img/projects-img/project-8.png'
import projImg9 from '../../assets/img/projects-img/project-9.png'
import projImg10 from '../../assets/img/projects-img/project-10.png'
import projImg11 from '../../assets/img/projects-img/project-10.png'
import projImg12 from '../../assets/img/projects-img/project-11.png'
import projImg13 from '../../assets/img/projects-img/project-12.png'



const Projects = () => {

  const projects = [
    {
      title: "Freelance Web",
      description: "Html - Css",
      btnDemo: "https://proyecto-desarrollo-web1.netlify.app/",
      btnCode:"https://github.com/AguusDev/webPageOne",
      imgUrl: projImg1,
    },
    {
      title: "Coffee Blog",
      description: "Html - Css",
      btnDemo: "https://proyecto-desarrollo-web3.netlify.app",
      btnCode:"https://github.com/AguusDev/Pagina_cafe",
      imgUrl: projImg2,
    },
    {
      title: "Festival de Musica",
      description: "Html - Sass - Gulp - JS",
      btnDemo: "https://proyecto-desarrollo-web5.netlify.app",
      btnCode:"https://github.com/AguusDev/Festival-Musica",
      imgUrl: projImg3,
    },
    {
      title: "Calculadora",
      description: "Html - Css - JS",
      btnDemo: "https://proyecto-desarrollo-web4.netlify.app",
      btnCode:"https://github.com/AguusDev/Calculadora",
      imgUrl: projImg4,
    },
    {
      title: "Peluqueria",
      description: "Html - Sass - Gulp - JS ",
      btnDemo: "https://proyecto-desarrollo-web6.netlify.app",
      btnCode:"https://github.com/AguusDev/Peluqueria",
      imgUrl: projImg5,
    },
    {
      title: "Encriptador(Alura Latam)",
      description: "Html - Css - JS",
      btnDemo: "https://aguusdev.github.io/AluraChallenge1/",
      btnCode:"https://github.com/AguusDev/AluraChallenge1",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [
    {
      title: "Pagina de Presupuestos",
      description: "Html - Bootstrap - JS",
      btnDemo: "https://aguusdev.github.io/Pag_Presupuestos/",
      btnCode:"https://github.com/AguusDev/Pag_Presupuestos",
      imgUrl: projImg7,
    },
    {
      title: "Practica Prof. (auto care)",
      description: "Html - Css - JS",
      btnDemo: "",
      btnCode:"",
      imgUrl: projImg8,
    },
    {
      title: "Landing Page Rotiseria",
      description: "Html - Css - JS",
      btnDemo: "https://aguusdev.github.io/PracticaProfesional_2/",
      btnCode:"https://github.com/AguusDev/PracticaProfesional_2",
      imgUrl: projImg9,
    },
    {
      title: "Menu QR",
      description: "Html - Css - JS",
      btnDemo: "https://aguusdev.github.io/menu-generico/",
      btnCode:"https://github.com/AguusDev/menu-generico",
      imgUrl: projImg10,
    },
    {
      title: "Menu QR React",
      description: "Html - Css - React - JSON",
      btnDemo: "https://aguusdev.github.io/menu-qr-react/",
      btnCode:"https://github.com/AguusDev/menu-qr-react",
      imgUrl: projImg11,
    },
    {
      title: "Gif Expert App",
      description: "Html - Css - React",
      btnDemo: "https://aguusdev.github.io/gif_expert_app/",
      btnCode:"https://github.com/AguusDev/gif_expert_app",
      imgUrl: projImg12,
    },
  ];

  const projects3 = [
    {
      title: "TA - TE - TI",
      description: "Html - Css - React",
      btnDemo: "https://aguusdev.github.io/TA-TE-TI/",
      btnCode:"https://github.com/AguusDev/TA-TE-TI",
      imgUrl: projImg13,
    }
  ];

  return(
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              { ({isVisible})=> 
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>Como estudiante apasionado por el desarrollo web front-end, he dedicado mi tiempo a trabajar en una variedad de proyectos que me han permitido aplicar y expandir mis conocimientos técnicos. A través de estos proyectos, he aprendido a enfrentar diversos desafíos de desarrollo. Aunque aún no tengo experiencia laboral formal, estos proyectos reflejan mi capacidad para aprender rápidamente y aplicar nuevas tecnologías, así como mi compromiso con la calidad del código y la experiencia del usuario. Cada proyecto ha sido una oportunidad para profundizar en diferentes aspectos del desarrollo web y mejorar mis habilidades.</p>

                </div>}
            </TrackVisibility>
            <Tab.Container id='projects-tabs' defaultActiveKey="first" >
              <Nav variant="pills" className='nav-pills mb5 justify-content-center aling-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>        
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map( (project, index)=>{
                        return(
                          <ProjectCards key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                  {
                      projects2.map( (project, index)=>{
                        return(
                          <ProjectCards key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                  {
                      projects3.map( (project, index)=>{
                        return(
                          <ProjectCards key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  )
}


export default Projects