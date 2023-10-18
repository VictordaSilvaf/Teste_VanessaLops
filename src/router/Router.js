import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import NoAuth from '../views/NoAuth/NoAuth';

const AppRouter = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    
    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Home /> : <NoAuth />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
