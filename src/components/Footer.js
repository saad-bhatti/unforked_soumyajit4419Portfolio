import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/Footer.css'
import socialIcons from './socialIcons.js'

function Footer() {
  let date = new Date()
  let year = date.getFullYear()

  return (
    <Container fluid className="footer">
      <Row>
        {/* Credit */}
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Soumyajit Behera</h3>
        </Col>

        {/* Copyright */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>

        {/* Social Icons */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialIcons.map((socialIcon, index) => (
              <li className="social-icons" key={index}>
                <a
                  href={socialIcon.link}
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
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
