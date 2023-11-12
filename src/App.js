import {React, useState} from 'react';
import CSS from "./App.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logoImage from './img/porto.png';
import Login from './components/login';

function App() {
  // Função para redirecionar para outra página
  function redirecionarParaOutraPagina(url) {
    // Redireciona para a URL especificada
    window.location.href = url;
  }

  return (
    <div>
      <header>

        {/* Aba de pesquisa */}
        <div className="logo">
            <img src={logoImage} alt="Logo da sua empresa" />
        </div>
        
        <div className="search">
          <input type="text" placeholder="Pesquisar..." />
          <button onClick={() => redirecionarParaOutraPagina("login.jsx")}>Login</button>
        </div>
      </header>

      {/* Botões "Sobre nós", "Ajuda" e "Blog" */}
      <div className="buttons">
        <button onClick={() => redirecionarParaOutraPagina("sobre.jsx")}>Sobre nós</button>
        <button onClick={() => redirecionarParaOutraPagina("chat.jsx")}>Chat</button>
        <button onClick={() => redirecionarParaOutraPagina("localiza.jsx")}>Localização</button>
        <button onClick={() => redirecionarParaOutraPagina("contato.jsx")}>Contato</button>
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
      <div className='texto-tips'>
        <p>Malas prontas para se aventurar na Ásia? Antes vale a pena contratar o chip internacional para a Malásia e viver essa experiência 100% conectado!</p>
      </div>
      <div className='texto-tips'>
        <p>O seguro viagem para Bermudas é obrigatório. Descubra agora quais são as melhores opções, aproveite para contratar o seu.</p>
      </div>

      <footer className='footer'>
        <p>“A Porto Seguro projeta segurança pensando em você, e lidera o setor de seguros com suas inovações.”</p>
        <i>Live Tech</i>
      </footer>
    </div>
  );
}

export default App;
