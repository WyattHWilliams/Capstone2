import React from 'react';
import { Switch, Route } from 'react-router';
import ProtectedRoute from './ProtectedRoute';

import Signup from './components/main/Signup';
import Login from './components/main/Login';
import Home from './components/main/Home';
import Welcome from './components/main/Welcome';

function Routes() {
    return (
        <Switch>
            <Route path='/signup'><Signup /></Route>
            <Route path='/login'><Login /></Route>
            <ProtectedRoute path='/home'><Home /></ProtectedRoute>
            <Route path='/'><Welcome /></Route>
        </Switch>
    );
}

export default Routes;