import React from 'react';// eslint-disable-line no-unused-vars
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../assets/profile.jfif'; // Assuming your image is in the correct folder

const About = () => {
  return (
    <Container id="about">
      <Row>
        <Col md={4}>
          <Image src={profileImage} roundedCircle fluid />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
         
    
            Hello! 👋 I m Namrata ,pursuing a Bachelor of Technology in Computer Science Engineering with a cumulative GPA of 8.2 . ☕
            I have technical skills in Java, JavaScript, SQL, HTML, CSS, tailwind CSS ,Bootstrap ,React, Node.js, Git/GitHub, MySQL.

When I m not coding, you will find me exploring new horizons through my passion for travel 🌍. I believe that just like writing code, each journey tells a unique story. ✈️

Besides my love for technology and travel, I have a creative side. I enjoy sketching and drawing, transforming ideas into visual expressions. ✏️
 
I thrive on challenges and seek to blend innovation with the beauty of art and the precision of programming. Lets connect and share our experiences in the world of code, travel, or artistry! 🚀 #ComputerScience #JavaProgramming #TravelAdventures #ArtisticExpression
</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
