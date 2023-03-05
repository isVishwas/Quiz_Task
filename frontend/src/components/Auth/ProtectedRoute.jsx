import React from 'react'
import { Redirect, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children }) => {

    let user = localStorage.getItem('userInfo');
    let location = useLocation();

    if (!user) {
        return <Redirect to="/" state={{ from: location }} replace />
    }
    return children

};

export default ProtectedRoute;