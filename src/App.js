import React, { useState, useEffect  } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  const [activeCategory, setActiveCategory] = useState('Все')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() =>{
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    document.documentElement.style.scrollBehavior = 'smooth'
  },[]) //прокручиваем страницу в самый верх при первой загрузке компонента, временно отключая плавную анимацию скролла

  const addToCart = (dish) =>{ // добавляем блюдо в корзину или увеличивает его количество, если оно там уже есть
    setCart((prevCart) =>{
      const existingItem = prevCart.find((item) => item.id === dish.id)
      if(existingItem){
        return prevCart.map((item) =>
          item.id === dish.id ? { ...item, count: item.count + 1 } : item
        )
      }
      const numericPrice = parseInt(dish.price.replace(/\D/g, ''))
      return [...prevCart, {...dish, price: numericPrice, count: 1}]
    })
  }

  const updateCount = (id, delta) =>{ //работа с корзиной. изменяем кол-во товара в корзине
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? {...item, count: item.count + delta} : item))
        .filter((item) => item.count > 0)
    )
  }

  const totalItems = cart.reduce((sum, item) => sum + item.count, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return(
    <div className="app-container">
      <Header totalItems={totalItems} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        {/* конфиг путей RR */}
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
                onAddClick={addToCart} 
              />
            } 
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />

      {/* корзина */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Ваш заказ</h2>
          <button className="btn-close-cart" onClick={() => setIsCartOpen(false)}>&#215;</button>
        </div>
        <div className="cart-body">
          {cart.length === 0 ?(
            <div className="cart-empty">Корзина пуста. Добавь что-нибудь вкусное</div>
          ) : (
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.price * item.count} ₽</p>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => updateCount(item.id, -1)}>−</button>
                    <span>{item.count}</span>
                    <button onClick={() => updateCount(item.id, 1)}>+</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Итого:</span>
              <strong>{totalPrice} ₽</strong>
            </div>
            <button className="btn btn-primary btn-checkout" onClick={() => alert('Заказ оформлен!')}>
              Оформить заказ
            </button>
          </div>
        )}
      </div>
      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>}
    </div>
  )
}

export default App;

