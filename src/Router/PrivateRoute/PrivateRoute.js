import React, { useContext } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#c0efff'
                color='#e15b64'
            />
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;