// ----- [///// DEPENDENCIES /////] -----
import axios from "axios";
import DiscipleApi from './disciple_api';
import TodoItemApi from './discipleTodoItem_api';


// ----- [///// CONFIG /////] -----
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


// ----- [///// CLASS /////] -----
class WorkoutApi {
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

    static async getWorkoutPlan(username) {

        async function generateWorkout(username) {
            // assign general body workouts to days in week
            let generalLocations = ['Upper Body', 'Lower Body', 'Full Body']
            let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            let workoutArr = [];

            for (let day of days) {
                let num = Math.floor(Math.random() * generalLocations.length);

                let exercises = await WorkoutApi.request(`exercises/generate-workout/${generalLocations[num]}`);

                let loc = generalLocations[num] == 'Full Body' ? 'Cardio' : generalLocations[num];

                let workout = {
                    username: username,
                    dayIndex: days.indexOf(day),
                    type: 'workout',
                    name: `${loc} Workout`,
                    desc: '',
                    detail: exercises
                }

                workoutArr.push(workout);
            }


            return workoutArr;
        }

        // part 1: generate workout plan
        let workoutPlan = await generateWorkout(username);

        // part 2: map workout plan into database
        try {
            let res1 = await TodoItemApi.deleteWorkoutItems(username)
        } catch (err) {
            // console.log(err);
        }
        // console.log("moving on!");
        let res2 = await TodoItemApi.addMultTodoItem(username, workoutPlan)

        return res2;

    }
}

// ----- [///// EXPORTS /////] -----
export default WorkoutApi;