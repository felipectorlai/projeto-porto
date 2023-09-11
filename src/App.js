import React from 'react';
import CSS from "./App.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';

function App() {
  return (
    <div>
      <header>

        {/* Aba de pesquisa */}
        <div className="search">
          <input type="text" placeholder="Pesquisar..." />
          <button>Login</button>
        </div>
      </header>

      {/* Botões "Sobre nós", "Ajuda" e "Blog" */}
      <div className="buttons">
        <button>Sobre nós</button>
        <button>Ajuda</button>
        <button>Blog</button>
      </div>

      <h2 className='subtittles'>Conheça Nossos Serviços</h2>

      <section className="services">
        <br></br>
        <div className="service">
          <h3>Seguro Moto</h3>
        </div>
        <div className="service">
          <h3>Seguro Carro</h3>
        </div>
        <div className="service">
          <h3>Serviço de Guincho</h3>
        </div>
        <div className="service">
          <h3>Fale Conosco</h3>
        </div>
      </section>

      <footer className='footer'>
        <p>Criado por: Live Tech</p>
      </footer>
    </div>
  );
}

export default App;
