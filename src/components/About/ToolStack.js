import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  SiMacos,
  SiPostman,
  SiSlack,
  SiVercel,
  SiVisualstudiocode
} from 'react-icons/si'

function ToolStack() {
  /* Array of the tool stack */
  const tools = [
    {
      text: 'MacOS',
      icon: <SiMacos />
    },
    {
      text: 'VS Code',
      icon: <SiVisualstudiocode />
    },
    {
      text: 'Postman',
      icon: <SiPostman />
    },
    {
      text: 'Slack',
      icon: <SiSlack />
    },
    {
      text: 'Vercel',
      icon: <SiVercel />
    }
  ]

  return (
    <Row className="stack-row">
      {/* Title */}
      <h1 className="project-heading">
        <strong className="purple" children="Tools" /> I use
      </h1>

      {/* Tool stack */}
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tool.icon}
          <div className="stack-text purple" children={tool.text} />
        </Col>
      ))}
    </Row>
  )
}

export default ToolStack
