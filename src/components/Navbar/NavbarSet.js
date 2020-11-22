import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../image/logo3.png'

const NavbarSet = () => {
    return (
        <Navbar expand="lg" collapseOnSelect>
        <Container>
        <LinkContainer to='/'>
        <Navbar.Brand className='text-white'>
          <img src={logo} style={{width:'40px'}} alt=""/>
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <LinkContainer to='/'>
            <Nav.Link   className='mr-3 text-white'>Home</Nav.Link>
            </LinkContainer>
          <LinkContainer to='/projects'>
            <Nav.Link   className='mr-3 text-white'>Project</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about"> 
            <Nav.Link  className='mr-3 text-white'>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/blog'>
            <Nav.Link  className='mr-3 text-white'>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
            <Nav.Link  className='mr-3 text-white'>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/resume'>
            <Nav.Link  className='mr-3 text-white'>
            <Button> Resume </Button>
            
            </Nav.Link>
            </LinkContainer>
           
        </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavbarSet;