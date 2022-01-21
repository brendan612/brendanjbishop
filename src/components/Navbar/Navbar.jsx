import Link from 'next/link';
import React, { Component } from 'react';
import './Navbar.css';
import my_logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Container, Nav, Logo, NavUL, NavLI } from './Navbar.style';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    return (
        <Container>
            <Nav className='stroke'>
                <NavLink to="/">
                    <Logo src={my_logo}/>
                </NavLink>
                <NavUL>
                    <NavLI>
                        <NavLink to="/about">About</NavLink>
                    </NavLI>
                    <NavLI>
                        <NavLink to="/work">Work</NavLink>
                    </NavLI>
                    <NavLI>
                        <NavLink to="/contact">Contact</NavLink>
                    </NavLI>
                </NavUL>
                <div>
                    <a href="https://github.com/brendan612/" target="_blank"><GitHubIcon fontSize='large' className='nav-icons' /></a>
                    <a href="https://www.linkedin.com/in/brendan-bishop-729b54145/" target="_blank"><LinkedInIcon fontSize='large' className='nav-icons' /></a>
                </div>
            </Nav>
        </Container>
    )
}
export default Navbar;