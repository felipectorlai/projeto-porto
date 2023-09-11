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

      <h2 className='subtitulos'>Conheça Nossos Serviços</h2>

      <section className="services">
        <br></br>
        <div className="service">
          <a href='ServicoMoto'>Serviço Moto</a>
        </div>
        <div className="service">
        <a href='ServicoCarro'>Serviço Carro</a>
        </div>
        <div className="service">
        <a href='ServicoGuincho'>Serviço Guincho</a>
        </div>
        <div className="service">
        <a href='FaleConosco'>Fale Conosco</a>
        </div>
      </section>

      <h2 className='subtitulos'>Dicas da semana</h2>
      <div className='texto-tips'>
        <p>Adquira o chip internacional e não perca mais tempo com planos de internet fora do país! Venha fazer parte você também!</p>
      </div>



      <footer className='footer'>
        <p>“A Porto Seguro projeta segurança pensando em você, e lidera o setor de seguros com suas inovações.”</p>
        <i>Live Tech</i>
      </footer>
    </div>
  );
}

export default App;
