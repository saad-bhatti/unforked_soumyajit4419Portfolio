import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Tilt from 'react-parallax-tilt'
import myImg from '../../assets/avatar.svg'
import socialIcons from '../socialIcons.js'

function Introduction() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Row>
        {/* Text section */}
        <Col md={8} className='home-about-description'>
          {/* Title */}
          <h1 style={{ fontSize: '2.6em' }}>
            LET ME <span className='purple' children='INTRODUCE' /> MYSELF
          </h1>

          {/* Body */}
          <p className='home-about-body'>
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            <br />
            <br />
            I am fluent in classics like
            <i children={<b className='purple' children='C++, Javascript and Go.' />} />
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className='purple' children='Web Technologies and Products' /> and also in areas
              related to
              <b className='purple' children='Blockchain.' />
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products with
            <b className='purple' children='Node.js' /> and
            <i>
              <b className='purple' children='Modern Javascript Library and Frameworks' />
            </i>
            &nbsp; like
            <i>
              <b className='purple'> React.js and Next.js</b>
            </i>
          </p>
        </Col>

        {/* Image section */}
        <Col md={4} className='myAvtar'>
          <Tilt>
            <img src={myImg} className='img-fluid' alt='avatar' />
          </Tilt>
        </Col>
      </Row>

      {/* Social links */}
      <Row>
        <Col md='12' className='home-about-social'>
          {/* Title */}
          <h1 children='FIND ME ON' />

          {/* Caption */}
          <p>
            Feel free to <span className='purple' children='connect' /> with me
          </p>

          {/* Social icons */}
          <ul className='home-about-social-links'>
            {socialIcons.map((socialIcon, index) => (
              <li className='social-icons' key={index}>
                <a
                  href={socialIcon.link}
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  {socialIcon.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
export default Introduction
