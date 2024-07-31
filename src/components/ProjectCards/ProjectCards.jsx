import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCards = ({title, description, imgUrl, btnDemo, btnCode}) => {

  return (
    <Col sm={6} md={4} >
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <div className="btn-container-card">
                  <a href={btnDemo} target='_blank' className="link_btn-card">
                    <button className="button_slide slide_diagonal">Demo</button>
                  </a>
                  <a href={btnCode} target='_blank' className="link_btn-card">
                    <button className="button_slide slide_diagonal">Code</button>
                  </a>
                </div>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCards