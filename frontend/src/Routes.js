// routes for main page.
import React from 'react';
import { Switch, Route } from 'react-router';
import ProtectedRoute from './ProtectedRoute';
import WelcomePage from './components/WelcomePage';
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm';
import HomePage from './components/HomePage';

const Routes = () => {
    return (
        <Switch>
            <Route path='/signup'><SignupForm /></Route>
            <Route path='/login'><LoginForm /></Route>
            <ProtectedRoute path='/home'><HomePage /></ProtectedRoute>
            <Route path='/'><WelcomePage /></Route>
        </Switch>
    )
}

export default Routes;