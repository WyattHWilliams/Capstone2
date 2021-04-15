// interactions with the main disciple api (user profiles, user data, calendar data, login, signup)
// ----- [///// DEPENDENCIES /////] -----
import axios from "axios";


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
}


// ----- [///// EXPORTS /////] -----
export default DiscipleApi;