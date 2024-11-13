import React, { useState } from 'react';

const LoginForm = ({ onLogin, showError }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            onLogin({ isLoggedIn: true, isAdmin: true }); 
        } else if (username && password) {
            onLogin({ isLoggedIn: true, isAdmin: false }); 
        } else {
            showError(true);
        }
    };

    return (
    <div className='contain'>
        <form onSubmit={handleSubmit}>
            <h2 className='login'>Login</h2>
            <div className='inter'>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                
            />

      </div>
      <div>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
            />
        </div>
        <div>
            <button type="submit">Login</button>
         </div>
        </form>
        </div>
    );
};

export default LoginForm;