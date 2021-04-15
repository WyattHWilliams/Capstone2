import React from 'react';
import ProfileBar from '../profile/ProfileBar';
import CalendarContainer from '../calendar/CalendarContainer';
import { useDispatch, useSelector } from 'react-redux';

import { setTodoList, setDiet } from '../../actions/calendarActionCreators';
import './Main.css';


const Home = () => {
    const profile = useSelector(store => store.profile);
    const dispatch = useDispatch();

    dispatch(setTodoList(profile.username))


    return (
        <div className="Home-Component">
            <ProfileBar />
            <CalendarContainer />
        </div>
    )
}

export default Home;