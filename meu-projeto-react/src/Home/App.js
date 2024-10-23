import './App.css';
import React from 'react';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src="@/Images/35086d7bfeb4452eb3d2e2378d923bf7.jpeg" alt="Logo of Badminton Poli-Usp"/>
          <span>Badminton Poli-Usp</span>
        </div>
        <nav>
          <ul className="nav-list">
            <li><a href="/home">Home</a></li>
            <li><a href="/eventos">Eventos</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/galeria">Galeria</a></li>
            <li><a href="/hall-da-fama">Hall da Fama</a></li>
            <li><a href="/sobre">Sobre</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="content">
          {/* Conteúdo principal */}
        </div>
      </main>

      <footer>
        <div className="footer-section">
          <div>
            <h4>Navegação</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Galeria</a></li>
              <li><a href="#">Hall da Fama</a></li>
              <li><a href="#">Sobre</a></li>
            </ul>
          </div>
          <div>
            <h4>Parceria</h4>
            <ul>
              <li><a href="#">Patrocínios</a></li>
              <li><a href="#">Contribuições</a></li>
              <li><a href="#">Lei de Incentivo</a></li>
            </ul>
          </div>
          <div>
            <h4>Links Úteis</h4>
            <ul>
              <li><a href="#">A.A.A.P.</a></li>
              <li><a href="#">CEPEUSP</a></li>
              <li><a href="#">FEBASP</a></li>
            </ul>
          </div>
          <div>
            <h4>Mídias Sociais</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4>Treino e Horário</h4>
            <p>Sexta - 17h às 21h</p>
            <p>Módulo 6 - CEPEUSP</p>
            <p>Contato: bad.poliusp@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
  <p>
    Copyright ©2024 Equipe de Badminton da Poli-Usp. Todos os direitos reservados. 
    Desenvolvido pelo <a href="/MarcoZero" className="custom-link">Projeto Marco Zero</a>
  </p>
</div>
      </footer>
    </div>
  );
}

export default Home;
