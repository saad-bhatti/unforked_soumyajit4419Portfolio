import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { BsGithub } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Project image */}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />

      {/* Project details */}
      <Card.Body>
        {/* Project title */}
        <Card.Title children={props.title} />

        {/* Project description */}
        <Card.Text
          style={{ textAlign: 'justify' }}
          children={props.description}
        />

        {/* GitHub button */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}

        {/* Demo button */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: '10px' }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}
export default ProjectCards
