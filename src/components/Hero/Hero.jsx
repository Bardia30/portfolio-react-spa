import React, { useState, useEffect } from 'react'
import circle from '../../assets/images/pattern-circle.svg'
import profilePic from '../../assets/images/hero-image.jpeg';
import rings from '../../assets/images/pattern-rings.svg';
import './Hero.scss';


function Hero() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }
  useEffect(()=> {
    handleResize();
  }, []);

  useEffect(()=>{
    window.onload = () => {
      handleResize();
    };
    window.addEventListener('resize', handleResize);
  }, [viewportWidth])

  return (
    <section className='hero'>
        {isMobile ?
          <div className='hero__upper-section'>
            <img className='hero__circle-mobile' src={circle} alt="circle-pattern" />
            <img className='hero__profile-mobile' src={profilePic} alt="profile" />
        </div> : null
        }
        <section className='hero__left-section'>
            <h1 className='hero__title'>Nice to <br className='hero__br'/> meet you! I'm <br className='hero__br'/> Bardia Dehbasti.</h1>
            <img className='hero__rings' src={rings} alt="rings" />
            <p className="hero__description">Software Engineer, specialized in React.JS, Next.JS, Node.JS, Express.JS and MongoDB, based in Toronto, ON.</p>
            <button className='hero__cta btn'>contact me</button>
        </section>
        {isMobile ? null: 
          <div className='hero__right-section'>
            <img className='hero__circle' src={circle} alt="circle-pattern" />
            <img className='hero__profile' src={profilePic} alt="profile" />
          </div>
        }
        
    </section>
  )
}

export default Hero