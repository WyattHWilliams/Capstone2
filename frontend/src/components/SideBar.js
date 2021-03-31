import React from 'react';
import { useSelector } from 'react-redux';
import RecipeList from './RecipeList';
import './css/SideBar.css'

const SideBar = () => {
    const { meal, workout } = useSelector(store => store.sideBarDisplay);


    return (
        <div className="SideBar-Component">
            <hr></hr>
            <div className='SideBar-Meal'>
                {meal.recipeName == '' ?
                    <h4>Select A Meal</h4>
                    :
                    <>
                        <h4>{meal.recipeName}</h4>
                        <RecipeList type='ingredients' items={meal.ingredients} />
                        <RecipeList type='steps' items={meal.steps} />
                    </>}
            </div>
            <hr></hr>
            <div className='SideBar-Workout'>
                {workout.workoutName == undefined ?
                    <h4>Select A Workout</h4>
                    :
                    <>
                        <h4>{meal.recipeName}</h4>
                        <RecipeList type='ingredients' items={meal.ingredients} />
                        <RecipeList type='steps' items={meal.steps} />
                    </>}
            </div>
        </div>
    )
}

export default SideBar;