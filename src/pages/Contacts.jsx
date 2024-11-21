import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Import React Bootstrap components
import { Link } from 'react-router-dom'; // Import Link for routing (optional if you want to link to other pages)
import '../about.css'; // Assuming custom styles

function Contact() {
  return (
    <Container className="my-5">
      {/* Title Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#000' }}>Contact Information</h1>
          <p style={{ fontSize: '1.25rem', color: '#6c757d' }}>
            You can reach out to me using any of the following contact methods:
          </p>
        </Col>
      </Row>

      {/* Contact Information */}
      <Row className="my-4">
        <Col md={6} className="mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Contact Details</Card.Title>
              <Card.Text>
                <strong>Name:</strong> Kristine Carla Paraiso
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> <a href="mailto:carlaparaiso771@gmail.com">carlaparaiso771@gmail.com</a>
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> 09919357418
              </Card.Text>
              <Link to="/contact-form">
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
