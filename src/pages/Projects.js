import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bitsOfCode from '../assets/Projects/blog.png'
import chatify from '../assets/Projects/chatify.png'
import editor from '../assets/Projects/codeEditor.png'
import emotion from '../assets/Projects/emotion.png'
import leaf from '../assets/Projects/leaf.png'
import suicide from '../assets/Projects/suicide.png'
import Particle from '../components/Particle.js'
import ProjectCard from '../components/Projects/ProjectCard.js'
import '../styles/Projects.css'

function Projects() {
  /* Array of project card objects. */
  const projects = [
    <ProjectCard
      imgPath={chatify}
      title="Chatify"
      description="Personal Chat Room or Workspace to share resources and hangout with friends build
      with react.js, Material-UI, and Firebase. Have features which allows user for realtime 
      messaging, image sharing as well as supports reactions on messages."
      ghLink="https://github.com/soumyajit4419/Chatify"
      demoLink="https://chatify-49.web.app/"
    />,
    <ProjectCard
      imgPath={bitsOfCode}
      title="Bits-0f-C0de"
      description="My personal blog page build with Next.js and Tailwind Css which takes the content
      from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs
      using markdown."
      ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
      demoLink="https://blogs.soumya-jit.tech/"
    />,
    <ProjectCard
      imgPath={editor}
      title="Editor.io"
      description="Online code and markdown editor build with react.js. Online Editor which supports
      html, css, and js code with instant view of website. Online markdown editor for building
      README file which supports GFM, Custom Html tags with toolbar and instant preview. Both the
      editor supports auto save of work using Local Storage"
      ghLink="https://github.com/soumyajit4419/Editor.io"
      demoLink="https://editor.soumya-jit.tech/"
    />,
    <ProjectCard
      imgPath={leaf}
      title="Plant AI"
      description="Used the plant disease dataset from Kaggle and trained a image classifer model
      using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant
      leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique
      plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
      ghLink="https://github.com/soumyajit4419/Plant_AI"
      demoLink="https://plant49-ai.herokuapp.com/"
    />,
    <ProjectCard
      imgPath={suicide}
      title="Ai For Social Good"
      description="Using 'Natural Launguage Processing' for the detection of suicide-related posts
      and user's suicide ideation in cyberspace, and thus helping in sucide prevention."
      ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
    />,
    <ProjectCard
      imgPath={emotion}
      title="Face Recognition and Emotion Detection"
      description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow
      backened. The classifier sucessfully predicted the various types of emotions of human. And the
      highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an
      image and then pass the face to the classifer to predict the emotion of a person."
      ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
    />
  ]

  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        {/* Title and subtitle */}
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* Projects */}
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {projects.map((project, index) => (
            <Col
              md={4}
              className="card-container"
              children={project}
              key={index}
            />
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects