import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ProjectCard from '../../components/Projects/ProjectCard.js'

describe('ProjectCard Component', () => {
  const props = {
    imgPath: '../assets/logo.png',
    title: 'Test Project',
    description: 'This is a test project description.',
    ghLink: 'https://github.com/test-repo',
    demoLink: 'https://test-demo.com'
  }

  test('renders the ProjectCard with image, title, and description', () => {
    render(<ProjectCard {...props} />)

    const projectImg = screen.getByTestId('project-img')
    const projectTitle = screen.getByTestId('project-title')
    const projectDescription = screen.getByTestId('project-description')

    expect(projectImg).toBeInTheDocument()
    expect(projectImg).toHaveAttribute('src', props.imgPath)
    expect(projectImg).toHaveAttribute('alt', 'card-img')

    expect(projectTitle).toBeInTheDocument()
    expect(projectTitle).toHaveTextContent(props.title)

    expect(projectDescription).toBeInTheDocument()
    expect(projectDescription).toHaveTextContent(props.description)
  })

  test('renders GitHub link when provided', () => {
    render(<ProjectCard {...props} />)

    const githubLink = screen.getByTestId('github-link')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', props.ghLink)
    expect(githubLink).toHaveAttribute('target', '_blank')
  })

  test('does not render GitHub link when not provided', () => {
    const modifiedProps = { ...props, ghLink: null }
    render(<ProjectCard {...modifiedProps} />)

    expect(screen.queryByTestId('github-link')).not.toBeInTheDocument()
  })

  test('renders Demo link when provided', () => {
    render(<ProjectCard {...props} />)

    const demoLink = screen.getByTestId('demo-link')
    expect(demoLink).toBeInTheDocument()
    expect(demoLink).toHaveAttribute('href', props.demoLink)
    expect(demoLink).toHaveAttribute('target', '_blank')
  })

  test('does not render Demo link when not provided', () => {
    const modifiedProps = { ...props, demoLink: null }
    render(<ProjectCard {...modifiedProps} />)

    expect(screen.queryByTestId('demo-link')).not.toBeInTheDocument()
  })
})
