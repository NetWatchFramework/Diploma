import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero(){
  const navigate = useNavigate()

  // функция для плавного скролла к меню
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu')
    if(menuSection) {
      menuSection.scrollIntoView({behavior: 'smooth'})
    }else{
      // если юзер на другой странице, сначала переходим на главную
      navigate('/')
      // небольшой таймаут, чтобы страница успела смонтироваться перед скроллом
      setTimeout(() =>{
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return(
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Вкус долголетия в <span>Абхазской</span> кухне</h1>
        <p>
          Откройте для себя аутентичные рецепты: от обжигающей домашней аджики до нежной мамалыги с сулугуни. Настоящие гастрономические традиции.
        </p>
        <div className="cta-group">

          <button className="btn btn-primary" onClick={scrollToMenu}>
            Смотреть меню
          </button>
          
          {/* клик перенаправляет на страницу "О нас" через RR */}
          <button className="btn btn-secondary" onClick={() => navigate('/about')}>
            Наша история
          </button>
        </div>
      </div>
      
      <div className="hero-image-wrapper">
        {/* <div className="hero-circle"></div>  */}
        {/* <div className="dish-img-placeholder" style={{ height: '400px', width: '100%', borderRadius: '24px' }}>
          <span style={{ padding: '20px', textAlign: 'center' }}>?/поставить фото глав блюда по желанию </span>
        </div> */}
      </div>
    </section>
  )
}

export default Hero;
