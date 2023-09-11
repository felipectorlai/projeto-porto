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

      <h2>Conheça Nossos Serviços</h2>

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

      <div>
        <h2>Dicas da semana</h2>
      </div>

    <footer>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><div className='Servico Moto'>Servico Moto</div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </footer>

      <footer className='footer'>
        <p>“A Porto Seguro projeta segurança pensando em você, e lidera o setor de seguros com suas inovações.”</p>
        <i>Live Tech</i>
      </footer>
    </div>
  );
}

export default App;
