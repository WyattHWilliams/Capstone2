import React, { Children } from 'react';
import { useSelector } from 'react-redux';
import Meal from './Meal';

const Day = ({ name }) => {

    return (
        <div className="Day-Component">
            <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <hr></hr>
            <Meal mealName="breakfast" dayName={name} />
            <Meal mealName="lunch" dayName={name} />
            <Meal mealName="dinner" dayName={name} />
        </div>
    )
}

export default Day;