import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext/AuthContext';

export const useAuthContext = () => {
    return useContext(AuthContext);
};