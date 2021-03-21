// ----- [///// DEPENDENCIES /////] -----
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
            dispatch(gotUserData(user));
        } catch (err) {
            gotError();
        }
    }
}


// ----- [///// DISPATCH HANDLERS /////] -----
export function gotUserData(user) {
    let { spoonacularHash, diet, hasAnsweredMealQuestions } = user;
    return {
        type: 'SET_CURRENT_USER_DATA',
        spoonacularHash: spoonacularHash,
        diet: diet,
        hasAnsweredMealQuestions: hasAnsweredMealQuestions
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