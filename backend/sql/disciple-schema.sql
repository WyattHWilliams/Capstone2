DROP TABLE IF EXISTS meal_plans;
CREATE TABLE meal_plans (
  user_username VARCHAR(25) NOT NULL PRIMARY KEY
    REFERENCES users ON DELETE CASCADE,
  monday TEXT,
  tuesday TEXT,
  wednesday TEXT,
  thursday TEXT,
  friday TEXT,
  saturday TEXT,
  sunday TEXT
);

DROP TABLE IF EXISTS users;
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
  name TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL
);