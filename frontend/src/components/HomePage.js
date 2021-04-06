import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DiscipleMealPlanApi from '../api_helpers/discipleMealPlan_api';
import SpoonacularApi from '../api_helpers/spoonacular_api';
import WeekCalendar from './WeekCalendar';
import SideBar from './SideBar';
import './css/HomePage.css'

import CalendarContainer from './newCalendar/CalendarContainer';

const HomePage = () => {
    const currentUser = useSelector(store => store.currentUser);
    const dispatch = useDispatch();
    const history = useHistory()

    console.log(currentUser);
    if (currentUser.hasAnsweredMealQuestions != true) history.push('/meal-questions');


    async function testApi(diet) {
        console.log(diet)
        let data = await SpoonacularApi.getMealPlan(diet, currentUser.username)
        console.log(data);
        // let new_data = await DiscipleMealPlanApi.parse(data);
        // let db_res = await DiscipleMealPlanApi.updateMealPlan(currentUser.username, data)
        // console.log(db_res)
        // await dispatch({ type: 'SET_MEAL_PLAN', mealPlan: db_res })
    }

    return (
        <div className="HomePage-Component">

            <h1>ARG, THIS BE THE HOMEPAGE</h1>
            <button onClick={() => testApi(currentUser.diet)}>CLICK</button>
            <div className="HomePage-CalendarSideBar-Container">
                {/* {currentUser.mealPlan.monday == '' ? <p>nope</p> : <WeekCalendar />} */}
                <CalendarContainer />
                {/* <SideBar /> */}
            </div>
        </div >
    )
}

export default HomePage;