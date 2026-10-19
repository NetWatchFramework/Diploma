import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineFavoriteBorder } from "react-icons/md"; 
// установить https://www.npmjs.com/package/react-icons для иконок || база = https://react-icons.github.io/react-icons//

function Header({totalItems, onCartClick}){
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return(
    <header className="navbar">
      <div className="logo">
        {/* клик на лого возвращает на главную */}
        <NavLink to="/" onClick={closeMenu}>Achara<span>.Du</span></NavLink>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>Главная</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>О нас</NavLink>
        </li>
      </ul>

      <div className="header-actions">
        <button className="btn-cart-trigger" onClick={onCartClick}>
          <MdOutlineFavoriteBorder /> {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
        <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  )
}

export default Header;
