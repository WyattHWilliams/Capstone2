// ----- [///// CONFIG /////] -----
const INITIAL_STATE = {
    username: "",
    isLoggedIn: false,
    diet: "none",
    error: false
}


// ----- [///// REDUCER /////] -----
function profile(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN':
            window.localStorage.setItem('_token', action.token);
            return { ...state, username: action.username, isLoggedIn: true };
        case 'LOGOUT':
            window.localStorage.setItem('_token', undefined);
            return {
                ...state,
                username: "",
                isLoggedIn: false,
                diet: "none",
                error: false
            };
        case 'UPDATE_PROFILE_DIET':
            return { ...state, diet: action.diet };
        case 'ERROR':
            return { ...state, error: true }
        default:
            return state;
    }
}


// ----- [///// EXPORTS /////] -----
export default profile;