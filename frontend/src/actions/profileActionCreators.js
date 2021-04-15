// ----- [///// DEPENDENCIES /////] -----
import DiscipleApi from '../api_helpers/disciple_api';

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

export function updateProfileDiet(username) {
    return async function (dispatch) {
        try {

            let { diet } = await DiscipleApi.getUser(username);
            dispatch(gotDiet(diet));
        } catch (err) {
            console.log(err)
            gotError();
        }
    }
}


// ----- [///// DISPATCH HANDLERS /////] -----
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

export function gotDiet(diet) {
    return {
        type: 'UPDATE_PROFILE_DIET',
        diet: diet
    }
}

export function gotError() {
    return {
        type: 'ERROR'
    }
}