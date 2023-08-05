import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import Statements from '../containers/Statements';
import Dashboard from '../components/Dashboard';
import Transactions from '../components/Transactions';
import Categories from '../components/Categories';
import Settings from '../components/Settings';
import Layout from '../components/Layout';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/statements" element={<Statements />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;