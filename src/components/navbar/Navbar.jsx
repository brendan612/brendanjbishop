import React, { Component, useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
    <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#about'>About</a></p>
        <p><a href='#exp'>Experience</a></p>
        <p><a href='#projects'>Projects</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <div className='bjb__navbar'>
            <div className='bjb__navbar-links'>
                <div className='bjb__navbar-links_logo'>
                    <img src={logo} alt='logo'/>
                </div>
                {/* <div className='bjb__navbar-links_container'>
                    <Menu />
                </div> */}
            </div>
            <div className='bjb__navbar-contact'>
                <a href='mailto:brendan612@gmail.com' target='_blank'>Contact</a>
            </div>
            {/* <div className='bjb__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
                }
                { toggleMenu && (
                    <div className='bjb__navbar-menu_container scale-up-center'>
                        <div className='bjb__navbar-menu_container-links'>
                            <Menu />
                            <div className='bjb__navbar-menu_container-links-contact'>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                )}
            </div> */}

        </div>
    )
}
export default Navbar;