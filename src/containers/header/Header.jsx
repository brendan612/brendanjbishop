import React from 'react';
import './Header.css'

const Header = () => {
  const lightTextColor = {
    color: "#FF8A71"
  }
  return (
    <div className="bjb__header section__padding" id='home'>
      <div className="bjb__header-content">
        <h1>Hi, my name is</h1>
        <h2 className="gradient__text">Brendan Bishop</h2>
        <p>I am a full stack <span style={lightTextColor}>software engineer</span> based in Vancouver, WA.</p>
        <p>Currently I work remotely for <a className='fromMiddleHover' href='https://www.steinhafels.com' target="_blank">Steinhafels Furniture</a>.</p>
      </div>
    </div>

  )
};

export default Header;
