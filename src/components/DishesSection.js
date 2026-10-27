import React from 'react';

const DISHES_DATA = [ //картинки для катег. позже, по примеру id: 1
  { 
    id: 1, 
    name: 'Абыста (Мамалыга)', 
    category: 'Горячее', 
    price: '320 ₽', 
    desc: 'Традиционная густая каша из кукурузной муки, подается горячей со свежим сыром сулугуни.',
    image: 'https://avatars.mds.yandex.net/get-vertis-journal/4471904/02ac60ce-93c7-4161-bc09-e3f73597d995.jpg/1600x1600'
  },

  { id: 2, 
    name: 'Хачапури Лодочка', 
    category: 'Выпечка', 
    price: '450 ₽', 
    desc: 'Пышное дрожжевое тесто с начинкой из молодого сыра и яичным желтком по центру.',
    image: 'https://images.gastronom.ru/hB2ErHqC_Y8EPQb51KjH-SbprwdUSzdgXkHbkD6XRjw/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2RkZjFkZDkxLWU2MWUtNDc4NC04NjRlLWQ2ZjRlN2M5YmM5My5qcGc.webp'
  },

  { id: 3, 
    name: 'Акуд (Лобио)', 
    category: 'Закуски', 
    price: '290 ₽', 
    desc: 'Пюре из красной фасоли с добавлением ароматных кавказских специй, зелени и аджики.',
    image: 'https://avatars.mds.yandex.net/get-vertis-journal/4080458/406f6a18-cd6e-49ed-a604-4b6c535be56f.jpeg/1600x1600'
  },

  { id: 4, 
    name: 'Шашлык из ягненка', 
    category: 'Горячее', 
    price: '680 ₽', 
    desc: 'Сочное мясо, маринованное по традиционному абхазскому рецепту и приготовленное на углях.',
    image: 'https://dreamchef.ru/upload/iblock/c6c/vj0guj1xllwgv3ogkkpgf367b95x5lun/Baranina.jpg'
  },

  { id: 5, 
    name: 'Ачапа', 
    category: 'Закуски', 
    price: '310 ₽', 
    desc: 'Закуска из отварной капусты с грецким орехом, чесноком и гранатовыми зернами.',
    image: 'https://avatars.mds.yandex.net/get-vertis-journal/4469561/94d82873-62b4-4789-89c0-9d56fe91e060.jpg/1600x1600'
  }
]

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
                  <span>картинка {dish.name}</span>
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




