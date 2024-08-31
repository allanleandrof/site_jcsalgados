import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <Container className="hero-container">
            <Row className="text-center">
              <Col>
                <h1 className="hero-title">Delicie-se com Nossos Salgados</h1>
                <p className="hero-subtitle">Sabor Incomparável, Feito com Amor</p>
                <div className="hero-buttons">
                  <Button variant="primary" size="lg" className="hero-button hero-button-primary">
                    <i class="fab fa-whatsapp"></i> Fazer pedido!
                  </Button>
                  <Button variant="secondary" size="lg" className="hero-button hero-button-secondary">
                    Veja Nossos Produtos <i class="fas fa-chevron-down"></i>
                  </Button>

                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src="https://via.placeholder.com/500x300" alt="Sobre Nós" />
            </Col>
            <Col md={6}>
              <h2>Sobre Nós</h2>
              <p>Somos apaixonados por salgados e dedicados a oferecer o melhor para nossos clientes. Com anos de experiência, nossa missão é trazer sabor e qualidade em cada produto.</p>
              <Button variant="outline-primary">Saiba Mais</Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Featured Products Section */}
      <div className="featured-products">
        <Container>
          <h2 className="text-center">Produtos Destaques</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300" />
                <Card.Body>
                  <Card.Title>Quibe</Card.Title>
                  <Card.Text>Quibe crocante e saboroso.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300" />
                <Card.Body>
                  <Card.Title>Coxinha</Card.Title>
                  <Card.Text>Coxinha recheada com frango desfiado.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300" />
                <Card.Body>
                  <Card.Title>Empada</Card.Title>
                  <Card.Text>Empada com recheio cremoso e saboroso.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <Container>
          <h2 className="text-center">O que nossos clientes dizem</h2>
          <Row>
            <Col md={4}>
              <div className="testimonial">
                <p>"Os melhores salgados da cidade! Sempre fresquinhos e saborosos."</p>
                <h5>Maria Silva</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial">
                <p>"A variedade é excelente e o atendimento é ótimo. Recomendo!"</p>
                <h5>João Santos</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial">
                <p>"Sempre que tenho uma festa, os salgados daqui são a escolha certa."</p>
                <h5>Ana Costa</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Call to Action Section */}
      <div className="call-to-action">
        <Container className="text-center">
          <h2>Pronto para experimentar?</h2>
          <p>Entre em contato conosco e faça seu pedido hoje mesmo!</p>
          <Button variant="warning" size="lg">Fazer Pedido</Button>
        </Container>
      </div>

      {/* Footer */}
      <footer className="footer">
        <Container className="text-center">
          <p>&copy; 2024 Salgadinhos da Maria. Todos os direitos reservados.</p>
          <div className="social-media">
            <a href="#facebook" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
            <a href="#instagram" aria-label="Instagram"><i className="fa fa-instagram"></i></a>
            <a href="#twitter" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
