-- both test users have the password "password"

INSERT INTO users (username, password, spoonacular_hash, first_name, last_name, email, is_admin)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        '04a9fec2c0ef95127bc6aeff52b15e3b3ef083e9',
        'Test',
        'User',
        'testuser@test.com',
        FALSE),
       ('testadmin',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        '04a9fec2c0ef95127bc6aeff52b15e3b3ef083e9',
        'Test',
        'Admin!',
        'testadmin@test.com',
        TRUE);

INSERT INTO exercises (
            name,
            description)
VALUES ('push-ups','pushup description'),
    ('sit-ups','situp description'),
    ('lunges','lunge description');

INSERT INTO meal_plans (user_username, monday, tuesday, wednesday, thursday, friday, saturday, sunday)
VALUES ('testuser',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}')