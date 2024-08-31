import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import './App.css'; // Para estilos personalizados, se necessário

const App = () => (
  <Router>
    <NavbarComponent />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/sobre-nos" element={<AboutUs />} />
      <Route path="/avaliacoes" element={<Reviews />} />
    </Routes>
  </Router>
);

export default App;
