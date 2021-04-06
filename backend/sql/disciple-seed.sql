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

INSERT INTO meal_plans (user_username, monday, tuesday, wednesday, thursday, friday, saturday, sunday)
VALUES ('testuser',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}',
'{"breakfast":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"lunch":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]},"dinner":{"recipeId":"1234","recipeName":"title","ingredients":["pepper","salt","oregeno"],"steps":["step1","step2","step3"]}}');


INSERT INTO exercises (name, description, muscle, general_location, specific_location)
VALUES
    /* Shoulders */
    (
        'Pike Press',
        'Kneel on two benches positioned side by side slightly apart at end nearest head. Place hands on ends of benches. With forefeet on opposite ends of bench, raise rear end high up with arms, back, and knees straight. Adjust feet so they are somewhat close to hands while keeping back and legs straight. Lower head between ends of benches by bending arms. Push body back up to original position by extending arms. Repeat.',
        'Deltoid, Anterior',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Arnold Press',
        'Stand with two dumbbells position in front of shoulders, palms facing body and elbows under wrists. Initiate movement by bringing elbows out to sides. Continue to raise elbows outward while pressing dumbbells overhead until arms are straight. Lower to front of shoulders in opposite pattern and repeat.',
        'Deltoid, Anterior',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Front Raise',
        'Grasp dumbbells in both hands. Position dumbbells in front of upper legs with elbows straight or slightly bent. Raise dumbbells forward and upward until upper arms are above horizontal. Lower and repeat.',
        'Deltoid, Anterior',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Shoulder Press',
        'Position dumbbells to each side of shoulders with elbows below wrists. Press dumbbells upward until arms are extended overhead. Lower to sides of shoulders and repeat.',
        'Deltoid, Anterior',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Lateral Raise',
        'Grasp dumbbells in front of thighs with elbows slightly bent. Bend over slightly with hips and knees bent slightly. Raise upper arms to sides until slightly bent elbows are shoulder height while maintaining elbows height above or equal to wrists. Lower and repeat.',
        'Deltoid, Lateral',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Lying Lateral Raise',
        'Lie on side with legs separated for support. Grasp dumbbell in front of thigh. Raise dumbbell from floor until arm is vertical. Maintain fixed elbow position (10° to 30° angle) throughout exercise. Lower and repeat.',
        'Deltoid, Lateral',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Raise',
        'Stand and grasp dumbbells with arms to side, palms facing sides of thighs. Pull dumbbells up to sides of ribs with elbows out to sides. Lower and repeat.',
        'Deltoid, Lateral',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Upright Row',
        'Grasp dumbbells and stand with palms facing front of thighs. Pull dumbbells to front of shoulder with elbows leading out to sides. Allow wrists to flex as dumbbells rise upward. Lower and repeat.',
        'Deltoid, Lateral',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Lying Rear Delt Row',
        'Lie chest down on elevated bench. Grasp dumbbells below. Keeping upper arm perpendicular to torso and dumbbells just below elbows, pull dumbbells up until elbows are just above shoulders. Return and repeat.',
        'Deltoid, Posterior',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Lying Rear Lateral Raise',
        'Lie chest down on elevated bench. Grasp dumbbells below to each side. Raise upper arms to sides until elbows are shoulder height. Maintain upper arms perpendicular to torso and fixed elbow position (10° to 30° angle) throughout exercise. Maintain height of elbows above wrists by raising "pinkie" side up. Lower and repeat.',
        'Deltoid, Posterior',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Rear Lateral Raise',
        'Grasp dumbbells to each side. Bend knees and bend over through hips with back flat, close to horizontal. Position elbows with slight bend and palms facing together. Raise upper arms to sides until elbows are shoulder height. Maintain upper arms perpendicular to torso and fixed elbow position (10° to 30° angle) throughout exercise. Maintain height of elbows above wrists by raising "pinkie finger" side up. Lower and repeat.',
        'Deltoid, Posterior',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Rear Delt Row',
        'Kneel over side of bench with arm and leg to side. Grasp dumbbell. Pull dumbbell up out to side with upper arm perpendicular to trunk until upper arm is just beyond horizontal. Lower and repeat.',
        'Deltoid, Posterior',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Seated Rear Lateral Raise',
        'Sit on edge of bench with feet placed beyond knees. Bend over and rest torso on thighs. Grasp dumbbells with each hand under legs. Position elbows with slight bend with palms facing together behind ankles (as shown) or just to sides of ankles. Raise upper arms to sides until elbows are shoulder height. Maintain upper arms perpendicular to torso and fixed elbow position (10° to 30° angle) throughout exercise. Maintain elbows height above wrists by raising "pinkie finger" side up. Lower and repeat.',
        'Deltoid, Posterior',
        'Upper Body',
        'Shoulders'
    ),
    (
        'Dumbbell Side Lying Rear Delt Raise',
        'Lie on side with legs separated for support. Grasp dumbbell in front of chest, palm facing down, arm extended forward with slight bend. Raise dumbbell from floor until it travels above shoulder. Return dumbbell to floor at original position. Repeat.',
        'Deltoid, Posterior',
        'Upper Body',
        'Shoulders'
    ),
    /* Upper Arm */
    (
        'Dumbbell Kickback',
        'Kneel over bench with arm supporting body. Grasp dumbbell. Position upper arm parallel to floor. Extend arm until it is straight. Return and repeat. Continue with opposite arm.',
        'Triceps',
        'Upper Body',
        'Upper Arm'
    ),
    (
        'Dumbbell Lying Triceps Extension',
        'Lie on bench and position dumbbells over head with arms extended. Lower dumbbells by bending elbow until they are to sides of head. Extend arm. Repeat.',
        'Triceps',
        'Upper Body',
        'Upper Arm'
    ),
    (
        'Dumbbell One Arm Triceps Extension',
        'Sit on seat with back support just below shoulder height. Position dumbbell overhead with arm straight up or slightly back. Lower dumbbell behind neck or shoulder while maintaining upper arms vertical position throughout exercise. Extend arm until straight. Return and repeat. Continue with opposite arm.',
        'Triceps',
        'Upper Body',
        'Upper Arm'
    ),
    (
        'Dumbbell Triceps Extension',
        'Position one dumbbell over head with both hands under inner plate (heart shaped grip). With elbows over head, lower forearm behind upper arm by flexing elbows. Flex wrists at bottom to avoid hitting dumbbell on back of neck. Raise dumbbell over head by extending elbows while hyperextending wrists. Return and repeat.',
        'Triceps',
        'Upper Body',
        'Upper Arm'
    ),
    (
        'Bench Dip',
        'Sit on inside of one of two benches placed parallel, slightly less than leg-length away. Place hands on edge of bench, straighten arms, slide rear end off of bench, and position heels on adjacent bench with legs straight. Lower body by bending arms until slight stretch is felt in chest or shoulder, or rear end touches floor. Raise body and repeat.',
        'Triceps',
        'Upper Body',
        'Upper Arm'
    ),
    (
        'Close Grip Push-up',
        'Lie prone on floor with hands under shoulders or slightly narrower. Position body up off floor with extended arms and body straight. Keeping body straight, lower body to floor by bending arms. Push body up until arms are extended. Repeat.',
        'Triceps',
        'Upper Body',
        'Upper Arm'
    ),
    (
        'Triceps Dip',
        'Mount shoulder width dip bar, arms straight with shoulders above hands. Keep hips straight. Lower body until slight stretch is felt in shoulders. Push body up until arms are straight. Repeat.',
        'Triceps',
        'Upper Body',
        'Upper Arm'
    ),
    (
        'Dumbbell Curl',
        'Position two dumbbells to sides, palms facing in, arms straight. With elbows to sides, raise one dumbbell and rotate forearm until forearm is vertical and palm faces shoulder. Lower to original position and repeat with opposite arm. Continue to alternate between sides.',
        'Biceps',
        'Upper Body',
        'Upper Arm'
    ),
    /* Back */
    (
        'Dumbbell Bent-over Row',
        'Kneel over side of bench by placing knee and hand of supporting arm on bench. Position foot of opposite leg slightly back to side. Grasp dumbbell from floor. Pull dumbbell to up to side until it makes contact with ribs or until upper arm is just beyond horizontal. Return until arm is extended and shoulder is stretched downward. Repeat and continue with opposite arm.',
        'Back, General',
        'Core',
        'Back'
    ),
    (
        'Dumbbell Lying Row',
        'Lie chest down on elevated bench. Grasp dumbbells below. Pull dumbbells to sides until upper arm is just beyond horizontal or height of back. Return until arms are extended and shoulders are stretched downward. Repeat.',
        'Back, General',
        'Core',
        'Back'
    ),
    (
        'Inverted Row',
        'Lay on back under fixed horizontal bar. Grasp bar with wide overhand grip. Keeping body straight, pull body up to bar. Return until arms are extended and shoulders are stretched forward. Repeat.',
        'Back, General',
        'Core',
        'Back'
    ),
    (
        'Underhand Inverted Row',
        'Lay on back under fixed horizontal bar. Grasp bar with shoulder width underhand grip. Keeping body straight, pull body up to bar. Return until arms are extended and shoulders are stretched forward. Repeat.',
        'Back, General',
        'Core',
        'Back'
    ),
    (
        'Dumbbell Shrug',
        'Stand holding dumbbells to sides. Elevate shoulders as high as possible. Lower and repeat.',
        'Trapezius, Upper',
        'Core',
        'Back'
    ),
    (
        'Dumbbell Lying Shoulder External Rotation',
        'Lie on side with legs separated for support. Grasp dumbbell and position elbow against side and forearm across belly. Lift dumbbell by rotating shoulder. Return and repeat. Flip over and continue with opposite arm.',
        'Infraspinatus',
        'Core',
        'Back'
    ),
    (
        'Dumbbell Prone External Rotation',
        'Lie supine on bench with legs either on bench or down to each side. Grasp dumbbell with one hand and position forearm vertically with upper arm perpendicular to body. Lift dumbbell forward and upward by externally rotating shoulder. Return and repeat. Grasp with opposite hand, position bent arm out to side of body, and perform with other arm.',
        'Infraspinatus',
        'Core',
        'Back'
    ),
    /* Chest */
    (
        'Dumbbell Bench Press',
        'Sit down on bench with dumbbells resting on lower thigh. Kick weights to shoulder and lie back. Position dumbbells to sides of chest with bent arm under each dumbbell. Press dumbbells up with elbows to sides until arms are extended. Lower weight to sides of chest until slight stretch is felt in chest or shoulder. Repeat.',
        'Pectoralis Major, Sternal',
        'Core',
        'Chest'
    ),
    (
        'Dumbbell Decline Bench Press',
        'Sit down on decline bench with feet under leg brace and dumbbells resting on thigh. Lie back with dumbbells. Position dumbbells to sides of chest with bent arm under each dumbbell. Press dumbbells up with elbows to sides until arms are extended. Lower weight to sides of chest until slight stretch is felt in chest or shoulder. Repeat.',
        'Pectoralis Major, Sternal',
        'Core',
        'Chest'
    ),
    (
        'Dumbbell Decline Fly',
        'Grasp two dumbbells. Lie supine on decline bench. Support dumbbells above upper abdomen with arms fixed in slightly bent position. Internally rotate shoulders so elbows are to sides. Lower dumbbells to sides until chest muscles are stretched with elbows fixed. Bring dumbbells together in wide hugging motion until dumbbells are nearly together. Repeat.',
        'Pectoralis Major, Sternal',
        'Core',
        'Chest'
    ),
    (
        'Dumbbell Fly',
        'Grasp two dumbbells. Lie supine on bench. Support dumbbells above chest with arms fixed in slightly bent position. Internally rotate shoulders so elbows point out to sides. Lower dumbbells to sides until chest muscles are stretched with elbows fixed in slightly bent position. Bring dumbbells together in wide hugging motion until dumbbells are nearly together. Repeat.',
        'Pectoralis Major, Sternal',
        'Core',
        'Chest'
    ),
    (
        'Dumbbell Pullover',
        'Lie on upper back perpendicular to bench. Flex hips slightly. Grasp one dumbbell from behind or from side with both hands under inner plate of dumbbell. Position dumbbell over chest with elbows slightly bent. Keeping elbows slightly bent throughout movement, lower dumbbell over and beyond head until upper arms are in-line with torso. Pull dumbbell up and over chest. Repeat.',
        'Pectoralis Major, Sternal',
        'Core',
        'Chest'
    ),
    (
        'Push-up',
        'Lie prone on floor with hands slightly wider than shoulder width. Raise body up off floor by extending arms with body straight. Keeping body straight, lower body to floor by bending arms. Push body up until arms are extended. Repeat.',
        'Pectoralis Major, Sternal',
        'Core',
        'Chest'
    ),
    (
        'Dumbbell Incline Bench Press',
        'Sit down on incline bench with dumbbells resting on lower thigh. Kick weights to shoulders and lean back. Position dumbbells to sides of chest with upper arm under each dumbbell. Press dumbbells up with elbows to sides until arms are extended. Lower weight to sides of upper chest until slight stretch is felt in chest or shoulder. Repeat.',
        'Pectoralis Major, Clavicular',
        'Core',
        'Chest'
    ),
    (
        'Dumbbell Incline Fly',
        'Grasp two dumbbells. Lie supine on bench. Support dumbbells above upper chest with arms fixed in slightly bent position. Bend elbows slightly and internally rotate shoulders so elbows point out to sides. Lower dumbbells outward to sides of shoulders. Keep elbows fixed in slightly bent position. When a stretch is felt in chest or shoulders, bring dumbbells back together in hugging motion above upper chest until dumbbells are nearly together. Repeat.',
        'Pectoralis Major, Clavicular',
        'Core',
        'Chest'
    ),
    (
        'Decline Push-up',
        'Kneel on floor with bench or elevation behind body. Position hands on floor slightly wider than shoulder width. Place feet on bench or elevation. Raise body in plank position with body straight and arms extended. Keeping body straight, lower upper body to floor by bending arms. To allow for full descent, pull head back slightly without arching back. Push body up until arms are extended. Repeat.',
        'Pectoralis Major, Clavicular',
        'Core',
        'Chest'
    ),
    (
        'Pike Push-up',
        'Kneel on two benches positioned side by side slightly apart at end nearest head. Place hands on ends of benches. With forefeet on opposite ends of bench, raise rear end high up with arms, back, and knees straight. Lower head between ends of benches by bending arms. Push body back up to original position by extending arms. Repeat.',
        'Pectoralis Major, Clavicular',
        'Core',
        'Chest'
    ),
    (
        'Dumbbell Incline Shoulder Raise',
        'Sit down on incline bench with dumbbells resting on lower thigh. Kick weights to shoulders and lean back. Position dumbbells above shoulders with elbows extended. Raise shoulders toward dumbbells as high as possible. Lower shoulders to bench and repeat.',
        'Serratus Anterior',
        'Core',
        'Chest'
    ),
    /* Waist */
    (
        'Dumbbell Push Crunch',
        'With dumbbells in each hand, position feet under foot pad and lie supine on steep incline bench. Position dumbbells straight over shoulders. Flex waist to raise upper torso from bench, keeping low back on bench. Return until back of shoulders contact padded incline bench. Repeat.',
        'Rectus Abdominis',
        'Core',
        'Waist'
    ),
    (
        'Dumbbell Push Sit-up',
        'Position feet under foot pad and lie supine on flat or incline bench. Position dumbbells straight over shoulders. Raise torso from bench as high as possible by bending waist and hips. Keep weight positioned above shoulders. Achieve near upright posture (hip flexibility, incline, and initial hip position permitting). Return to original lying posture with back of shoulders, contacting padded incline board. Repeat.',
        'Rectus Abdominis',
        'Core',
        'Waist'
    ),
    (
        'Crunch',
        'Lie supine on mat with lower legs on bench. Place hands behind neck or head. Flex waist to raise upper torso from mat. Keep low back on mat and raise torso up as high as possible. Return until back of shoulders contact mat. Repeat.',
        'Rectus Abdominis',
        'Core',
        'Waist'
    ),
    (
        'Jack-knife Sit-up',
        'Sit on floor or mat. Lie supine with hands to sides. Simultaneously raise knees and torso until hips and knees are flexed. Return to starting position with waist, hips and knees extended. Repeat.',
        'Rectus Abdominis',
        'Core',
        'Waist'
    ),
    (
        'Hanging Leg-Hip Raise',
        'Stand below ab straps hanging from high bar. Place upper arms in straps and grasp straps above. Raise legs by flexing hips and knees until hips are fully flexed. Continue to raise knees toward shoulders by flexing waist. Return until waist, hips, and knees are extended downward. Repeat.',
        'Rectus Abdominis',
        'Core',
        'Waist'
    ),
    (
        'Incline Leg-Hip Raise',
        'Lie supine on incline board with torso elevated. Grasp feet hooks or sides of board by head for support. Raise legs by flexing hips and knees until hips are fully flexed. Continue to raise knees toward shoulders by flexing waist, raising hips from board. Return until waist, hips and knees are extended. Repeat.',
        'Rectus Abdominis',
        'Core',
        'Waist'
    ),
    (
        'Lying Leg-Hip Raise',
        'Lie supine on bench or floor. Grasp sides of bench for support. Raise legs by flexing hips while flexing knees until hips are fully flexed. Continue to raise knees toward shoulders by flexing waist, raising hips from board. Return until waist, hips and knees are extended. Repeat.',
        'Rectus Abdominis',
        'Core',
        'Waist'
    ),
    (
        'Vertical Leg-Hip Raise',
        'Position forearms on padded parallel bars with hands on handles, and back on vertical pad. Raise legs by flexing hips and knees until hips are fully flexed. Continue to raise knees toward shoulders by flexing waist, raising hips from back board. Return until waist, hips, and knees are extended. Repeat.',
        'Rectus Abdominis',
        'Core',
        'Waist'
    ),
    (
        'Incline Sit-up',
        'Hook feet under support and lie supine on incline bench with hips bent. Place hands behind neck or on side of neck. Raise torso from bench by bending waist and hips. Return until back of shoulders contact incline board. Repeat.',
        'Rectus Abdominis',
        'Core',
        'Waist'
    ),
    (
        'Inverted Sit-up',
        'Hang inverted from high bar with gravity boots on each leg. Lie supine with hands on floor over head. Raise trunk as high as possible by flexing hips and waist. Return to starting position. Repeat.',
        'Rectus Abdominis',
        'Core',
        'Waist'
    ),
    (
        'Sit-up',
        'Hook feet under foot brace or secure low overhang. Lie supine on floor or bench with hips bent. Place hands behind neck or on side of neck. Raise torso from bench by bending waist and hips. Return until back of shoulders contact incline board. Repeat.',
        'Rectus Abdominis',
        'Core',
        'Waist'
    ),
    (
        'Dumbbell 45° Side Bend',
        'Position side of thigh on padding and side of feet on leg padding or platform lip. Hold dumbbell straight downward with lower arm. Raise torso upward by lateral flexing waist. Lower torso by bending waist downward. Repeat. Position body facing opposite side and continue with opposite side.',
        'Obliques',
        'Core',
        'Waist'
    ),
    (
        'Dumbbell Side Bend',
        'Grasp dumbbell with arm straight to side. Bend waist to opposite side of dumbbell until slight stretch is felt. Lower to opposite side, same distance and repeat. Continue with opposite side.',
        'Obliques',
        'Core',
        'Waist'
    ),
    (
        'Angled Side Bridge',
        'Place forearm on padded elevated surface, positioned perpendicular to body. Position feet out away from elevated surface, one foot in front of other with hips and knees straight. Place free hand on upper hip and allow lower hip and waist to bend downward. Raise hips upward by lateral flexion of spine. Lower to original position and repeat. Repeat with opposite side.',
        'Obliques',
        'Core',
        'Waist'
    ),
    (
        'Lying Twist',
        'Lie on back on floor or mat with arms extended out to sides. Raise legs upward with knees slightly bent. Lower legs to one side until side of thigh is on floor. Raise and lower legs to opposite side. Repeat.',
        'Obliques',
        'Core',
        'Waist'
    ),
    (
        'Side Bridge',
        'Lie on side on mat. Place forearm on mat under shoulder perpendicular to body. Place upper leg directly on top of lower leg and straighten knees and hips. Raise hips upward by lateral flexion of spine. Lower to original position and repeat. Repeat with opposite side.',
        'Obliques',
        'Core',
        'Waist'
    ),
    (
        'Dumbbell Straight Leg Deadlift',
        'Stand with shoulder width or narrower stance. Grasp dumbbells to sides. With knees straight, lower dumbbells to top or sides of feet by bending hips. Allow hips to fall back and bend waist as dumbbell approaches feet. Lift dumbbells by extending hips and waist until standing upright. Pull shoulders back if rounded. Repeat.',
        'Erector Spinae',
        'Core',
        'Waist'
    ),
    (
        'Bird Dog',
        'Kneel on mat on all fours with legs and hands slightly apart. Raise arm out straight beside head while raising and extending leg on opposite side up out behind body. Lower arm and leg to floor to original position and repeat. Perform movement with opposite arm and leg.',
        'Erector Spinae',
        'Core',
        'Waist'
    ),
    /* Hips */
    (
        'Dumbbell Lunge',
        'Stand with dumbbells grasped to sides. Lunge forward with first leg. Land on heel then forefoot. Lower body by flexing knee and hip of front leg until knee of rear leg is almost in contact with floor. Return to original standing position by forcibly extending hip and knee of forward leg. Repeat by alternating lunge with opposite leg.',
        'Gluteus Maximus',
        'Lower Body',
        'Hips'
    ),
    (
        'Dumbbell Squat',
        'Stand with dumbbells grasped to sides. Squat down by bending hips back while allowing knees to bend forward slightly, keeping back straight and knees pointed same direction as feet. Descend until thighs are just past parallel to floor. Extend knees and hips until legs are straight. Return and repeat.',
        'Gluteus Maximus',
        'Lower Body',
        'Hips'
    ),
    (
        'Dumbbell Step-up',
        'Stand with dumbbells grasped to sides facing side of bench. Place foot of first leg on bench. Stand on bench by extending hip and knee of first leg and place foot of second leg on bench. Step down with second leg by flexing hip and knee of first leg. Return to original standing position by placing foot of first leg to floor. Repeat first step with opposite leg, alternating first steps between legs.',
        'Gluteus Maximus',
        'Lower Body',
        'Hips'
    ),
    (
        'Lunge',
        'Stand with hands on hips or clasped behind neck. Lunge forward with first leg. Land on heel, then forefoot. Lower body by flexing knee and hip of front leg until knee of rear leg is almost in contact with floor. Return to original standing position by forcibly extending hip and knee of forward leg. Repeat by alternating lunge with opposite leg.',
        'Gluteus Maximus',
        'Lower Body',
        'Hips'
    ),
    (
        'Reverse Hyper-extension',
        'Lay torso and waist on bench and grasp handles. Feet should be above floor with legs straight. Raise legs by extending hips as high as possible until legs are nearly straight. Lower legs to original position. Repeat.',
        'Gluteus Maximus',
        'Lower Body',
        'Hips'
    ),
    (
        'Single Leg Hip Bridge',
        'Lie on floor or mat. Place one leg straight and bend the other leg with foot flat on floor or mat. Place arms down on mat to each side of hips. Raise body by extending hip of bent leg, keeping extended leg and hip straight. Return to original position by lowering body with extended leg and hip straight. Repeat and continue with opposite sides.',
        'Gluteus Maximus',
        'Lower Body',
        'Hips'
    ),
    (
        'Squat',
        'Stand with arms extended forward. Squat down by bending hips back while allowing knees to bend forward slightly, keeping back straight and knees pointed same direction as feet. Descend until thighs are just past parallel to floor. Squat up by extending knees and hips until legs are straight. Return and repeat.',
        'Gluteus Maximus',
        'Lower Body',
        'Hips'
    ),
    (
        'Step-up',
        'Stand facing side of bench, step or platform. Place foot of first leg on bench. Stand on bench by extending hip and knee of first leg and place foot of second leg on bench. Step down with second leg by flexing hip and knee of first leg. Return to original standing position by placing foot of first leg to floor. Repeat first step with opposite leg, alternating first steps between legs.',
        'Gluteus Maximus',
        'Lower Body',
        'Hips'
    ),
    (
        'Dumbbell Lying Hip Abduction',
        'Lie on side on floor or mat. Extend top leg down straight and position lower leg back underneath. Grasping dumbbell with hand of arm furthest from floor, position dumbbell as low as possible on top side of thigh. Raise weighted leg up off ground as high as possible, keeping dumbbell positioned on side of upper thigh. Return to leg to floor and repeat. Repeat and continue with opposite leg.',
        'Hip Abductors',
        'Lower Body',
        'Hips'
    ),
    (
        'Side Bridge Hip Abduction',
        'Lie on side with legs straight, one leg on top of the other. Place forearm under shoulder perpendicular to body. Keeping side of bottom foot on ground, raise hips up off ground while raising upper leg upward away from lower leg. Return to original position and repeat. Continue with opposite leg.',
        'Hip Abductors',
        'Lower Body',
        'Hips'
    ),
    (
        'Lying Leg Raise (on bench)',
        'Lie supine on bench. Place hands under lower buttock on each side to support pelvis. Raise legs by flexing hips and knees until thighs are completely flexed. Return until hips and knees are extended. Repeat.',
        'Iliopsoas',
        'Lower Body',
        'Hips'
    ),
    (
        'Lying Straight Leg Raise',
        'Lie supine on bench or mat. Place hands under lower buttock on each side to support pelvis. Keeping knees straight, raise legs by flexing hips until hips are completely flexed. Return until hips and knees are extended. Repeat.',
        'Iliopsoas',
        'Lower Body',
        'Hips'
    ),
    (
        'Seated Leg Raise',
        'Sit on edge of bench with legs extended to floor. Place weight between ankles or use no weight. Grasp edge of bench. Lean torso back and balance body weight on edge of bench. Raise legs by flexing hips and knees while pulling torso slightly forward to maintain balance. Return by extending hips and knees and lean torso back to counter balance. Repeat.',
        'Iliopsoas',
        'Lower Body',
        'Hips'
    ),
    (
        'Lying Scissor Kick',
        'Lie supine on bench or mat. Place hands under lower buttock on each side to support pelvis. Raise one leg up vertical with knee nearly straight. If lying on floor, raise other leg slightly off of floor. Keeping knees nearly straight, simultaneously change positions of legs so vertical leg is lowered while lower leg is raised vertically. Continue alternating leg positions.',
        'Iliopsoas',
        'Lower Body',
        'Hips'
    ),
    /* Thighs */
    (
        'Lunge',
        'Stand with hands on hips or clasped behind neck. Lunge forward with first leg. Land on heel, then forefoot. Lower body by flexing knee and hip of front leg until knee of rear leg is almost in contact with floor. Return to original standing position by forcibly extending hip and knee of forward leg. Repeat by alternating lunge with opposite leg.',
        'Quadriceps',
        'Lower Body',
        'Thighs'
    ),
    (
        'Single Leg Squat (pistol)',
        'Stand with arms extended out in front. Balance on one leg with opposite leg extended forward off of ground. Squat down as far as possible while keeping leg elevated off of floor. Keep back as straight as possible and supporting knee pointed same direction as foot supporting. Raise body back up to original position until knee and hip of supporting leg is straight. Repeat and continue with opposite leg.',
        'Quadriceps',
        'Lower Body',
        'Thighs'
    ),
    (
        'Sissy Squat',
        'With shoulder width stance, grasp fixed bar or support at hip level with one arm. With hips and waist straight, bend knees to allow body to fall backwards as knees come forward. Allow heels to raise from floor. Lower body until knees are almost fully flexed or near floor. Return to original position by extending knees as heels return to floor.',
        'Quadriceps',
        'Lower Body',
        'Thighs'
    ),
    (
        'Split Squat',
        'Stand with hands on hips. Position feet far apart; one foot forward and other foot behind. Squat down by flexing knee and hip of front leg. Allow heel of rear foot to rise up while knee of rear leg bends slightly until it almost makes contact with floor. Return to original standing position by extending hip and knee of forward leg. Repeat. Continue with opposite leg.',
        'Quadriceps',
        'Lower Body',
        'Thighs'
    ),
    (
        'Squat',
        'Stand with arms extended forward. Squat down by bending hips back while allowing knees to bend forward, keeping back straight and knees pointed same direction as feet. Descend until thighs are just past parallel to floor. Squat up by extending knees and hips until legs are straight. Return and repeat.',
        'Quadriceps',
        'Lower Body',
        'Thighs'
    ),
    (
        'Step-up',
        'Stand facing side of bench, step or platform. Place foot of first leg on bench. Stand on bench by extending hip and knee of first leg and place foot of second leg on bench. Step down with second leg by flexing hip and knee of first leg. Return to original standing position by placing foot of first leg to floor. Repeat first step with opposite leg, alternating first steps between legs.',
        'Quadriceps',
        'Lower Body',
        'Thighs'
    ),
    (
        'Dumbbell Straight Leg Deadlift',
        'Stand with shoulder width or narrower stance. Grasp dumbbells to sides. With knees straight, lower dumbbells to top or sides of feet by bending hips. Bend waist as bar approaches feet. Lift dumbbells by extending hips and waist until standing upright. Pull shoulders back slightly if rounded. Repeat.',
        'Hamstrings',
        'Lower Body',
        'Thighs'
    ),
    (
        'Glute-Ham Raise (hands behind neck)',
        'Place ankles between ankle roller pads with feet on vertical platform and position knees on pad with lower thighs against large padded hump. Position behind neck. From upright position, lower body by straightening knees until body is horizontal. Continue to lower torso by bending hips until body is upside down. Raise torso by extending hips until fully extended. Continue to raise body by flexing knees until body is upright. Repeat.',
        'Hamstrings',
        'Lower Body',
        'Thighs'
    ),
    (
        'Inverse Leg Curl',
        'Adjust padded supports and kneel upright in apparatus. Position knees on near-upper side of padded hump, ankles between padded supports, and feet on platform. Place arms behind back, across chest, or bent beside head depending on desired intensity. Lower body until horizontal by straightening knees. Raise body by flexing knees only allowing hips to bend slightly. Repeat.',
        'Hamstrings',
        'Lower Body',
        'Thighs'
    ),
    (
        'Angled Side Bridge',
        'Place forearm on padded elevated surface, positioned perpendicular to body. Position feet out away from elevated surface, one foot in front of other with hips and knees straight. Place free hand on upper hip and allow lower hip and waist to bend downward. Raise hips upward by lateral flexion of spine. Lower to original position and repeat. Repeat with opposite side.',
        'Obliques',
        'Lower Body',
        'Thighs'
    ),
    (
        'Bent Knee Side Bridge',
        'Lie on side on mat. Place forearm on mat under shoulder perpendicular to body. Bend knees at a right angle. Place upper leg directly on top of lower leg and straighten hips. Raise hips upward by lateral flexion of spine. Lower to original position and repeat. Repeat with opposite side.',
        'Obliques',
        'Lower Body',
        'Thighs'
    ),
    (
        'Side Bridge',
        'Lie on side on mat. Place forearm on mat under shoulder perpendicular to body. Place upper leg directly on top of lower leg and straighten knees and hips. Raise hips upward by lateral flexion of spine. Lower to original position and repeat. Repeat with opposite side.',
        'Obliques',
        'Lower Body',
        'Thighs'
    ),
    /* Calves */
    (
        'Single Leg Forward Angled Calf Raise',
        'Stand facing mid-thigh to hip high vertical bar. Grasp bar with wide overhand grip. Step back so body is angled forward with body straight and arms extended approximately perpendicular to body. Feet should be pointed forward. Lift one leg to rear by bending knee. Raise heel by extending ankle as high as possible. Allow body to travel forward and upward in same direction as body is orientated. Lower heel allowing foot to come back down flat on floor. Repeat. Continue with opposite leg.',
        'Gastrocnemius',
        'Lower Body',
        'Calves'
    ),
    (
        'Reverse Calf Raise',
        'Position heels on forward edge of calf block or platform. Grasp support with other hand for balance. Pull forefoot of both feet up toward body as far as possible. Return by extending feet until toes are pointed downward. Repeat.',
        'Tibialis Anterior',
        'Lower Body',
        'Calves'
    ),
    (
        'Standing Calf Raise',
        'Position toes and balls of feet on calf block with arches and heels extending off. Place hand on support for balance. Raise heels by extending ankles as high as possible. Lower heels by bending ankles until calves are stretched. Repeat.',
        'Gastrocnemius',
        'Lower Body',
        'Calves'
    ),
    /* Cardio */
    (
        'Jogging or Running',
        'Go jogging or running',
        'Cardio',
        'Full Body',
        'Cardio'
    );