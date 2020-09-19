import React from 'react';
import * as RBS from 'react-bootstrap';
import './Nav.css'

const Nav = () => {
    return (
      <div className="Nav">
        <RBS.Container fluid>
          <RBS.Navbar
            collapseOnSelect
            expand="lg"
            bg="info"
            variant="dark"
            
          >
            <RBS.Navbar.Brand href="#home">
              Welcome to Kaiden's Kolor's!
            </RBS.Navbar.Brand>
            <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <RBS.Navbar.Collapse id="responsive-navbar-nav">
              <RBS.Nav className="mr-auto">
                <RBS.Nav.Link href="#Gallery">Gallery</RBS.Nav.Link>
                <RBS.Nav.Link href="#pricing">Pricing</RBS.Nav.Link>
                <RBS.NavDropdown title="Product" id="collasible-nav-dropdown">
                  <RBS.NavDropdown.Item href="#action/3.1">
                    Crayons
                  </RBS.NavDropdown.Item>
                  <RBS.NavDropdown.Item href="#action/3.2">
                    Chalk
                  </RBS.NavDropdown.Item>
                  <RBS.NavDropdown.Divider />
                  <RBS.NavDropdown.Item href="#action/3.4">
                    Separated link brittanys facebook?
                  </RBS.NavDropdown.Item>
                </RBS.NavDropdown>
              </RBS.Nav>
              <RBS.Nav>
                <RBS.Nav.Link href="#deets">Order</RBS.Nav.Link>
                <RBS.Nav.Link eventKey={2} href="#memes">
                  Choices
                </RBS.Nav.Link>
              </RBS.Nav>
            </RBS.Navbar.Collapse>
          </RBS.Navbar>
        </RBS.Container>
      </div>
    );
}

export default Nav;