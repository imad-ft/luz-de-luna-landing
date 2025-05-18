import React, { useState } from 'react';


const Responsive = ()=>{
    const features = [
        {image : "img/Sans-titresrie.jpg", title: "Home Page"},
        {image : "img/Sanosnss-titre.jpg", title: "payment Page"},
        {image : "img/Sdbsjans-titre.jpg", title: "Product Detail Page"},
        {image : "img/Sans-titrnone.jpg", title: "Product page"},
    ]
    return(
        <>
            <section className="responsive">
                
                <h2>Responsive Pages</h2>
                <div className="responsive-container" >
                  
                  <div className="responsive-flex">
                    {features.map((feature, index) => (
                      <div key={index} className='resp-img'>
                        <img src={feature.image} alt={feature.title} />
                        <h3>{feature.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
                
            </section>
           
        
        </>

    )
}

export default Responsive;