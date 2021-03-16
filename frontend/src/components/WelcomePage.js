// presents user with Login or Signup buttons.
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoggedInContext from '../LoggedInContext';

const WelcomePage = () => {
    const history = useHistory();
    const { currentUser } = useContext(LoggedInContext)
    console.log(currentUser)

    if (currentUser.isLoggedIn) history.push('/home');

    return (
        <div className="WelcomePage-Component">
            <div>
                <h1>Welcome To Disciple</h1>
                <Link to='/login'><button>Log In!</button></Link>
                <Link to='/signup'><button>Sign Up!</button></Link>
            </div>
        </div>
    )
}

export default WelcomePage;