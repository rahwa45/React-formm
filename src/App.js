import React, { useState } from 'react';
import LoginForm from './LoginForm';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import ErrorMessage from './ErrorMessage';
import './index.css'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleLogin = ({ isLoggedIn, isAdmin }) => {
        setIsLoggedIn(isLoggedIn);
        setIsAdmin(isAdmin);
        setShowError(false);
    };

    const handleError = (error) => {
        setShowError(error);
    };

    return (
        <div className='container'>
            {showError && <ErrorMessage />}
            {!isLoggedIn && <LoginForm onLogin={handleLogin} showError={handleError} />}
            {isLoggedIn && !isAdmin && <UserDashboard />}
            {isLoggedIn && isAdmin && <AdminDashboard />}
        </div>
    );
};

export default App;