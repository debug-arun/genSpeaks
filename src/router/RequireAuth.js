import React, { useEffect, useState } from "react";
import { useAuth } from '../contexts/AuthContext';
import { Outlet } from "react-router-dom";
import Unauthorized from '../components/Unauthorized';


const RequireAuth = ({ allowedRoles }) => {
    const auth = null;
    return (
        (auth && auth.roles && auth.roles.find(role => allowedRoles && allowedRoles.includes(role)))
        ? <Outlet />
        : <Unauthorized />
    );
}

export default RequireAuth;