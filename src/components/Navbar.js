import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Estilos customizados

const NavbarComponent = () => (
  <Navbar bg="light" expand="lg" className="custom-navbar">
    <Navbar.Brand as={Link} to="/">
      <img
        src="/images/JC.png" // Caminho relativo ao diretório public
        alt="JC salgados"
        className="navbar-logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link as={Link} to="/" className="nav-item-custom">Área Inicial</Nav.Link>
        <Nav.Link as={Link} to="/produtos" className="nav-item-custom">Produtos</Nav.Link>
        <Nav.Link as={Link} to="/sobre-nos" className="nav-item-custom">Sobre Nós</Nav.Link>
        <Nav.Link as={Link} to="/avaliacoes" className="nav-item-custom">Avaliações</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarComponent;
