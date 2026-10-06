import React, { useState } from 'react';

function Header({ totalItems, onCartClick }){
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return(
    <header className="navbar">
      <div className="logo">
        Achara<span>.Du</span>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#hero" className="active" onClick={closeMenu}>Главная</a></li>
        <li><a href="#menu" onClick={closeMenu}>Меню</a></li>
        <li><a href="#contacts" onClick={closeMenu}>Контакты</a></li>
      </ul>

      <div className="header-actions">
        {/*кнопка корзины, пока что эмодзи*/}
        <button className="btn-cart-trigger" onClick={onCartClick} aria-label="Открыть корзину">
          🛍️
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>

        <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Открыть меню">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  )
}

export default Header
