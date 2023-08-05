import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Layout.css'

const Layout = ({ children }) => (
    <div>
        <nav className='nav-bar'>
            <NavLink to='/' end className='nav-link'>Home</NavLink>
            <NavLink to='/dashboard' className='nav-link'>Dashboard</NavLink>
            <NavLink to='/transactions' className='nav-link'>Transactions</NavLink>
            <NavLink to='/categories' className='nav-link'>Categories</NavLink>
            <NavLink to='/settings' className='nav-link'>Settings</NavLink>
            <NavLink to='/Statements' className='nav-link'>Statements</NavLink>
        </nav>
        {children}
    </div>
);

export default Layout;