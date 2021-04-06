import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DayList = () => {
    const selectedDay = useSelector(store => store.currentUser.selectedDay);
    const dispatch = useDispatch();

    // update selectedDay in curentUser.selectedDay
    function updateSelectedDay(day) {
        dispatch({ type: 'SET_SELECTED_DAY', day: day })
    }

    return (
        <div className="DayList-Component">
            <div className={selectedDay == 0 ? "DayList-Day selected" : "DayList-Day"}
                onClick={() => updateSelectedDay(0)}>
                <p onClick={() => updateSelectedDay(0)}>Mon</p>
            </div>
            <div className={selectedDay == 1 ? "DayList-Day selected" : "DayList-Day"}
                onClick={() => updateSelectedDay(1)}>
                <p onClick={() => updateSelectedDay(1)}>Tue</p>
            </div>
            <div className={selectedDay == 2 ? "DayList-Day selected" : "DayList-Day"}
                onClick={() => updateSelectedDay(2)}>
                <p onClick={() => updateSelectedDay(2)}>Wed</p>
            </div>
            <div className={selectedDay == 3 ? "DayList-Day selected" : "DayList-Day"}
                onClick={() => updateSelectedDay(3)}>
                <p onClick={() => updateSelectedDay(3)}>Thr</p>
            </div>
            <div className={selectedDay == 4 ? "DayList-Day selected" : "DayList-Day"}
                onClick={() => updateSelectedDay(4)}>
                <p onClick={() => updateSelectedDay(4)}>Fri</p>
            </div>
            <div className={selectedDay == 5 ? "DayList-Day selected" : "DayList-Day"}
                onClick={() => updateSelectedDay(5)}>
                <p onClick={() => updateSelectedDay(5)}>Sat</p>
            </div>
            <div className={selectedDay == 6 ? "DayList-Day selected" : "DayList-Day"}
                onClick={() => updateSelectedDay(6)}>
                <p onClick={() => updateSelectedDay(6)}>Sun</p>
            </div>
        </div>
    )
}

export default DayList;