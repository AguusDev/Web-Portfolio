import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import TrackVisibility from "react-on-screen";

import html from '../../assets/skills-img/html.svg'
import css from '../../assets/skills-img/css.svg'
import git from '../../assets/skills-img/git.svg'
import bootstrap from '../../assets/skills-img/bootstrap.svg'
import sass from '../../assets/skills-img/sass.svg'
import javascript from '../../assets/skills-img/javascript.svg'
import jquery from '../../assets/skills-img/jquery.svg'
import react from '../../assets/skills-img/react.svg'
import postman from '../../assets/skills-img/postman.svg'
import node from '../../assets/skills-img/node.svg'
import postgreSQL from '../../assets/skills-img/postgreSQL.svg'

import colorSharp from "../../assets/img/color-sharp.png"
import colorSharp2 from "../../assets/img/color-sharp2.png"

import {Container, Row, Col} from 'react-bootstrap'

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skills" id="skills">
          <img className="background-image-right" src={colorSharp2} />
            <Container>
                <Row>
                    <Col>
                      <div className="skill-bx">
                        <TrackVisibility>
                          { ({isVisible})=> 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                              <h2>Skills</h2>
                              <p>A lo largo de mi carrera como programador web front-end, he desarrollado una serie de habilidades técnicas que me permiten crear sitios web y aplicaciones web de alta calidad. Estas habilidades abarcan desde el dominio de lenguajes de programación y frameworks hasta el uso de herramientas y metodologías que optimizan el proceso de desarrollo.</p>
                            </div>}
                        </TrackVisibility>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider" >
                          <div className="item">
                            <img src={html} alt="Image" />
                            <h5>HTML5</h5>
                          </div>
                          <div className="item">
                            <img src={css} alt="Image" />
                            <h5>CSS3</h5>
                          </div>      
                          <div className="item">
                            <img src={git} alt="Image" />
                            <h5>GIT</h5>
                          </div>
                          <div className="item">
                            <img src={bootstrap} alt="Image" />
                            <h5>Bootstrap</h5>
                          </div>      
                          <div className="item">
                            <img src={sass} alt="Image" />
                            <h5>Sass</h5>
                          </div>      
                          <div className="item">
                            <img src={javascript} alt="Image" />
                            <h5>JavaScript</h5>
                          </div>      
                          <div className="item">
                            <img src={jquery} alt="Image" />
                            <h5>JQuery</h5>
                          </div>      
                          <div className="item">
                            <img src={react} alt="Image" />
                            <h5>ReactJs</h5>
                          </div>      
                          <div className="item">
                            <img src={postman} alt="Image" />
                            <h5>Postman</h5>
                          </div>      
                          <div className="item">
                            <img src={node} alt="Image" />
                            <h5>NodeJs</h5>
                          </div>      
                          <div className="item">
                            <img src={postgreSQL} alt="Image" />
                            <h5>PostgreSQL</h5>
                          </div>      
                        </Carousel>
                      </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}

export default Skills