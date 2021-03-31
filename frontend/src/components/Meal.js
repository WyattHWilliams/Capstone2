import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipeList from './RecipeList';

const Meal = ({ mealName, dayName }) => {
    const currentUser = useSelector(store => store.currentUser);
    const meal = currentUser.mealPlan[`${dayName}`];
    const dispatch = useDispatch();

    async function updateSideBar(meal) {
        dispatch({ type: 'SET_MEAL_DISPLAY', meal: meal });
    }

    return (
        <div className="Meal-Component" onClick={() => updateSideBar(meal[mealName])}>
            <h3 onClick={() => updateSideBar(meal[mealName])}>{mealName.charAt(0).toUpperCase() + mealName.slice(1)}: {meal[mealName].recipeName}</h3>
            {/* <div className='Meal-SubComponent'>
                <RecipeList type='ingredients' items={meal[mealName].ingredients} />
                <RecipeList type='steps' items={meal[mealName].steps} />
            </div> */}
            <hr></hr>
        </div>
    )
}

export default Meal;