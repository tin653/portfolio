import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap'; // Import React Bootstrap components
import '../about.css'; // Assuming your custom styles are in this file

function Hobbies() {
  return (
    <Container className="my-5">
      {/* Title Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#000' }}>My Hobbies</h1>
          <p style={{ fontSize: '1.25rem', color: '#000' }}>
            Here are some of my favorite activities that I enjoy during my free time:
          </p>
        </Col>
      </Row>

      {/* Hobbies Cards Section */}
      <Row className="my-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src='https://plus.unsplash.com/premium_vector-1726763503293-1a5de49577a1?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <Card.Body>
              <Card.Title>Playing Online Games</Card.Title>
              <Card.Text>
                Gaming is a fun way to unwind and challenge myself. I enjoy exploring different virtual worlds, solving puzzles, and collaborating with friends in multiplayer games. It’s a great way to connect with people globally and improve strategic thinking.
              </Card.Text>
              <Badge bg="info">Hobby</Badge>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
          <Card.Img variant="top" src='https://plus.unsplash.com/premium_vector-1723910805280-481334a6ecb4?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <Card.Body>
              <Card.Title>Biking</Card.Title>
              <Card.Text>
                Biking is one of my favorite outdoor activities. I love the freedom of exploring new trails and enjoying the beauty of nature while staying fit. Whether it's a leisurely ride around the park or a challenging mountain trail, biking helps me stay active and clear my mind.
              </Card.Text>
              <Badge bg="success">Excercise</Badge>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
          <Card.Img variant="top" src='https://plus.unsplash.com/premium_vector-1683140917670-15f8eb38f179?q=80&w=1298&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <Card.Body>
              <Card.Title>Driving</Card.Title>
              <Card.Text>
              Driving is fun and soothing to me. It allows me the flexibility to go to different locations and enjoy the breathtaking views.
              </Card.Text>
              <Badge bg="warning">Leisure</Badge>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Hobbies;
