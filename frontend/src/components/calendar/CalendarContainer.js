import React from 'react';
import DaySelection from './DaySelection';
import TodoList from './TodoList';
import SideBar from './SideBar';

import "./Calendar.css";

const CalendarContainer = () => {
    return (
        <div className="CalendarContainer-Component">
            <DaySelection />
            <TodoList />
            <SideBar />
        </div>
    )
}

export default CalendarContainer;