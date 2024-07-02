import React from 'react';// eslint-disable-line no-unused-vars
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 Namrata Jaswal. All Rights Reserved.</p>
            <p>
              <a href="https://github.com/Namratajaswal43" target="_blank" rel="noopener noreferrer" className="text-white">
                GitHub
              </a> |
              <a href="https://www.linkedin.com/in/namratajaswal" target="_blank" rel="noopener noreferrer" className="text-white">
                LinkedIn
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
