// App.js ou onde você gerencia suas rotas
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarcoZero from '../Apoiadores/MarcoZero';
import Home from '../Home/App';
// Importe outras páginas conforme necessário

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/MarcoZero" element={<MarcoZero />} /> {/* Acesse MarcoZero na raiz */}
        <Route path="/home" element={<Home />} />
        {/* Defina outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default Rotas;