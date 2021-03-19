import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {
    const currentUser = useSelector(store => store.currentUser);

    return (currentUser.isLoggedIn ? props.children : <Redirect to={{ pathname: '/' }} />)
}

export default ProtectedRoute;