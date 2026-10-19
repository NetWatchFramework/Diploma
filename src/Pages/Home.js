import React from 'react';
import Hero from '../components/Hero';
import DishesSection from '../components/DishesSection';

function Home({activeCategory, setActiveCategory, onAddClick}){
  return (
    <>
      <Hero />
      <DishesSection 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        onAddClick={onAddClick}
      />
    </>
  )
}

export default Home;
