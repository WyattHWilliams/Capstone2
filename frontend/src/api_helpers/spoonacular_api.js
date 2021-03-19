// interactions with the spoonacular API
// key: c462b21912d3451daef7f934a5771f16
// max 150 requests per day

// ----- [///// DEPENDENCIES /////] -----
import axios from "axios";


// ----- [///// CONFIG /////] -----
const BASE_URL = "https://api.spoonacular.com";
const API_KEY = "?apiKey=c462b21912d3451daef7f934a5771f16";


// ----- [///// CLASS /////] -----
class SpoonacularApi {
    static async getUserHash(username) {
        try {
            let res = await axios.post(`${BASE_URL}/users/connect${API_KEY}`, {
                username: username
            });
            return res;
        } catch (err) {
            return err;
        }
    }
}


// ----- [///// EXPORTS /////] -----
export default SpoonacularApi