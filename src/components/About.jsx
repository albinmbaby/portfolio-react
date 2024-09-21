import React from 'react'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div>
        <section id="about" className="my-5">
      <Container>
        <Row>
          <Col md={6}>
            <img src="albin.jpg" alt="Your Name" className="img-fluid rounded-circle image" />
          </Col>
          <Col md={6}>
            <h2>About Me</h2>
            <p>Hi! I'm ALBIN M BABY, I am passionate about become a Full Stack Web Developer. I am eager to learn and developed skills need to excel in this dynamic and ever evolving field.</p>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default About