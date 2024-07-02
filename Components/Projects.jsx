import React from 'react';// eslint-disable-line no-unused-vars
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: 'Netflix Clone',
    description: 'A clone of the popular streaming service using React and Firebase.',
    link: 'https://github.com/Namratajaswal43/netflix-clone'
  },
  {
    title: 'To-Do List Application',
    description: 'A simple to-do list app built with React.',
    link: 'https://github.com/Namratajaswal43/to-do-list-app'
  },
  {
    title: 'Parallax Front-End Website',
    description: 'A website featuring parallax scrolling effects using HTML, CSS, and JavaScript.',
    link: 'https://github.com/Namratajaswal43/parallax-website'
  },
  {
    title: 'Instagram Feature Project',
    description: 'A project implementing features similar to Instagram using JavaScript, HTML, and CSS.',
    link: 'https://github.com/Namratajaswal43/instagram-feature-project'
  },
  {
    title: 'Attendance Management System',
    description: 'A system for managing attendance records using Java and Servlets.',
    link: 'https://github.com/Namratajaswal43/attendance-management-system'
  },
  {
    title: 'Meme Generator',
    description: 'A simple meme generator built with HTML, CSS, and JavaScript.',
    link: 'https://github.com/Namratajaswal43/meme-generator'
  },
  {
    title: 'Art Collection Website',
    description: 'A website showcasing an art collection using HTML, CSS, and JavaScript.',
    link: 'https://github.com/Namratajaswal43/art-collection-website'
  },
  {
    title: 'News Magazine Website',
    description: 'A news magazine website built using React, Bootstrap, and CSS.',
    link: 'https://github.com/Namratajaswal43/news-magazine-website'
  }
];

const Projects = () => {
  return (
    <Container id="projects">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
