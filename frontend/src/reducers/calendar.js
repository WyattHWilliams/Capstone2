// ----- [///// CONFIG /////] -----
const INITIAL_STATE = {
    selectedDay: 0,
    selectedItem: 0,
    currentSideBarDisplay: {
        id: "mon-2",
        type: "none",
        name: "Select An Item From The Middle Column"
    },
    todoList: [],
    error: false
}


// ----- [///// REDUCER /////] -----
function calendar(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_SELECTED_DAY':
            return { ...state, selectedDay: action.selectedDay }
        case 'SET_SELECTED_ITEM':
            return { ...state, selectedItem: action.selectedItem, currentSideBarDisplay: action.currentSideBarDisplay }
        case 'SET_TODO_LIST':
            return { ...state, todoList: action.todoList }
        case 'ERROR':
            return { ...state, error: true }
        default:
            return state;
    }
}


// ----- [///// EXPORTS /////] -----
export default calendar;