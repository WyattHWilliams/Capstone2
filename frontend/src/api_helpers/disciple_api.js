// interactions with the main disciple api (user profiles, user data, calendar data, login, signup)
// ----- [///// DEPENDENCIES /////] -----
import axios from "axios";
import SpoonacularApi from './spoonacular_api';


// ----- [///// CONFIG /////] -----
// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


// ----- [///// CLASS /////] -----
class DiscipleApi {
    static token;
    static BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

    static async login(loginData) {
        let { username, password } = loginData;
        try {
            let res = await axios.post(`${DiscipleApi.BASE_URL}/auth/token`, { username, password });
            return res.data.token;
        } catch (err) {
            return 'unauthorized';
        }
    }

    static async register(registerData) {
        let { username, password, firstName, lastName, email } = registerData;
        try {
            // make user profile
            let res = await axios.post(`${DiscipleApi.BASE_URL}/auth/register`, { username, password, firstName, lastName, email });
            // make empty meal plan for user
            let res2 = await axios.post(`${DiscipleApi.BASE_URL}/meal-plans/`, { username })
            return res.data.token;
        } catch (err) {
            return 'failure';
        }
    }

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${DiscipleApi.BASE_URL}/${endpoint}`;
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

    static async getUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    static async updateUser(username, userData) {
        let res = await axios({
            method: 'patch',
            url: `${DiscipleApi.BASE_URL}/users/${username}`,
            data: userData,
            headers: { Authorization: `Bearer ${DiscipleApi.token}` }
        });
        console.log(res);
        return res.data.user;
    }

    static async addSpoonacularHash(username) {
        try {
            let { data } = await SpoonacularApi.getUserHash(username);
            console.log(data);
            let res = await axios({
                method: 'patch',
                url: `${DiscipleApi.BASE_URL}/users/${username}`,
                data: {
                    spoonacularHash: data.hash
                },
                headers: { Authorization: `Bearer ${DiscipleApi.token}` }
            });
            return res.data.user;
        } catch (err) {
            return 'error fetching spoonacular hash';
        }
    }
}


// ----- [///// EXPORTS /////] -----
export default DiscipleApi;