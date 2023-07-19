import React, { useState, useEffect } from 'react'
import circle from '../../assets/images/pattern-circle.svg'
import profilePic from '../../assets/images/image-profile-desktop.webp';
import profilePicMobile from '../../assets/images/image-profile-mobile.webp';
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
            <img className='hero__profile-mobile' src={profilePicMobile} alt="profile" />
        </div> : null
        }
        <section className='hero__left-section'>
            <h1 className='hero__title'>Nice to <br className='hero__br'/> meet you! I'm <br className='hero__br'/> Adam Keyes.</h1>
            <img className='hero__rings' src={rings} alt="rings" />
            <p className="hero__description">Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.</p>
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