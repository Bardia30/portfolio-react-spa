import React from 'react';
import githubIcon from '../../assets/images/icon-github.svg';
import linkedinIcon from '../../assets/images/icon-linkedin.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import frontendIcon from '../../assets/images/icon-frontend-mentor.svg';
import Contact from '../Contact/Contact';
import '../Contact/Contact.scss';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer__outer-section'>
      <Contact />
      <footer className='footer'>
        <h3 className='footer__logo'>adamkeyes</h3>
        <div className='navbar__socials-section'>
          <a href="https://github.com/Bardia30" className='navbar__socials-linkn'><img className='navbar__icon' src={githubIcon} alt="github-logo" /></a>
          <a href="https://www.frontendmentor.io/profile/Bardia30" className='navbar__socials-linkn'><img className='navbar__icon' src={frontendIcon} alt="frontend-logo" /></a>
          <a href="https://www.linkedin.com/in/bardia-dehbasti/" className='navbar__socials-linkn'><img className='navbar__icon' src={linkedinIcon} alt="frontend-logo" /></a>
          <a href="https://twitter.com" className='navbar__socials-linkn'><img className='navbar__icon' src={twitterIcon} alt="twitter-logo" /></a>
        </div>
      </footer>
    </div>

  )
}

export default Footer