// interactions with the spoonacular API
// key: c462b21912d3451daef7f934a5771f16
// max 150 requests per day

// MVP: get userHash, generate weekly meal plan using 'diet', add/delete from meal plan, generate shopping list from meal plan, get individual recipe
// future goals: include meal intolerances, things user doesn't like, nutrition goals(calorie count etc.), ability to change number of meals per day of meal plan(many small meals, few big meals, etc.)

// ----- [///// DEPENDENCIES /////] -----
import axios from "axios";
import emptyTempMealPlan from './emptyTempMealPlan';


// ----- [///// CONFIG /////] -----
const BASE_URL = "https://api.spoonacular.com";
const API_KEY = "?apiKey=c462b21912d3451daef7f934a5771f16";

/**
 * getUserHash POST ${BASE_URL}/users/connect${API_KEY}
 * generateMealPlan GET ${BASE_URL}/mealplanner/generate${API_KEY}&timeFrame=week${&diet=vegan}
 *      => meals: [{id: 23, title: 'title', redyInMinutes: 45, servings: 1}, ...]
 * getRecipeInformationBulk GET ${BASE_URL}/recipes/informationBulk${API_KEY}&ids=${'id1,id2'}
 *     ings => [{extendedIngredients: [{original:'1 tblspn butter'}, ...], ...]
 * getRecipeSteps GET ${BASE_URL}/recipes/${meals[x].id}/analyzedInstructions${API_KEY}
 *     stps => [{steps: [{number:1, step: 'preheat oven to 200 degrees F.'}, ...]}, ...]
*/



// ----- [///// CLASS /////] -----
class SpoonacularApi {
    static tempMealPlan = emptyTempMealPlan;

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

    static async getMealPlan(diet) {

        let data = await this.generateMealPlan(diet);
        let ids = await this.getIdsFromMealPlan(data);
        let infoArr = await this.getReipeInfo(ids);
        await this.extractIngredientsAndSteps(infoArr);
        return SpoonacularApi.tempMealPlan;
    }

    static async extractIngredientsAndSteps(infoArr) {
        for (let i = 0; i < (infoArr.length - 1); i += 3) {
            let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'sunday']
            let day = days[(((i + 3) / 3) - 1)]
            for (let n = 0; n < 3; n++) {
                let mealTimes = ['breakfast', 'lunch', 'dinner'];
                let mealTime = mealTimes[n];
                infoArr[(n + i)].extendedIngredients.map((val) => {
                    SpoonacularApi.tempMealPlan[day][mealTime].ingredients.push(val.original);
                })
                infoArr[(n + i)].instructions.slice(14).replace(/↵/g, '').split('.').map((val) => {
                    SpoonacularApi.tempMealPlan[day][mealTime].steps.push(val.trim());
                })
            }
        }
    }

    static async getReipeInfo(idArr) {
        // let idStr = idArr.join();
        let idStr = `${idArr[0]},${idArr[1]},${idArr[2]}`
        let { data } = await axios.get(`${BASE_URL}/recipes/informationBulk${API_KEY}&ids=${idStr}`);
        return data;
    }

    static async getIdsFromMealPlan({ week }) {
        // returns recipeIds and inserts basic meal info into our tempMealPlan object
        async function setBasicMealInfo(mealTime, setToObj, getFromObj) {
            // sets recipeName, Id, timeReady, and servings properties in our tempMealPlan object;
            let idx = -1;
            if (mealTime == 'breakfast') idx = 0;
            if (mealTime == 'lunch') idx = 1;
            if (mealTime == 'dinner') idx = 2;

            setToObj[mealTime].recipeId = getFromObj.meals[idx].id;
            idArr.push(getFromObj.meals[idx].id)
            setToObj[mealTime].recipeName = getFromObj.meals[idx].title;
            setToObj[mealTime].timeReady = `${getFromObj.meals[idx].readyInMinutes} mins`;
            setToObj[mealTime].servings = getFromObj.meals[idx].servings;
        }

        let idArr = [];

        for (let day in week) {
            setBasicMealInfo('breakfast', SpoonacularApi.tempMealPlan[day], week[day]);
            setBasicMealInfo('lunch', SpoonacularApi.tempMealPlan[day], week[day]);
            setBasicMealInfo('dinner', SpoonacularApi.tempMealPlan[day], week[day]);
        }

        return idArr;
    }

    static async generateMealPlan(diet) {
        let dietTxt = diet == '' ? diet : `&diet=${diet}`;
        let { data } = await axios.get(`${BASE_URL}/mealplanner/generate${API_KEY}&timeFrame=week${dietTxt}`);
        return data;
    }
}


// ----- [///// EXPORTS /////] -----
export default SpoonacularApi