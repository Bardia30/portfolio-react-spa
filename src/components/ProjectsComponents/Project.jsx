import React, { useState } from 'react';
import './Projects.scss';

function Project({ image, title, technologies }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className='card'>
      <div onMouseEnter={() => { setIsHovered(true); }} onMouseLeave={() => { setIsHovered(false); }} className='card__image-div'>
        <div className={isHovered ? 'card__buttons-visible' : 'card__buttons-invisible'}>
          <button className='btn card__cta-project'>View Projects</button>
          <button className='btn card__cta-code'>View Code</button>
        </div>
        <img
          
          className={isHovered ? "card__image card__image--hover" : 'card__image'}
          src={image}
          alt={title}
        />
      </div>
      {/* <img 
        onMouseEnter={() => { setIsHovered(true);}} 
        onMouseLeave={() => { setIsHovered(false); }} 
        className={isHovered ? "card__image card__image--hover" : 'card__image'} 
        src={image} 
        alt={title} 
      /> */}
      <h4 className='card__title'>{title}</h4>
      <section className='card__technologies'>
        {technologies.map(tech => (
          <p className='card__tech'>{tech}</p>
        ))}
      </section>
    </section>
  )
}

export default Project