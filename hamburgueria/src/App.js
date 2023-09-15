import Combo from "./img/combo.png"
Import Navlogo from "./img.logo2.png"
function App() {
  return (
    <div className="Conteiner">
      <div id="topo">
        <div id="navbar">
          <img src={Navlogo} id="imgnav"></img>
          <ul>
            <button>Delivery</button>
            <button>Cupons</button>
            <button>Menu</button>
            <button>Restaurantes</button>
            <button>Trabalhe Conosco</button>
          </ul>
        </div>
      </div>
      <img className="combo" src={Combo} alt="Combo1" title="Combo1" />
      <div className="produtos">
        <h1>Cards Produtos</h1>
      </div>
      <div className="sobrenos">
        <h1>Sobre nós</h1>
      </div>
      <div className="contatenos">
        <h1>Contate-nos</h1>
      </div>
    </div>
  );
}

export default App;
