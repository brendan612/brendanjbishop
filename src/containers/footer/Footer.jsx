import React from 'react';
import './Footer.css'

import { AiFillInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='bjb__footer'>
      <div className="bjb__footer-links">
        <a href='https://github.com/brendan612'><AiOutlineGithub /></a>
        <a href='https://www.linkedin.com/in/brendan-bishop-729b54145/'><AiFillLinkedin /></a>
        <a href='https://www.instagram.com/brendanjbishop/'><AiFillInstagram /></a>
      </div>
    </div>
  );
};

export default Footer;
