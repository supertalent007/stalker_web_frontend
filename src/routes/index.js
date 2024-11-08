import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import StandardPlan from '../pages/memberships/Standard';
import GoldPlan from '../pages/memberships/Gold';
import PlatinumPlan from '../pages/memberships/Platinum';
import Pricing from '../pages/Pricing';
import About from '../pages/About';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/membership" element={<Layout />}>
                    <Route path="standard" element={<StandardPlan />} />
                    <Route path="gold" element={<GoldPlan />} />
                    <Route path="platinum" element={<PlatinumPlan />} />
                </Route>
                <Route path="/pricing" element={<Layout />} >
                    <Route index element={<Pricing />} />
                </Route>
                <Route path="/about" element={<Layout />} >
                    <Route index element={<About />} />
                </Route>
                <Route path="/register" element={<Layout />}>
                    <Route index element={<Register />} />
                </Route>
                <Route path="/login" element={<Layout />}>
                    <Route index element={<Login />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;
