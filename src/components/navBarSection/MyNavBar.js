
import React from 'react';
import  { Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import './navBar.css'
const MyNavBar = () => {
  return (
    <Navbar className="navbar" collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Max Tran</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#bio">
            About
          </NavItem>
          <NavItem eventKey={2} href="./max_resume_19.pdf">
            Resume
          </NavItem>
          <NavItem eventKey={3} href="#work">
            Portfolio
          </NavItem>
          <NavItem eventKey={4} href="#blog">
            Blog
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://github.com/MaxTran96/">
            Github
          </NavItem>
          <NavItem eventKey={2} href="https://www.linkedin.com/in/loctran3005">
            LinkedIn
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavBar;