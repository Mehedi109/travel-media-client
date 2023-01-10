import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user.displayName);
  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        variant="dark"
        className="header-nav"
        fixed="top"
        style={{ backgroundColor: "#310459" }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "600" }}>
            Travel <span style={{ color: "red" }}>Media</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto menu">
              {/* <Nav.Link as={Link} to="/home" className="">
                Home
              </Nav.Link> */}
              {user.email ? (
                <div className="d-flex mobile-menu">
                  <Nav.Link
                    as={Link}
                    to="/home"
                    style={{ color: "white", fontWeight: "500" }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/myOrders"
                    style={{ color: "white", fontWeight: "500" }}
                  >
                    MyOrders
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/orders"
                    style={{ color: "white", fontWeight: "500" }}
                  >
                    Manage All Orders
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/addDestination"
                    style={{ color: "white", fontWeight: "500" }}
                  >
                    Add New Destination
                  </Nav.Link>
                  <Button
                    onClick={logOut}
                    style={{ color: "white", fontWeight: "500" }}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Nav.Link
                    as={Link}
                    to="/home"
                    className="initial-home"
                    style={{ color: "white", fontWeight: "500" }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/login"
                    className="link"
                    style={{ color: "white", fontWeight: "500" }}
                  >
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              <Nav.Link
                eventKey={2}
                href="#"
                style={{ color: "white", fontWeight: "500" }}
              >
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
