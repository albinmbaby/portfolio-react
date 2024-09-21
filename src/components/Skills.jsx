import React from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

const Skills = () => {
    const skills = [
        { name: 'JavaScript', proficiency: 75 },
        { name: 'React', proficiency: 70 },
        { name: 'Node.js', proficiency: 65 },
        { name: 'CSS', proficiency: 90 },
      ]
  return (
    <div>
        <section id="skills" className="my-5">
      <Container>
        <h2 className="text-center">Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={6} key={index} className="mb-3">
              <h5>{skill.name}</h5>
              <ProgressBar now={skill.proficiency} label={`${skill.proficiency}%`} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Skills