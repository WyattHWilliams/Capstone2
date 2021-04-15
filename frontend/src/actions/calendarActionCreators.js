// ----- [///// DEPENDENCIES /////] -----
import TodoItemApi from '../api_helpers/discipleTodoItem_api';

// ----- [///// ACTION CREATORS /////] -----
export function setTodoList(username) {
    return async function (dispatch) {
        try {
            let todoList = await TodoItemApi.getTodoItemList(username);
            dispatch(gotTodoList(todoList));
        } catch (err) {
            gotError();
        }
    }
}


// ----- [///// DISPATCH HANDLERS /////] -----
export function gotTodoList(list) {
    return {
        type: 'SET_TODO_LIST',
        todoList: list
    }
}

export function gotError() {
    return {
        type: 'ERROR'
    }
}