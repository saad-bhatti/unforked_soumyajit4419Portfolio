import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import homeLogo from '../../assets/home-main.svg'

function Greeting() {
  /* List of roles interested in */
  const interestedRoles = [
    'Software Developer',
    'Freelancer',
    'MERN Stack Developer',
    'Open Source Contributor'
  ]

  return (
    <Row>
      <Col md={7} className='home-header'>
        {/* Greeting */}
        <h1 style={{ paddingBottom: 15 }} className='heading'>
          Hi There! <span className='wave' role='img' aria-labelledby='wave' children='👋🏻' />
        </h1>

        {/* Name */}
        <h1 className='heading-name'>
          I'M <strong className='main-name' children='SOUMYAJIT BEHERA' />
        </h1>

        {/* Roles */}
        <div style={{ padding: 50, textAlign: 'left' }}>
          <Typewriter
            options={{
              strings: interestedRoles,
              autoStart: true,
              loop: true,
              deleteSpeed: 50
            }}
          />
        </div>
      </Col>

      {/* Home Logo */}
      <Col md={5} style={{ paddingBottom: 20 }}>
        <img src={homeLogo} alt='home pic' className='img-fluid' style={{ maxHeight: '450px' }} />
      </Col>
    </Row>
  )
}

export default Greeting
