import React from 'react';
import './Footer.css'

import { AiFillInstagram, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='bjb__footer'>
      <div className="bjb__footer-links">
        <a href='https://github.com/brendan612' target="_blank"><AiOutlineGithub /></a>
        <a href='https://www.linkedin.com/in/brendan-bishop-729b54145/' target="_blank"><AiFillLinkedin /></a>
        <a href='https://www.instagram.com/brendanjbishop/' target="_blank"><AiFillInstagram /></a>
      </div>
    </div>
  );
};

export default Footer;
