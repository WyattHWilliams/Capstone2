import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const currentUser = useSelector(store => store.currentUser);
    console.log(currentUser);

    return (
        <div className="HomePage-Component">
            <h1>ARG, THIS BE THE HOMEPAGE</h1>
        </div>
    )
}

export default HomePage;