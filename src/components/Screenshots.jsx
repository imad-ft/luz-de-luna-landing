import React, { useState } from 'react';

export default function Screenshots() {

  const [cardIdx , setCardIdx] = useState(0);
  
  const features = [
    {image : "img/Khadift.png", title: "Dashboard"},
    {image : "img/bibitotre.jpg", title: "Product List"},
    {image : "img/Sans-titrote.jpg", title: "Product Detail"},
    {image : "img/cartPage.jpg", title: "Cart Page"},
    {image : "img/payes-titre.png", title: "Payment Page"},
  ]

  const previdx = () => setCardIdx((cardIdx - 1 + features.length) % features.length )
  const nextidx = () => setCardIdx((cardIdx + 1) % features.length)
  
  const cardWidth = 400
  const gap = 24
  const shift = cardWidth + gap 


  return (
    <section className="screenshots">
      <button onClick={previdx} className='navigate prev'></button>
      <h2>In-Store Experience</h2>
      <div className="screenshots-container" style={{transform: `translateX(-${cardIdx * 100}%)`}}>
        
        <div className="screenshot-flex">
          {features.map((feature, index) => (
            <div key={index} className={`screenshot ${index === cardIdx ? 'active' : ''}`}>
              <img src={feature.image} alt={feature.title} />
              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextidx} className='navigate next'></button>
    </section>
  );
}
 