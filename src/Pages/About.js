import React from 'react';

function About(){
  return(
    <section className="about-page">
      <div className="about-header">
        <h1>Наша <span>История(Ҳара ҳҭоурых)</span></h1>
        <p>Вековые кулинарные традиции, передающиеся из поколения в поколение.</p>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <h3>Аутентичность</h3>
          <p>Мы используем оригинальные специи, привезенные напрямую из Абхазии. Наша аджика готовится вручную по старинным рецептам.</p>
        </div>
        <div className="about-card">
          <h3>Гостеприимство</h3>
          <p>Для нас каждый гость - член семьи. Культ застолья и уважения к пришедшему лежит в основе нашей философии.</p>
        </div>
      </div>
    </section>
  )
}

export default About;
