import React from 'react';
import './Projects.scss';

function Project({ image, title, technologies }) {
  return (
    <section className='card'>
        <img className='card__image' src={image} alt={title} />
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