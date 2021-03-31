// ----- [///// DEPENDENCIES /////] -----
import DiscipleMealPlanApi from '../../api_helpers/discipleMealPlan_api';
import DiscipleApi from '../../api_helpers/disciple_api';


// ----- [///// ACTION CREATORS /////] -----
export function setCurrentUserLoggedIn(username, token) {
    return async function (dispatch) {
        try {
            DiscipleApi.token = token;
            dispatch(login(username, token));
        } catch (err) {
            gotError();
        }
    }
}

export function setCurrentUserLoggedOut() {
    return async function (dispatch) {
        try {
            DiscipleApi.token = undefined;
            dispatch(logout());
        } catch (err) {
            gotError();
        }
    }
}

export function setCurrentUserData(username) {
    return async function (dispatch) {
        try {

            let user = await DiscipleApi.getUser(username);
            let { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = user;

            let mealPlan = { monday, tuesday, wednesday, thursday, friday, saturday, sunday }

            if (mealPlan.monday != '') {
                for (let key in mealPlan) {
                    mealPlan[key] = JSON.parse(mealPlan[key]);
                    delete user[key]
                }
            }

            user.mealPlan = mealPlan;
            dispatch(gotUserData(user));
        } catch (err) {
            console.log(err)
            gotError();
        }
    }
}

export function setCurrentUserMealPlan(username) {
    return async function (dispatch) {
        try {
            let mealPlan = await DiscipleMealPlanApi.getMealPlan(username);
            dispatch(gotMealPlan);
        } catch (err) {
            gotError();
        }
    }
}


// ----- [///// DISPATCH HANDLERS /////] -----
export function gotMealPlan(plan) {
    return {
        type: 'SET_MEAL_PLAN',
        mealPlan: plan
    }
}

export function gotUserData(user) {
    let { spoonacularHash, diet, hasAnsweredMealQuestions, mealPlan } = user;
    return {
        type: 'SET_CURRENT_USER_DATA',
        spoonacularHash: spoonacularHash,
        diet: diet,
        hasAnsweredMealQuestions: hasAnsweredMealQuestions,
        mealPlan: mealPlan
    }
}

export function login(username, token) {
    return {
        type: 'LOGIN',
        username: username,
        token: token
    }
}

export function logout() {
    return {
        type: 'LOGOUT'
    }
}

export function gotError() {
    return {
        type: 'ERROR'
    }
}