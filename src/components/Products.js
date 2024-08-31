import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Products = () => (
  <div id="produtos" className="container my-5">
    <h2>Produtos</h2>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Coxinha</Card.Title>
          <Card.Text>Deliciosa coxinha de frango.</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Quibe</Card.Title>
          <Card.Text>Quibe crocante e saboroso.</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Pastéis</Card.Title>
          <Card.Text>Pastéis variados e recheados.</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  </div>
);

export default Products;
