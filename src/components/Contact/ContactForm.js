import emailjs from 'emailjs-com'
import React, { useState } from 'react'
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap'
import { serviceId, templateId, userId } from '../../data/emailJSData'

function ContactForm() {
  /* State to track form data */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  /* States related to toast notification */
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastVariant, setToastVariant] = useState('success')

  /* Function to handle form input changes */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  /* Function to handle form submission */
  const handleSubmit = (e) => {
    // Prevent default form submission
    e.preventDefault()

    // Check for the presence of serviceId, templateId, and userId
    if (!serviceId || !templateId || !userId) {
      setToastVariant('danger')
      setToastMessage(
        'Failed to send message. Please configure the email service first.'
      )
      setShowToast(true)
      return
    }

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, formData, userId)
      // Show toast notification on success or failure
      .then((response) => {
        setToastVariant('success')
        setToastMessage('Message sent successfully!')
        setShowToast(true)
      })
      .catch((error) => {
        setToastVariant('danger')
        setToastMessage('Failed to send message. Please try again later.')
        setShowToast(true)
      })

    // Clear the form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      {/* Component Title */}
      <h1 className="heading">
        <strong className="purple" children="Contact" /> Form
      </h1>

      {/* Contact Form */}
      <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group className="form-section" controlId="formName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="form-section" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Subject */}
        <Form.Group className="form-section" controlId="formEmail">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="Enter the subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Message */}
        <Form.Group className="form-section" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Submit button */}
        <Button
          variant="primary"
          type="submit"
          style={{ minWidth: '8%' }}
          children="Send"
        />
      </Form>

      {/* Toast notification */}
      <ToastContainer position="middle-center" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
          bg={toastVariant}
          className={toastVariant === 'success' ? 'toast-custom-success' : ''}
        >
          <Toast.Header
            children={<strong className="me-auto" children="Notification" />}
          />
          <Toast.Body children={toastMessage} />
        </Toast>
      </ToastContainer>
    </>
  )
}

export default ContactForm
