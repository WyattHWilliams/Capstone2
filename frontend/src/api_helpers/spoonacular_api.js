// interactions with the spoonacular API
// key: c462b21912d3451daef7f934a5771f16
// max 150 requests per day

// MVP: get userHash, generate weekly meal plan using 'diet', add/delete from meal plan, generate shopping list from meal plan
// future goals: include meal intolerances, things user doesn't like, nutrition goals(calorie count etc.), ability to change number of meals per day of meal plan(many small meals, few big meals, etc.)

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

    static async
}


// ----- [///// EXPORTS /////] -----
export default SpoonacularApi