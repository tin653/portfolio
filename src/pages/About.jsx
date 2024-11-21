import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../assets/kristine.jpg';
import '../about.css';

function About() {
  return (
    <div className="about-container">
      {/* Hero Section using Alert */}
      <Alert variant="secondary" className="text-center" style={{ padding: '3rem 0' }}>
        <h1>About Me</h1>
        <p>
          Welcome to my about page. I'm passionate about web development and love to create amazing user experiences.
        </p>
      </Alert>

      {/* Main content container */}
      <Container>
        <Row>
          {/* Column for personal background */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>My Background</Card.Title>
                <Card.Text>
                  I am a full-stack developer with a passion for coding and problem-solving. I specialize in JavaScript, with a focus on React for front-end development and Node.js for back-end. I enjoy building applications that provide value to users.
                </Card.Text>
                <Link to="/contact">
                  <Button variant="danger">Contact Me</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Column for displaying skills */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Skills</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>React</ListGroup.Item>
                  <ListGroup.Item>Node.js</ListGroup.Item>
                  <ListGroup.Item>JavaScript</ListGroup.Item>
                  <ListGroup.Item>HTML & CSS</ListGroup.Item>
                  <ListGroup.Item>SQL</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Profile Picture Section */}
        <Row className="mt-4">
          <Col className="text-center">
            <img
              src={profile}
              alt="Profile"
              className="rounded-circle"
              style={{ width: '150px', height: '150px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
