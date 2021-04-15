// ----- [///// DEPENDENCIES /////] -----
import axios from "axios";
import DiscipleApi from './disciple_api';


// ----- [///// CONFIG /////] -----
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


// ----- [///// CLASS /////] -----
class TodoItemApi {
    static BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${this.BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${DiscipleApi.token}` };
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getTodoItemList(username) {
        let { todoItemList } = await this.request(`todo-items/${username}`);
        return todoItemList;
    }

    static async addTodoItem(username, itemData) {
        let res = await axios({
            method: 'post',
            url: `${this.BASE_URL}/todo-items/single-todo/${username}`,
            data: itemData,
            headers: { Authorization: `Bearer ${DiscipleApi.token}` }
        });
        return res.data.todoItem;
    }

    static async addMultTodoItem(username, itemsData) {
        console.log(itemsData);
        let res = await axios({
            method: 'post',
            url: `${this.BASE_URL}/todo-items/multiple-todo/${username}`,
            data: itemsData,
            headers: { Authorization: `Bearer ${DiscipleApi.token}` }
        });
        return res.data.todoItemList;
    }

    static async updateMultTodoItem(username, itemsData) {
        let res = await axios({
            method: 'patch',
            url: `${this.BASE_URL}/todo-items/update-multiple-todo/${username}`,
            data: itemsData,
            headers: { Authorization: `Bearer ${DiscipleApi.token}` }
        });
        return res.data.todoItemList;
    }

    static async deleteMealItems(username) {
        let res = await axios({
            method: 'delete',
            url: `${this.BASE_URL}/todo-items/delete-meals/${username}`,
            headers: { Authorization: `Bearer ${DiscipleApi.token}` }
        });
        return res.data.todoItemList;
    }

    static async deleteWorkoutItems(username) {
        let res = await axios({
            method: 'delete',
            url: `${this.BASE_URL}/todo-items/delete-workouts/${username}`,
            headers: { Authorization: `Bearer ${DiscipleApi.token}` }
        });
        return res.data.todoItemList;
    }

}


// ----- [///// EXPORTS /////] -----
export default TodoItemApi;