// ----- [///// CONFIG /////] -----
const INITIAL_STATE = {
    meal: {
        recipeId: '',
        recipeName: '',
        timeReady: '',
        servings: 0,
        ingredients: [],
        steps: []
    },
    workout: {},
    error: false
}

// ----- [///// REDUCER /////] -----
function sideBarDisplay(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_MEAL_DISPLAY':
            return { ...state, meal: action.meal };
        case 'SET_WORKOUT_DISPLAY':
            return { ...state, workout: action.workout };
        case 'ERROR':
            return { ...state, error: true }
        default:
            return state;
    }
}


// ----- [///// EXPORTS /////] -----
export default sideBarDisplay;