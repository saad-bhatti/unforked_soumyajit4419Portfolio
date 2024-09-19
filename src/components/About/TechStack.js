import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgCPlusPlus } from 'react-icons/cg'
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact
} from 'react-icons/di'
import { SiFirebase, SiNextdotjs, SiPostgresql, SiRedis, SiSolidity } from 'react-icons/si'
import { TbBrandGolang } from 'react-icons/tb'

function TechStack() {
  /* Array of the tech stack */
  const techs = [
    {
      text: 'C++',
      icon: <CgCPlusPlus />
    },
    {
      text: 'JavaScript',
      icon: <DiJavascript1 />
    },
    {
      text: 'Golang',
      icon: <TbBrandGolang />
    },
    {
      text: 'Node.js',
      icon: <DiNodejs />
    },
    {
      text: 'React',
      icon: <DiReact />
    },
    {
      text: 'Solidity',
      icon: <SiSolidity />
    },
    {
      text: 'MongoDB',
      icon: <DiMongodb />
    },
    {
      text: 'Next.js',
      icon: <SiNextdotjs />
    },
    {
      text: 'Git',
      icon: <DiGit />
    },
    {
      text: 'Firebase',
      icon: <SiFirebase />
    },
    {
      text: 'Redis',
      icon: <SiRedis />
    },
    {
      text: 'PostgreSQL',
      icon: <SiPostgresql />
    },
    {
      text: 'Python',
      icon: <DiPython />
    },
    {
      text: 'Java',
      icon: <DiJava />
    }
  ]

  return (
    <Row className='stack-row' style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {/* Title */}
      <h1 className='project-heading'>
        Professional <strong className='purple' children='Skillset' />
      </h1>

      {/* Tech stack */}
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className='tech-icons' key={index}>
          {tech.icon}
          <div className='stack-text purple' children={tech.text} />
        </Col>
      ))}
    </Row>
  )
}

export default TechStack
