// ----- [///// CONFIG /////] -----
const INITIAL_STATE = {
    username: "",
    isLoggedIn: false,
    spoonacularHash: "",
    diet: "",
    hasAnsweredMealQuestions: false,
    mealPlan: {},
    error: false
}


// ----- [///// REDUCER /////] -----
function currentUser(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN':
            window.localStorage.setItem('_token', action.token);
            return { ...state, username: action.username, isLoggedIn: true };
        case 'LOGOUT':
            window.localStorage.setItem('_token', undefined);
            return {
                ...state,
                username: '',
                isLoggedIn: false,
                spoonacularHash: "",
                diet: "",
                hasAnsweredMealQuestions: false,
                error: false
            };
        case 'SET_CURRENT_USER_DATA':
            return {
                ...state,
                spoonacularHash: action.spoonacularHash,
                diet: action.diet,
                hasAnsweredMealQuestions: action.hasAnsweredMealQuestions,
                mealPlan: action.mealPlan
            };
        case 'SET_MEAL_PLAN':
            return { ...state, mealPlan: action.mealPlan }
        case 'ERROR':
            return { ...state, error: true }
        default:
            return state;
    }
}


// ----- [///// EXPORTS /////] -----
export default currentUser;