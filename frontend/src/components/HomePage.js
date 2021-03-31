import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DiscipleMealPlanApi from '../api_helpers/discipleMealPlan_api';
import SpoonacularApi from '../api_helpers/spoonacular_api';
import WeekCalendar from './WeekCalendar';
import SideBar from './SideBar';
import './css/HomePage.css'

const HomePage = () => {
    const currentUser = useSelector(store => store.currentUser);
    const dispatch = useDispatch();
    const history = useHistory()

    console.log(currentUser);
    if (currentUser.hasAnsweredMealQuestions != true) history.push('/meal-questions');

    async function testApi(diet) {
        let data = await SpoonacularApi.getMealPlan(currentUser.diet)
        console.log(data);
        dispatch({ type: 'SET_MEAL_PLAN', mealPlan: data })
    }

    return (
        <div className="HomePage-Component">

            <h1>ARG, THIS BE THE HOMEPAGE</h1>
            <button onClick={() => testApi(currentUser.diet)}>CLICK</button>
            <div className="HomePage-CalendarSideBar-Container">
                {currentUser.mealPlan.monday == '' ? <p>nope</p> : <WeekCalendar />}
                <SideBar />
            </div>
        </div >
    )
}

export default HomePage;