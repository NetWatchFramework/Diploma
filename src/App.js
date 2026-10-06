// work in progess  
import React, { useState } from 'react';
import './App.css'
import Header from './components/Header';

function App(){
  
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const updateCount = (id, delta) =>{
    setCart((prevCart) =>
      prevCart
        .map((item) =>{
          if (item.id === id) {
            const newCount = item.count + delta
            return { ...item, count: newCount }
          }
          return item
        })
        .filter((item) => item.count > 0)
    )
  }

  const totalItems = cart.reduce((sum, item) => sum + item.count, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return(
    <div className="app-container">
      <Header 
        totalItems={totalItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Ваш заказ</h2>
          <button className="btn-close-cart" onClick={() => setIsCartOpen(false)}>&#215;</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">Корзина пуста</div>
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
            <button className="btn btn-primary btn-checkout" onClick={() => alert('тестовая иммитация = (Заказ успешно оформлен!)')}>
              Оформить заказ
            </button>
          </div>
        )}
      </div>

      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>}
    </div>
  )
}

export default App
