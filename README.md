Proposal: Todo Manager, Meal and Workout Plan Scheduler
1   Site uses Google Calendar Api, Spoonacular Api, and a workout scheduler api to get user todos, meal requirements, and workout preferences and generate a loose weekly todo and workout schedule with suggestions for meals with recipes.

2   Site Flow (front-end focus):
        Login, setup account, connect/authenticate with google calendars to allow the site to post data to user's calendar.
        User form for todos, meal restrictions/preferences, and amount of time the user has available to exercise.
        Api calls to spoonacular and the workout api to get suggestions for recipes and workouts based on submitted info.
        Generate weekly schedule assigning todos, meals, and workouts to each day. (also, pull data from google calendar and account for planned events?)
        Allow User to move things around before committing.
        Send committed schedule to user's google calendar via the google calendar api.
3   Website, possibility for mobile development.
4   Designed to help people with scheduling.
5   Designed for people looking to organize their schedules and easily introduce healthy eating and exercising habits.
6   (see above api listings)
7   Notes:
        Projected issues:
            Getting proper authentication for using the google calendar api to post to user's google accounts.
            Making it look good.
        Sensitive info:
            Data to/from google's api.
            login / account info
            Health related info regarding food restrictions or workout limitations.


---------- [========== ========== GOALS ========== ==========] ----------

// ----- [///// Minimum Viable Product (MVP) /////] -----

    - generate weekly meal plans by diet.
    - generate weekly exercise plans.
    - show calendar with plans.
    - edit calendar plans.
    - commit calendar to google calendars.
    - generate shopping cart based on meal plan.

// ----- [///// FUTURE GOALS /////] -----

    - meal plan customisation:
        + prefered number of meals per day
        + meal restrictions(intolerances, things user doens't want to eat/doesn't like)
        + prefered eating times
        + preferred shopping time
        + weightloss or healthy eating goals

    - exercise plan customization:
        + weight loss or healthy living goals
        + preferred workout times
        + preferred number of workouts per day
        + workout restrictions(injuries, health concerns)