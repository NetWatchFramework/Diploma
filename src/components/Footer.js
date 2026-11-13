import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer(){
  const navigate = useNavigate()

  const handleNavClick = (sectionId) =>{
    navigate('/')
    setTimeout(() =>{
      const element = document.getElementById(sectionId)
      if(element){
        element.scrollIntoView({behavior: 'smooth'})
      }else{
        window.scrollTo({top: 0, behavior: 'smooth'})
      }
    }, 100)
  }

  return(
    <footer id="contacts" className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Achara<span>.Du</span></h3>
          <p>Кулинарное наследие Абхазии в современном исполнении. Только локальные продукты и вековые традиции.</p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#hero" onClick={(e) =>{ e.preventDefault(); handleNavClick('hero')}}>Главная</a></li>
            <li><a href="#menu" onClick={(e) =>{ e.preventDefault(); handleNavClick('menu')}}>Меню</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>г. Сухум, ул. Аидгылара, 12</li>
            <li>+7 (940) 321-12-34</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Ресторан 'Ачара Ду'.</p>
      </div>
    </footer>
  )
}

export default Footer;
