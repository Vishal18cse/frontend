// src/components/Logout.js
import React, { useContext } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await api.logout();
            logout();
            console.log('Logged out successfully');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
