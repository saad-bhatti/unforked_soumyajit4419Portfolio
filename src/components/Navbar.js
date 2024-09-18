import React, { useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai'
import { CgFileDocument, CgGitFork } from 'react-icons/cg'
import { ImBlog } from 'react-icons/im'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/NavBar.css'

function NavBar() {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)

  /* Scroll handler to update the navbar when user scrolls */
  function scrollHandler() {
    updateNavbar(window.scrollY >= 20)
  }
  window.addEventListener('scroll', scrollHandler)

  /* Navbar items */
  const items = [
    {
      isExternalLink: false,
      text: 'Home',
      to: '/',
      icon: <AiOutlineHome className='navbar-icon' />
    },
    {
      isExternalLink: false,
      text: 'About',
      to: '/about',
      icon: <AiOutlineUser className='navbar-icon' />
    },
    {
      isExternalLink: false,
      text: 'Projects',
      to: '/project',
      icon: <AiOutlineFundProjectionScreen className='navbar-icon' />
    },
    {
      isExternalLink: false,
      text: 'Resume',
      to: '/resume',
      icon: <CgFileDocument className='navbar-icon' />
    },
    {
      isExternalLink: true,
      text: 'Blogs',
      to: 'https://soumyajitblogs.vercel.app/',
      icon: <ImBlog className='navbar-icon' />,
      external: true
    }
  ]

  return (
    <Navbar expanded={expand} fixed='top' expand='md' className={navColour ? 'sticky' : 'navbar'}>
      <Container>
        {/* Home icon */}
        <Navbar.Brand
          as={Link}
          to='/'
          className='d-flex'
          children={<img src={logo} className='img-fluid logo' alt='brand' />}
        />

        {/* Toggle for mobile view */}
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            updateExpanded(!expand)
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto' defaultActiveKey='#home'>
            {/* Navbar items */}
            {items.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={item.isExternalLink ? 'a' : Link}
                  to={item.to}
                  href={item.to}
                  target={item.isExternalLink ? '_blank' : ''}
                  onClick={() => updateExpanded(false)}
                >
                  {item.icon} {item.text}
                </Nav.Link>
              </Nav.Item>
            ))}

            {/* Fork button */}
            <Nav.Item className='fork-btn'>
              <Button
                href='https://github.com/soumyajit4419/Portfolio'
                target='_blank'
                className='fork-btn-inner'
              >
                <CgGitFork style={{ fontSize: '1.2em' }} />{' '}
                <AiFillStar style={{ fontSize: '1.1em' }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
