import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ImPointRight } from 'react-icons/im'
import laptopImg from '../../assets/about.png'

function AboutMe() {
  /* Activities list */
  const activities = ['Playing Games', 'Writing Tech Blogs', 'Travelling']

  return (
    <Row style={{ justifyContent: 'center', padding: '10px' }}>
      <Col
        md={7}
        style={{
          justifyContent: 'center',
          paddingTop: '30px',
          paddingBottom: '50px'
        }}
      >
        {/* Title */}
        <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
          Know Who <strong className='purple' children='I AM' />
        </h1>

        <Card className='quote-card-view'>
          <Card.Body>
            {/* Body */}
            <blockquote className='blockquote mb-0'>
              <p style={{ textAlign: 'justify' }}>
                Hi Everyone, I am <span className='purple'>Soumyajit Behera </span>
                from <span className='purple'> Bhubaneswar, India.</span>
                <br />
                I am currently employed as a software developer at Juspay.
                <br />
                I have completed Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.
                <br />
                <br />
                Apart from coding, some other activities that I love to do!
              </p>

              {/* Activities list */}
              <ul>
                {activities.map((activity, i) => (
                  <li key={i} className='about-activity'>
                    <ImPointRight /> {activity}
                  </li>
                ))}
              </ul>

              {/* Quote */}
              <p style={{ color: 'rgb(155 126 172)' }}>
                "Strive to build things that make a difference!"{' '}
              </p>
              <footer className='blockquote-footer'>Soumyajit</footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Col>

      {/* About Me Image */}
      <Col md={5} style={{ paddingTop: '120px', paddingBottom: '50px' }} className='about-img'>
        <img src={laptopImg} alt='about' className='img-fluid' />
      </Col>
    </Row>
  )
}

export default AboutMe
