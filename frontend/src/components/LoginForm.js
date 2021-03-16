import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import LoggedInContext from '../LoggedInContext';
import useFormFields from './hooks/useFormFields';

const LoginForm = () => {
    const history = useHistory();
    const { currentUser, toggleUserLogin } = useContext(LoggedInContext);
    const [formData, handleChange, resetForm] = useFormFields({
        username: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // make api call;
            let token = 'authorized';
            if (token != 'unauthorized') {
                console.log(formData.username)
                toggleUserLogin(formData.username, token);
                console.log(currentUser.isLoggedIn);
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