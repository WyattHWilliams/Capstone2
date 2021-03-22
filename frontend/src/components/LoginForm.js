import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import DiscipleApi from '../api_helpers/disciple_api';
import { setCurrentUserData, setCurrentUserLoggedIn } from './actions/userActionCreators';
import useFormFields from './hooks/useFormFields';

const LoginForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, handleChange, resetForm] = useFormFields({
        username: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let token = await DiscipleApi.login(formData);
            if (token != 'unauthorized') {
                await dispatch(setCurrentUserLoggedIn(formData.username, token));
                await dispatch(setCurrentUserData(formData.username));
                console.log('going home');
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
        <div className="LoginForm-Component">
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input
                    id='username'
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                />
                <label htmlFor='password'>Password:</label>
                <input
                    id='password'
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button>login</button>
            </form>
        </div>
    )
}

export default LoginForm;