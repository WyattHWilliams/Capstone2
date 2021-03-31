// ----- [///// ACTION CREATORS /////] -----
export function setSideBarMeal(meal) {
    return async function (dispatch) {
        try {
            dispatch(gotSideBarMeal);
        } catch (err) {
            gotError();
        }
    }
}


// ----- [///// DISPATCH HANDLERS /////] -----
export function gotSideBarMeal(meal) {
    return {
        type: 'SET_MEAL_DISPLAY',
        meal: meal
    }
}

export function gotError() {
    return {
        type: 'ERROR'
    }
}