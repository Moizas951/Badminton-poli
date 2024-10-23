import React from 'react';
import './styles.css';

function MarcoZeroContent() {
  return (
    <div className="marco-zero-content">
      <h1>Projeto Marco Zero</h1>
      <div className="marco-zero-layout">
        <img src="link-da-imagem-da-logo" alt="Logo Marco Zero" className="marco-zero-image" />
        <div className="marco-zero-text">
          <p>
            O Projeto Marco Zero foi criado com a intenção de originar um site do grupo de badminton da Escola Politécnica.
            Esse site conteria informações importantes, como treinos semanais, campeonatos, amistosos, e sobre a história de
            como a modalidade de badminton foi implementada na atlética da Poli-USP. Além disso, apresentaria blogs e redes
            sociais do badminton.
          </p>
          <p>
            A ideia originalmente foi criada pelo membro Hua Hua Cao, que pensou em criar um site para o grupo de badminton
            da Poli. Motivado pela ideia, ele convidou amigos do grupo para que pudessem ajudar na execução do projeto, a
            fim de divulgar a modalidade e melhorar na comunicação, possuindo outro meio de informação para eventos
            importantes.
          </p>
          <p>
            Outros membros também foram essenciais para que esse projeto fosse executado, e dentre eles: Pedro Koch, Eduardo
            Kenzo, Moisés Ávila e Gustavo Akira.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarcoZeroContent;