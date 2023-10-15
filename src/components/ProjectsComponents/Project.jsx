import React, { useEffect, useState } from 'react';
import './Projects.scss';

function Project({ image, title, technologies }) {
  const [isHovered, setIsHovered] = useState(false);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const [isDesktop, setIsDesktop] = useState(true);

  const handleResize = () => {
    const newViewportWidth = window.innerWidth;
    setViewportWidth(newViewportWidth);
    if (newViewportWidth < 1280) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }

  useEffect(() => {
    
    handleResize();

    
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [viewportWidth]);

  return (
    <section className='card'>
      <div onMouseEnter={() => { setIsHovered(true); }} onMouseLeave={() => { setIsHovered(false); }} className={isDesktop ? 'card__image-div' : 'card__image-div card__image-div--invisible'}>
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
      <img
          
          className={isDesktop ? 'card__image-invisible' : 'card__image-visible'}
          src={image}
          alt={title}
        />
      <h4 className='card__title'>{title}</h4>
      <section className='card__technologies'>
        {technologies.map((tech, i) => (
          <p key={i} className='card__tech'>{tech}</p>
        ))}
      </section>
      <section className={isDesktop ? 'card__buttons-tablet-invisible' : 'card__buttons-tablet-visible'}>
          <button className='btn card__cta-project'>View Projects</button>
          <button className='btn card__cta-code'>View Code</button>
      </section>
    </section>
  )
}

export default Project