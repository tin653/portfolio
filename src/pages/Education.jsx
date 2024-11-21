import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import React Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure bootstrap styles are included
import '../educ.css';
function Education() {
  return (
    <Container className="my-5">
      {/* Title and Subtitle Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#000' }}>My Education Journey</h1>
          <p style={{ fontSize: '1.25rem', color: '#000' }}>
            Here's a look at my educational background and the institutions that have helped shape my skills and passion for technology.
          </p>
        </Col>
      </Row>

      {/* Education Cards Section */}
      <Row className="my-4">
        {/* Bula Central School */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JL5Gv9nVL3KTF-SxEeTBo6iRyVA6n2781w&s" />
            <Card.Body>
              <Card.Title>Milaor Central School</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2009 - 2015</Card.Subtitle>
              <Card.Text>
              In 2015, I received my diploma from Milaor Central School. While I was there, I pursued my early passions and became interested in technology.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Bula National High School */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqONrxO9c6jWrsXnSiNxqQWi7uQR1L9y_fOw&s" />
            <Card.Body>
              <Card.Title>Milaor National High School</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Junior High: 2015 - 2019 | Senior High: 2019 - 2021</Card.Subtitle>
              <Card.Text>
              My interest in technology and computer science grew during my high school years, laying the groundwork for my subsequent academic endeavors.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Naga College Foundation Inc. */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8W2ep0OFqIU9v31mPnY2_BAEoiFdCyNoDMw&s" />
            <Card.Body>
              <Card.Title>Naga College Foundation Inc.</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Pursuing Bachelor of Information Systems (BSIS)</Card.Subtitle>
              <Card.Text>
                I am currently pursuing my Bachelor's degree in Information Systems. I'm excited to learn more and improve my data management and technical skills.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
