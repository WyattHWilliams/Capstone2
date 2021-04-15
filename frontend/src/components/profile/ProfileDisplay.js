import { React } from 'react';
import { useSelector } from 'react-redux';

function ProfileDisplay({ profile, logout, editProfile, generateSchedule }) {
    return (
        <div className="ProfileDisplay-Component">
            <h3>Username: {profile.username}</h3>
            <p>Diet: {profile.diet} <button onClick={() => editProfile()}>Edit</button></p>
            <p>Food Restrictions: (PLANNED) <button onClick={() => editProfile()}>Edit</button></p>
            <p>Exercise Restrictions: (PLANNED) <button onClick={() => editProfile()}>Edit</button></p>
            <hr></hr>
            <div className="ProfileDisplay-Logout-Subcomponent">
                <button onClick={() => generateSchedule()}>Generate My Plan!</button>
            </div>
            <hr></hr>
            <div className="ProfileDisplay-Logout-Subcomponent">
                <button onClick={() => logout()}>Logout</button>
            </div>
        </div>
    );
}

export default ProfileDisplay;