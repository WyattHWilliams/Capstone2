import { combineReducers } from 'redux'
import currentUser from './currentUser';

const allReducers = combineReducers({
    currentUser: currentUser
})

export default allReducers;