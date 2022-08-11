import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/home'>HOME</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/reviews'>REVIEWS</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/dashboard'>DASHBOARD</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blogs'>BLOGS</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/about'>ABOUT</NavLink>
        </nav>
    );
};

export default Header;