import React from 'react';
import Day from './Day';
import './css/WeekCalendar.css';

const WeekCalendar = () => {
    return (
        <div className="WeekCalendar-Component">
            <Day name='monday' />
            <Day name='tuesday' />
            <Day name='wednesday' />
            <Day name='thursday' />
            <Day name='friday' />
            <Day name='saturday' />
            <Day name='sunday' />

            {/* <div className="DayColumn-Component">
                <div className="MealList">

                </div>
                <div className="WorkoutList">

                </div>
            </div> */}
        </div>
    )
}

export default WeekCalendar;