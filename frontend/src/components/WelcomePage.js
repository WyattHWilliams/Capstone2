// presents user with Login or Signup buttons.
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const WelcomePage = () => {
    const history = useHistory();
    const currentUser = useSelector(store => store.currentUser);
    const dispatch = useDispatch();
    console.log(currentUser)

    if (currentUser.isLoggedIn) history.push('/home');

    return (
        <div className="WelcomePage-Component">
            <div>
                <h1>Welcome To Disciple</h1>
                <Link to='/login'><button>Log In!</button></Link>
                <Link to='/signup'><button>Sign Up!</button></Link>
                {/* <DayChild type="meal_slot" /> */}
            </div>
        </div>
    )
}

export default WelcomePage;