import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user.displayName);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Travel Media</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto menu">
              <Nav.Link as={Link} to="/home" className="ms-5">
                Home
              </Nav.Link>
              {user.email ? (
                <div className="d-flex mobile-menu">
                  <Nav.Link as={Link} to="/myOrders">
                    MyOrders
                  </Nav.Link>
                  <Nav.Link as={Link} to="/orders">
                    Manage All Orders
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addDestination">
                    Add New Destination
                  </Nav.Link>
                  <Button onClick={logOut}>Logout</Button>
                </div>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#">
                {user.displayName}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
