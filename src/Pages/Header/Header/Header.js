import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useFirebase from "./../../../Hooks/useFirebase";
import './Header.css'

const Header = () => {
  const { user, logOut, singInwithGoogle } = useFirebase();
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container className="header-style">
          <Navbar.Brand as={Link} to="/home" className="">
            <img
              className="w-sm-50 w-lg-50"
              src="https://i.ibb.co/PwJMvWD/Add-a-subheading-removebg-preview-4.webp"
              alt=""
            />
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className=" text-danger" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className=" text-danger" as={Link} to="/gallery">
              Explore
            </Nav.Link>

            {user?.email ? (
              <Nav.Link className=" text-danger" as={Link} to="/dashbord">
                Dashbord
              </Nav.Link>
            ) : (
              ""
            )}
            {user?.email ? (
              <Button  className=" logOut text-danger"  onClick={logOut} variant="link">
                Logout
              </Button>
            ) : (
              <Nav.Link  className="logOut text-danger"  as={Link} to="/login">
                <Button onClick={singInwithGoogle} variant="link">
                  Login
                </Button>
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
