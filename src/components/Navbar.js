import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">Salgados Delícia</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Área Inicial</Nav.Link>
        <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link>
        <Nav.Link as={Link} to="/sobre-nos">Sobre Nós</Nav.Link>
        <Nav.Link as={Link} to="/avaliacoes">Avaliações</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarComponent;
