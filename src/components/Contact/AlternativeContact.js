import React from 'react'
import { Row } from 'react-bootstrap'
import socialIcons from '../../data/socialIcons.js'

function AlternativeContact() {
  return (
    <Row style={{ margin: '20px 0' }}>
      {/* Component Title */}
      <h1 className="heading" children="OR" />
      <p>
        Feel free to <span className="purple">connect </span>with me via:
      </p>

      {/* Social Media Icons */}
      <ul className="social-icons-container">
        {socialIcons.map((socialIcon, index) => (
          <li
            className="social-icons"
            key={index}
            style={{ margin: '5px 10px' }}
            data-testid={`footer-social-icon-${index}`}
          >
            <a
              className="purple"
              href={socialIcon.link}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`footer-social-link-${index}`}
            >
              {socialIcon.icon}
            </a>
          </li>
        ))}
      </ul>
    </Row>
  )
}

export default AlternativeContact
