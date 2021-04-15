import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import useFormFields from '../../hooks/useFormFields';
import DiscipleApi from '../../api_helpers/disciple_api';
import { setCurrentUserLoggedIn } from '../../actions/profileActionCreators';
import { updateProfileDiet } from '../../actions/profileActionCreators';

const Login = () => {
    const profile = useSelector(store => store.profile);
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, handleChange, resetForm] = useFormFields({
        username: '',
        password: ''
    })

    if (profile.isLoggedIn) history.push('/home');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let token = await DiscipleApi.login(formData);
            console.log(token)
            if (token != 'unauthorized') {
                await dispatch(setCurrentUserLoggedIn(formData.username, token));
                history.push('/home');
            } else {
                alert('incorrect username or password');
                console.log('login error: unauthorized');
                resetForm();
            }
        } catch (err) {
            alert('login error!');
            console.log('login error:', err);
        }
    }

    return (
        <div className="Login-Component">
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor='username'>Username:</label>
                        <input
                            id='username'
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor='password'>Password:</label>
                        <input
                            id='password'
                            type="text"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </li>
                </ul>
                <button>login</button>
            </form>
        </div>
    )
}

export default Login;