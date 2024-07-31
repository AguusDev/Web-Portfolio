import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';  import Col from 'react-bootstrap/Col';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg'
import TrackVisibility from 'react-on-screen';

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Desarrollador Web", "Diseñador Web","QA/QC Tester" ,"Diseñador UX/UI" ];
    const [text, setText] = useState('')
    const [delta, setDelta] = useState( 300 - Math.random() * 100 ) 
    const period = 2000;

    useEffect( ()=>{
        let ticker = setInterval( ()=>{
            tick();
        }, delta)

        return ()=>{ clearInterval(ticker)}
    },[text])

    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1 );
        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

  return (
    <>
        <section className='banner' id='home'>
            <Container>
                <Row className>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            { ({isVisible})=> 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Bienvenido a mi Portfolio</span>
                                <h1> {` Hola soy Federico Garcia `} <br /><span className="wrap">{text}</span> </h1>
                                <p>Desarrollador Web FullStack apasionado por la tecnología,
                                con experiencia en proyectos personales.
                                Sólidos conocimientos en Tecnologías de JavaScript y web
                                Front-End.
                                Entusiasta y con una fuerte motivación para aprender y
                                aplicar nuevas practicas en entornos profesionales. Busco
                                una oportunidad para iniciar mi carrera como desarrollador
                                web y contribuir al éxito de un equipo dinámico.</p>
                                <button ><a className='btn-conect' href="#contact">Contáctame <ArrowRightCircle size={25}/> </a></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}


export default Banner