import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../home.css';  // Assuming you have a Home.css file for custom styles

function Home() {
  return (
    <div className="home-container">
      <h1 className='text-center' style={{fontSize: '50px'}}>My Website</h1>
      <p className='text-center' style={{ fontSize: '20px' }}>
        Discover my personal info, interests, contact info, and passions
      </p>
      
      {/* Card Section */}
      <Row className="mt-5">
        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_vector-1721983446755-6336c22d4618?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" />
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Discover more about myself
              </Card.Text>
              {/* Link to About page */}
              <Link to="/about">
                <Button variant="danger">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D" />
            <Card.Body>
              <Card.Title>Contact Me</Card.Title>
              <Card.Text>
                Feel free to reach out if you want to collaborate or chat about tech.
              </Card.Text>
              {/* Link to Contact page */}
              <Link to="/contact">
                <Button variant="danger">Get in Touch</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_vector-1723267078163-427342bac595?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
              <Card.Title>My Hobbies</Card.Title>
              <Card.Text>
                Discover about my personal interests
              </Card.Text>
              {/* Link to Hobbies page */}
              <Link to="/hobbies">
                <Button variant="danger">Explore My Personal Interest</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
