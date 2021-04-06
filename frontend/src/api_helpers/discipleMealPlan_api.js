// interactions with the disciple api (meal plan data ONLY)
// ----- [///// DEPENDENCIES /////] -----
import axios from "axios";
import DiscipleApi from './disciple_api';

// ----- [///// CLASS /////] -----
class DiscipleMealPlanApi extends DiscipleApi {
    static parse(obj) {
        for (let key in obj) {
            obj[key] = JSON.parse(obj[key]);
        }
        return obj;
    }

    static stringify(obj) {
        for (let key in obj) {
            let str = JSON.stringify(obj[key]);
            obj[key] = str.slice(0, (str.length))
            // console.log(obj)
        }
        return obj;
    }

    static async getMealPlan(username) {
        let { mealPlan } = await this.request(`meal-plans/${username}`);
        return this.parse(mealPlan);
    }

    static async updateMealPlan(username, data) {

        let res = await axios({
            method: 'patch',
            url: `${this.BASE_URL}/meal-plans/${username}`,
            data: this.stringify(data),
            headers: { Authorization: `Bearer ${this.token}` }
        });
        console.log(res.data);
        return this.parse(res.data.mealPlan);
    }
}


// ----- [///// EXPORTS /////] -----
export default DiscipleMealPlanApi;