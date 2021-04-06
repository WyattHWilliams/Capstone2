// ----- [///// CONFIG /////] -----
const INITIAL_STATE = {
    username: "",
    isLoggedIn: false,
    spoonacularHash: "",
    diet: "",
    hasAnsweredMealQuestions: false,
    mealPlan: {},
    TodoList: [
        [{
            id: "mon-2",
            type: "meal",
            name: "Breakfast",
            desc: "ham and eggs",
            detail: {
                recipeId: '123443',
                recipeName: 'ham and eggs',
                timeReady: '24',
                servings: 2,
                ingredients: ['asd', 'asdf', 'adf'],
                steps: ['rtr', 'ertqq']
            }
        },
        {
            id: "mon-3",
            type: "workout",
            name: "Workout",
            desc: "Upper Body"
        }],
        [],
        [],
        [],
        [],
        [],
        []
    ],
    selectedDay: 0,
    currentSideBarDisplay: {
        id: "default",
        type: "none",
        name: "None"
    },
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


        case 'SET_SELECTED_DAY':
            return { ...state, selectedDay: action.day }
        case 'SET_CURRENT_SIDEBAR_DISPLAY':
            return { ...state, currentSideBarDisplay: action.currentSideBarDisplay }


        case 'ERROR':
            return { ...state, error: true }
        default:
            return state;
    }
}


// ----- [///// EXPORTS /////] -----
export default currentUser;