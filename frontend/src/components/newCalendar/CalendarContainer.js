import React from 'react';
import DayList from './DayList';
import TodoContainer from './TodoContainer';
import SideBar from './SideBar';

import "./calendar.css";

const CalendarContainer = () => {
    return (
        <div className="CalendarContainer-Component">
            <DayList />
            <TodoContainer />
            <SideBar />
        </div>
    )
}

export default CalendarContainer;