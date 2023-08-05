import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className='main-content'>
        <h2>Welcome to Personal Finance Management</h2>
        <p>This application allows you to manage your personal finance by categorizing your incomes and expenses based on your bank and credit card statements.</p>
        <Link to='/statements' className='cta'>Get started by importing your first statement</Link>
    </div>
);

export default Home;