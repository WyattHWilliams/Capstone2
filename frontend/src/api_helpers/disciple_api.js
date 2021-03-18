// interactions with the main disciple api (user profiles, user data, calendar data, login, signup)
// ----- [///// DEPENDENCIES /////] -----
import axios from "axios";


// ----- [///// CONFIG /////] -----
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


// ----- [///// CLASS /////] -----
class DiscipleApi {
    static token;

    static async login(loginData) {
        let { username, password } = loginData;
        try {
            let res = await axios.post(`${BASE_URL}/auth/token`, { username, password });
            return res.data.token;
        } catch (err) {
            return 'unauthorized';
        }
    }

    static async register(registerData) {
        let { username, password, firstName, lastName, email } = registerData;
        try {
            let res = await axios.post(`${BASE_URL}/auth/register`, { username, password, firstName, lastName, email });
            return res.data.token;
        } catch (err) {
            return 'failure';
        }
    }
}


// ----- [///// EXPORTS /////] -----
export default DiscipleApi;