import React from 'react';
import './styles.css';
import MarcoZeroContent from './MarcoZeroContent';

function MarcoZero() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src="@/Images/35086d7bfeb4452eb3d2e2378d923bf7.jpeg" alt="Logo of Badminton Poli-Usp" />
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
          <MarcoZeroContent />
        </div>
      </main>
    </div>
  );
}

export default MarcoZero;