import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-info" style={{ textAlign: 'start' }}>
      <Container>
        <div>
          <Row>
            <Col xs={12} md={4} className="mt-5 mb-5">
              <h4>Travel Media</h4>
              <p>
                Travel Media is a travel agency arrange a tour for the people
                all arround the world.Travel Media is a famous travel agency for
                nowdays
              </p>
            </Col>
            <Col xs={12} md={4} className="mt-5 mb-5">
              <h4>NavLink</h4>
              <Nav.Link href="#features" className="">
                Home
              </Nav.Link>
              <Nav.Link href="#features">Login</Nav.Link>
              <Nav.Link href="#features">Booking</Nav.Link>
              <Nav.Link href="#features">Contact</Nav.Link>
            </Col>
            <Col xs={12} md={4} className="mt-5 mb-5">
              <h4>Contact</h4>
              <div className="mt-3 mb-3">
                <i
                  class="fas fa-map-marker-alt "
                  style={{ marginRight: '25px' }}
                ></i>
                <span className="">Rajnagar,Moulvibazar</span>
              </div>
              <div className="mb-3">
                <i
                  class="fas fa-envelope-open me-3"
                  style={{ marginLeft: '' }}
                ></i>{' '}
                <span>info@travel.com</span>
              </div>
              <div>
                <i class="fas fa-phone-alt me-3" style={{ marginLeft: '' }}></i>{' '}
                <span>+8801765878798</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
