import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Welcome = () => {
    const profile = useSelector(store => store.profile);
    const history = useHistory();

    if (profile.isLoggedIn) history.push('/home');

    return (
        <div className="Welcome-Component">
            <div className="Welcome-ButtonsContainer">
                <h1>Welcome To Disciple</h1>
                <Link to='/login'><button>Log In!</button></Link>
                <Link to='/signup'><button>Sign Up!</button></Link>
            </div>
        </div>
    )
}

export default Welcome;