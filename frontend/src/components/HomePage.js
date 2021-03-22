import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DiscipleMealPlanApi from '../api_helpers/discipleMealPlan_api';

const HomePage = () => {
    const currentUser = useSelector(store => store.currentUser);
    const history = useHistory()

    console.log(currentUser);
    if (currentUser.hasAnsweredMealQuestions != true) history.push('/mealQuestions');

    return (
        <div className="HomePage-Component">
            <h1>ARG, THIS BE THE HOMEPAGE</h1>
        </div>
    )
}

export default HomePage;