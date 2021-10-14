import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  // const { user, logOut } = useFirebase();
  const { user, logOut } = useAuth();

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-md-3 p-xs-2"
    >
      <Container fluid className="px-md-5">
        <Navbar.Brand href="#home">Health Care</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ps-md-5">
            <Nav.Link as={HashLink} to="/home#">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#about">
              About
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#expert">
              Experts
            </Nav.Link>
          </Nav>
          <Nav>
            <hr className="bg-light" />
            <h5 className="text-light nav-link m-0">{user?.displayName}</h5>
            {!user ? (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} onClick={logOut} to="/login">
                Log out
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
