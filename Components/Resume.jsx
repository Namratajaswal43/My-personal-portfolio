import React from 'react';// eslint-disable-line no-unused-vars
import { Container, Button } from 'react-bootstrap';

const Resume = () => {
  const resumePath = 'src/assets/resume.pdf'; // Replace with your actual path

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  const headingStyle = {
    color: '#343a40',
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const buttonStyle = {
    display: 'block',
    margin: '0 auto',
  };

  return (
    <Container id="resume" style={containerStyle}>
      <h2 style={headingStyle}>Resume</h2>
      <Button variant="primary" href={resumePath} target="_blank" style={buttonStyle}>
        Download Resume
      </Button>
    </Container>
  );
};

export default Resume;
