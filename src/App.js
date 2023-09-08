import React from 'react';
import CSS from "./App.css"

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
          <p>Oferecemos seguros de moto para garantir sua segurança nas estradas.</p>
        </div>
        <div className="service">
          <h3>Seguro Carro</h3>
          <p>Proteja seu veículo com nossos serviços de seguro para carros.</p>
        </div>
        <div className="service">
          <h3>Serviço de Guincho</h3>
          <p>Estamos prontos para ajudar em situações de emergência com nosso serviço de guincho.</p>
        </div>
        <div className="service">
          <h3>Fale Conosco</h3>
          <p>Estamos prontos para ajudar em situações de emergência com nosso serviço de guincho.</p>
        </div>
      </section>

      <footer>
        <p>Criado por: Live Tech</p>
      </footer>
    </div>
  );
}

export default App;
