import React from "react";
import { Navbar } from "react-bootstrap";

function NavbarComp() {
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="#home">
        <div className="label px-3">
          <div
            style={{ borderBottom: "1px solid black", width: "50%" }}
            className="mx-auto mb-1"
          ></div>
          <h3 className="name font-weight-bolder mb-0">Murat Can Öncü</h3>
          <p className="text-center">Berlin | Istanbul</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="mr-auto"> */}
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        {/* </Nav> */}
        <div className="navButtons my-auto px-3" style={{ width: "50%" }}>
          <ul className="navList d-flex justify-content-between align-items-center font-weight-bolder">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutme">About Me</a>
            </li>
            <li>
              <a href="#myProjects">My Projects</a>
            </li>
            <li>
              <a href="#contactForm">Contact Me</a>
            </li>
          </ul>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComp;
