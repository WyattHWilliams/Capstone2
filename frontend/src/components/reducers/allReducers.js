import { combineReducers } from 'redux'
import currentUser from './currentUser';
import sideBarDisplay from './sideBarDispaly';

const allReducers = combineReducers({
    currentUser: currentUser,
    sideBarDisplay: sideBarDisplay
})

export default allReducers;