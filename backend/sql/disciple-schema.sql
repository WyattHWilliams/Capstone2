DROP TABLE IF EXISTS meal_plans;
CREATE TABLE meal_plans (
  user_username VARCHAR(25) NOT NULL PRIMARY KEY
    REFERENCES users ON DELETE CASCADE,
  monday TEXT DEFAULT '',
  tuesday TEXT DEFAULT '',
  wednesday TEXT DEFAULT '',
  thursday TEXT DEFAULT '',
  friday TEXT DEFAULT '',
  saturday TEXT DEFAULT '',
  sunday TEXT DEFAULT ''
);

DROP TABLE IF EXISTS todo_items;
CREATE TABLE todo_items (
  id SERIAL UNIQUE PRIMARY KEY,
  user_username VARCHAR(25) NOT NULL
    REFERENCES users ON DELETE CASCADE,
  day_index INT DEFAULT 0,
  time_index INT DEFAULT NULL,
  type TEXT DEFAULT 'none',
  name TEXT DEFAULT 'none',
  desc TEXT DEFAULT 'none',
  detail TEXT DEFAULT ''
);

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  spoonacular_hash TEXT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE,

  diet TEXT,
  has_answered_meal_questions BOOLEAN NOT NULL DEFAULT FALSE
);

DROP TABLE IF EXISTS exercises;
CREATE TABLE exercises (
  id SERIAL UNIQUE PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  muscle TEXT NOT NULL, /* cardio - (calves) Gastrocnemius, Tibialis Anterior - (thighs) Obliques, Hamstrings, Quadriceps - (hips) Iliopsoas, Hip Abductors, Gluteus Maximus - (waist) Erector Spinae, Obliques, Rectus Abdominis - (chest) Serratus Anterior, [Pectoralis Major, Clavicular], [Pectoralis Major, Sternal] - (back) Infraspinatus, [Trapezius, Upper], [Back, General] - (upper arm) Biceps, Triceps - (shoulders) [Deltoid, Posterior], [Deltoid, Lateral], [Deltoid, Anterior] */
  general_location TEXT NOT NULL, /* upper_body, core, lower_body, full_body */
  specific_location TEXT NOT NULL /* neck,( shoulders, upper arm )(back, chest, waist,) (hips, thighs, calves,) (cardio) */
);