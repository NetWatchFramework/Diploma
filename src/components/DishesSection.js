import React from 'react';
import DISHES_DATA from '../Dishes.json'
// -- фильтр. по кат. + json массив с объектами блюд

const CATEGORIES = ['Все', 'Горячее', 'Выпечка', 'Закуски'] // кат-и с фильтрацией по кат.

function DishesSection({activeCategory, setActiveCategory, onAddClick}){
  const filteredDishes = activeCategory === 'Все' 
    ? DISHES_DATA 
    : DISHES_DATA.filter(dish => dish.category === activeCategory)

  return(
    <section id="menu" className="dishes-section">
      <div className="section-header">
        <h2>Популярные блюда</h2>
        <div className="categories-tabs">
          {CATEGORIES.map(cat => (
            <button 
              key={cat} 
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="dishes-grid">
        {filteredDishes.map(dish => (
          <div key={dish.id} className="dish-card">
            <div>
              {/* блок картинки: если у блюда свойство image*/}
              <div className="dish-img-placeholder">
                {dish.image ? (
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="dish-card-image" 
                  />
                ) : (
                  <span> {dish.name}</span>
                )}
              </div>
              
              <div className="dish-info">
                <h3>{dish.name}</h3>
                <p className="dish-desc">{dish.desc}</p>
              </div>
            </div>
            
            <div className="dish-footer">
              <span className="dish-price">{dish.price}</span>
              <button className="btn-add" onClick={() => onAddClick(dish)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DishesSection;




