import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {register} from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import Hero1 from "./img/Hero1.png"
import Combo from "./img/combo.png"
import Hero2 from "./img/Hero2.png"
import Hero3 from "./img/Hero3.png"
import Navlogo from "./img/logo2.png"

register();

function App() {
const data = [
  {id: '1', image: Combo},
  {id: '2', image: Hero1},
  {id: '3', image: Hero2},
  {id: '4', image: Hero3}
]

  return (
    <div className="Conteiner">
      <div className="topo">
        <div className="navbar">
          <img src={Navlogo} className="imgnav" alt="logo" />
          <ul>
            <button>Delivery</button>
            <button class="navbotao2">Cupons</button>
            <button class="navbotao3">Menu</button>
            <button class="navbotao4">Restaurantes</button>
            <button class="navbotao5">Trabalhe Conosco</button>
          </ul>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        pagination={{clickable: true}}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt='slider' className='slide-item' />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <section Class="aboutus" id="aboutus">
        <div Class="sobrenos">
          <h1 Class="titulo-aboutus">Nossa História</h1>
          <p>Fundada em 2014, a Hamburgueria Sabor Real nasceu da paixão por criar hambúrgueres autênticos e saborosos que encantam o paladar de nossos clientes. Desde o início, nosso compromisso foi servir não apenas hambúrgueres, mas experiências memoráveis de sabor.</p>
          <h2 Class="titulo-aboutus">Nossa Missão</h2>
          <p>Criar hambúrgueres excepcionais que unam a tradição com a inovação. Usamos apenas os ingredientes mais frescos e selecionados, grelhamos nossos hambúrgueres com carinho e servimos com um toque de criatividade que cativa o coração e o estômago de todos que nos visitam.</p>
        </div>
      </section>

      <section className="contatenos">
        <div class="container_formulario">
          <div class="formulario_header">Fale Conosco</div>
          <form>
            <label for="nome"class="texto_formulario">Digite o Seu Nome:</label>
            <input type="text" id="nome"></input>
            <label for="mail"class="texto_formulario">Digite o Seu E-mail:</label>
            <input type="text" id="mail"></input>
            <label for="mensagem"class="texto_formulario">Digite a Sua Mensagem:<br></br></label>
            <textarea type="text" id='mensagem' spellCheck="false"></textarea>
          </form>
        </div>
      </section>

      <div className='footer'>
          <div className='redessociais'>
            <BsFacebook size={25} className='icone'/>
            <p className='p'>SaborRealOficial</p>
            <BsInstagram size={25} className='icone'/>
            <p className='p'>@SaborRealOficial</p>
            <BsLinkedin size={25} className='icone'/>
            <p className='p'>SaborRealOficial</p>
          </div>

          <div className='colunas'>
            <div className='coluna1'>
              <h3 className='nos'>Sabor Real</h3>
              <p>Arquitetura</p>
              <p>Localização</p>
            </div>
          </div>
      </div>

    </div>
  );
}

export default App;
