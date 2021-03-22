// to be used until google calendar api is implemented(see README).

calendar = {
    weekId: 'string',
    week: {
        monday: {
            breakfast: 'mealId',
            lunch: 'mealId',
            dinner: 'mealId'
        },
        tuesday: {
            breakfast: 'mealId',
            lunch: 'mealId',
            dinner: 'mealId'
        }
    }
}

// ----- [///// CLASS /////] -----
class fakeCalendar {
    static function makeEvent(date, data)
}