import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import LoggedInContext from './LoggedInContext';

const ProtectedRoute = (props) => {
    const { currentUser } = useContext(LoggedInContext);

    return (currentUser.isLoggedIn ? props.children : <Redirect to={{ pathname: '/' }} />)
}

export default ProtectedRoute;