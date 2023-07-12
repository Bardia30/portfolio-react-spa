import React from 'react'
import circle from '../../assets/images/pattern-circle.svg'
import profilePic from '../../assets/images/image-profile-desktop.webp';
import rings from '../../assets/images/pattern-rings.svg';



function Hero() {
  return (
    <section className='hero'>
        <section className='hero__left-section'>
            <h1 className='hero__title'>Nice to meet you! I'm Adam Keyes.</h1>
            <img className='hero__rings' src={rings} alt="rings" />
            <p className="hero__description">Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.</p>
            <button className='hero__cta btn'>contact me</button>
        </section>
        <div className='hero__right-section'>
            <img className='hero__circle' src={circle} alt="circle-pattern" />
            <img className='hero__profile' src={profilePic} alt="profile" />
        </div>
    </section>
  )
}

export default Hero