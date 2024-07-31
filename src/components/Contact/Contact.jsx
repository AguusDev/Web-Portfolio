import React, { useState, useRef } from "react"
import { Container, Row, Col } from "react-bootstrap"
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

import contactImage from "../../assets/img/contact-img.svg"

const Contact = () => {

    const formInitialDetails = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const refForm = useRef();
    
    const dataValidate = ()=>{
        const {firstName, lastName, email, phone} = formDetails
        let isValid = true;
        
        const validateFirstName = ()=>{
            const patt = new RegExp("^[a-zA-ZñÑáéíóúÁÉÍÓÚ\ ]{1,256}$");
            return (patt.test(firstName));
        }
        const validateLastName = ()=>{
	        const patt = new RegExp("^[a-zA-ZñÑáéíóúÁÉÍÓÚ\ ]{1,256}$");
	        return (patt.test(lastName));
        }
        const validateEmail = ()=>{
            const expr = new RegExp("^[a-zA-Z][a-zA-Z0-9._%+-]*") ;
            return(expr.test(email) )
                
        }
        const validatePhone = ()=>{
            const patt = new RegExp("^[0-9()-\]{8,25}$");
            return (patt.test(phone));
        }
        if (!validateFirstName()) {
            isValid = false;
        }
        if (!validateLastName()) {
            isValid = false;
        }
        if (!validateEmail()) {
            isValid = false;
        }
        if (!validatePhone()) {
            isValid = false;
        }
        return isValid;
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(dataValidate()){
            const serviceId = "service_weg9wvn";
            const templateId = "template_h30t797";
            const apiKey = "UnU_rgRja8ndvMP7_";

            emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
            .then( resolve => {   
                Swal.fire({
                    title: "Genial!",
                    text: "El formulario se envio correctamente!",
                    icon: "success"
                });
                refForm.current.reset()
            })
            .catch( error => console.error(error))
            
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error en el formulario, por favor revisalo!",
              });
        }
        
    }

  return (
    <section className="contact" id="contact">
        <Container>
            <Row className="aling-items-center">
                <Col md={6}>
                    <img src={contactImage} alt="Contact Us" />
                </Col>
                <Col md={6}>
                    <h2>Contactar</h2>
                    <form ref={refForm} onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1" >
                                <input 
                                    type="text" 
                                    required
                                    name="userName"
                                    placeholder="Nombre" 
                                    onChange={ e =>  formInitialDetails.firstName = e.target.value  } 
                                />
                            </Col>
                            <Col sm={6} className="px-1" >
                                <input 
                                    type="text" 
                                    required
                                    name="userLastName"
                                    placeholder="Apellido" 
                                    //onChange={ e => onFormUpdate('lastName', e.target.value)} 
                                    onChange={ e =>  formInitialDetails.lastName = e.target.value  } 
                                />
                            </Col>
                            <Col sm={6} className="px-1" >
                                <input 
                                    type="email" 
                                    required
                                    name="userEmail"
                                    placeholder="Email" 
                                    //onChange={ e => onFormUpdate('email', e.target.value)} 
                                    onChange={ e =>  formInitialDetails.email = e.target.value  } 
                                />
                            </Col>
                            <Col sm={6} className="px-1" >
                                <input 
                                    type="tel" 
                                    required
                                    name="userPhone"
                                    placeholder="Telefono" 
                                    //onChange={ e => onFormUpdate('phone', e.target.value)} 
                                    onChange={ e =>  formInitialDetails.phone = e.target.value  } 
                                />
                            </Col>
                            <Col>
                                <textarea 
                                    rows={6} 
                                    required
                                    name="userMessage"
                                    placeholder="Mensaje"
                                    minLength={10}
                                    //onChange={ e => onFormUpdate('message', e.target.value)}
                                    onChange={ e =>  formInitialDetails.message = e.target.value  } 
                                >
                                </textarea>
                                <button type="submit">
                                    <span>Enviar</span>
                                </button>
                            </Col>
                            { 
                                /*<Col>
                                    <p className={ "danger success"}>{message}</p>
                                </Col>*/
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact