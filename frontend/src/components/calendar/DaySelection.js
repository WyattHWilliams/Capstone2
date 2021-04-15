import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DaySelection = () => {
    const selectedDay = useSelector(store => store.calendar.selectedDay);
    const dispatch = useDispatch();

    // update selectedDay in calendar.selectedDay
    function updateSelectedDay(day) {
        dispatch({ type: 'SET_SELECTED_DAY', selectedDay: day })
    }

    return (
        <div className="DaySelection-Component">
            <div className={selectedDay == 0 ? "DaySelection-Day selected" : "DaySelection-Day"}
                onClick={() => updateSelectedDay(0)}>
                <p onClick={() => updateSelectedDay(0)}>Mon</p>
            </div>
            <div className={selectedDay == 1 ? "DaySelection-Day selected" : "DaySelection-Day"}
                onClick={() => updateSelectedDay(1)}>
                <p onClick={() => updateSelectedDay(1)}>Tue</p>
            </div>
            <div className={selectedDay == 2 ? "DaySelection-Day selected" : "DaySelection-Day"}
                onClick={() => updateSelectedDay(2)}>
                <p onClick={() => updateSelectedDay(2)}>Wed</p>
            </div>
            <div className={selectedDay == 3 ? "DaySelection-Day selected" : "DaySelection-Day"}
                onClick={() => updateSelectedDay(3)}>
                <p onClick={() => updateSelectedDay(3)}>Thr</p>
            </div>
            <div className={selectedDay == 4 ? "DaySelection-Day selected" : "DaySelection-Day"}
                onClick={() => updateSelectedDay(4)}>
                <p onClick={() => updateSelectedDay(4)}>Fri</p>
            </div>
            <div className={selectedDay == 5 ? "DaySelection-Day selected" : "DaySelection-Day"}
                onClick={() => updateSelectedDay(5)}>
                <p onClick={() => updateSelectedDay(5)}>Sat</p>
            </div>
            <div className={selectedDay == 6 ? "DaySelection-Day selected" : "DaySelection-Day"}
                onClick={() => updateSelectedDay(6)}>
                <p onClick={() => updateSelectedDay(6)}>Sun</p>
            </div>
        </div>
    )
}

export default DaySelection;