import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { setCurrentUserLoggedOut, updateProfileDiet } from '../../actions/profileActionCreators';
import { useHistory } from 'react-router';

import SpoonacularApi from '../../api_helpers/spoonacular_api';
import { setTodoList } from '../../actions/calendarActionCreators';

import ProfileDisplay from './ProfileDisplay';
import ProfileQuestions from './ProfileQuestions';
import './Profile.css'
import WorkoutApi from '../../api_helpers/discipleWorkouts_api';

function ProfileBar() {
    const [editingProfile, toggleEditingProfile] = useState(true);
    const profile = useSelector(store => store.profile);
    const dispatch = useDispatch();
    const history = useHistory();

    async function logout() {
        dispatch(setCurrentUserLoggedOut());
        history.push('/');
    }

    async function editProfile() {
        toggleEditingProfile(!editingProfile);
    }

    async function generateSchedule() {
        await SpoonacularApi.getMealPlan(profile.diet, profile.username);
        await WorkoutApi.getWorkoutPlan(profile.username);
        await dispatch(setTodoList(profile.username));
    }

    // dispatch(updateProfileDiet(profile.username));

    return (
        <CSSTransition in={editingProfile}
            timeout={500}
            classNames="editing">
            <div className={editingProfile == false ? "ProfileBar-Component editing-exit-done" : "ProfileBar-Component"}>
                <h2>Disciple</h2>
                <hr></hr>
                {editingProfile == true ?
                    <>
                        <ProfileDisplay profile={profile} logout={logout} editProfile={editProfile} generateSchedule={generateSchedule} />
                    </> :
                    <>
                        <ProfileQuestions profile={profile} editProfile={editProfile} />
                    </>
                }
            </div>
        </CSSTransition>
    );
}

export default ProfileBar;