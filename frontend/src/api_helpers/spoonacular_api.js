// interactions with the spoonacular API
// key: c462b21912d3451daef7f934a5771f16
// max 150 requests per day

// MVP: get userHash, generate weekly meal plan using 'diet', add/delete from meal plan, generate shopping list from meal plan, get individual recipe
// future goals: include meal intolerances, things user doesn't like, nutrition goals(calorie count etc.), ability to change number of meals per day of meal plan(many small meals, few big meals, etc.)

// ----- [///// DEPENDENCIES /////] -----
import axios from "axios";
import TodoItemApi from "./discipleTodoItem_api";


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

/**
 * {
 *  username:
 *  day_index:
 *  type: 'meal'
 *  name:
 *  desc: (title)
 *  detail: {
 *      recipeId:
        recipeName:
        timeReady:
        servings:
        ingredients:
        steps:
 *  }
 * }
*/


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

    static async getMealPlan(diet, username) {
        let mealArr = [];


        async function generateMealPlan(diet) {
            let dietTxt = diet == '' ? diet : `&diet=${diet}`;
            let { data } = await axios.get(`${BASE_URL}/mealplanner/generate${API_KEY}&timeFrame=week${dietTxt}`);
            return data;
        }

        async function getIdsFromMealPlan({ week }) {
            let resArr = []
            let mealNames = ['Breakfast', 'Lunch', 'Dinner'];
            let dayNames = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            let idArr = [];

            for (let day in week) {
                for (let i = 0; i < week[day].meals.length; i++) {
                    let meal = {
                        username: '',
                        dayIndex: 0,
                        type: 'meal',
                        name: '',
                        desc: '',
                        detail: {
                            recipeId: '',
                            recipeName: '',
                            timeReady: '',
                            servings: '',
                            ingredients: [],
                            steps: []
                        }
                    }
                    meal.username = username;
                    meal.dayIndex = dayNames.indexOf(day);
                    meal.name = mealNames[i];
                    meal.desc = week[day].meals[i].title;
                    meal.detail.recipeId = week[day].meals[i].id
                    meal.detail.recipeName = week[day].meals[i].title;
                    meal.detail.timeReady = `${week[day].meals[i].readyInMinutes} mins`;
                    meal.detail.servings = week[day].meals[i].servings;

                    idArr.push(week[day].meals[i].id);
                    resArr.push(meal);
                }
            }
            mealArr = [...resArr];
            return idArr;
        }

        async function getReipeInfo(idArr) {
            // let idStr = idArr.join();
            let idStr = `${idArr[0]},${idArr[1]},${idArr[2]}`
            let { data } = await axios.get(`${BASE_URL}/recipes/informationBulk${API_KEY}&ids=${idStr}`);
            return data;
        }

        function extractIngredientsAndSteps(infoArr) {
            for (let i = 0; i < infoArr.length; i++) {
                infoArr[i].extendedIngredients.map((val) => {
                    mealArr[i].detail.ingredients.push(val.original);
                })
                infoArr[i].instructions.slice(14).replace(/↵/g, '').split('.').map((val) => {
                    mealArr[i].detail.steps.push(val.trim());
                })
            }
        }

        // part 1: generate and organize meal plan
        let data = await generateMealPlan(diet);
        let ids = await getIdsFromMealPlan(data);
        let infoArr = await getReipeInfo(ids);
        await extractIngredientsAndSteps(infoArr);

        // part 2: map meal plan into database
        try {
            let res1 = await TodoItemApi.deleteMealItems(username)
        } catch (err) {
            console.log(err);
        }
        let res2 = await TodoItemApi.addMultTodoItem(username, mealArr)

        return res2;
    }
}


// ----- [///// EXPORTS /////] -----
export default SpoonacularApi