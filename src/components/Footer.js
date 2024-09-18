import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import '../styles/Footer.css'

function Footer() {
  let date = new Date()
  let year = date.getFullYear()

  /* Array of Social Icons */
  const socialIcons = [
    {
      link: 'https://github.com/soumyajit4419',
      icon: <AiFillGithub />
    },
    {
      link: 'https://twitter.com/Soumyajit4419',
      icon: <AiOutlineTwitter />
    },
    {
      link: 'https://www.linkedin.com/in/soumyajit4419/',
      icon: <FaLinkedinIn />
    },
    {
      link: 'https://www.instagram.com/soumyajit4419',
      icon: <AiFillInstagram />
    }
  ]

  return (
    <Container fluid className='footer'>
      <Row>
        {/* Credit */}
        <Col md='4' className='footer-copywright'>
          <h3>Designed and Developed by Soumyajit Behera</h3>
        </Col>

        {/* Copyright */}
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year} SB</h3>
        </Col>

        {/* Social Icons */}
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            {socialIcons.map((socialIcon, index) => (
              <li className='social-icons' key={index}>
                <a
                  href={socialIcon.link}
                  style={{ color: 'white' }}
                  target='_blank'
                  rel='noopener noreferrer'
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

export default Footer
