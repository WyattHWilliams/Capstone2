import { combineReducers } from 'redux'
import calendar from './calendar';
import profile from './profile';

const allReducers = combineReducers({
    calendar: calendar,
    profile: profile
})

export default allReducers;