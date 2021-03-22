

INITIAL_STATE = {
    week: {
        monday: {
            breakfast: {
                recipeId: meals[0].id,
                recipeName: meals[0].title,
                ingredients: [
                    ings[0].extendedIngredients[0].original
                ],
                steps: [
                    stps[0].steps[0].step
                ]
            },
            lunch: {
                recipeId: meals[0].id,
                recipeName: meals[0].title,
                ingredients: [
                    ings[0].extendedIngredients[0].original
                ],
                steps: [
                    stps[0].steps[0].step
                ]
            },
            dinner: {
                recipeId: meals[0].id,
                recipeName: meals[0].title,
                ingredients: [
                    ings[0].extendedIngredients[0].original
                ],
                steps: [
                    stps[0].steps[0].step
                ]
            }
        }
    }
}


// ----- [///// REDUCER /////] -----
function mealPlan(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_MEAL_PLAN':
            return { ...state, week: action.week }
        case 'ERROR':
            return { ...state, error: true }
        default:
            return state;
    }
}