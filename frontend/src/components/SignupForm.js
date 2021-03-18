import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import DiscipleApi from '../api_helpers/disciple_api';
import LoggedInContext from '../LoggedInContext';
import useFormFields from './hooks/useFormFields';

const SignupForm = () => {
    const { currentUser, toggleUserLogin } = useContext(LoggedInContext);
    const history = useHistory();
    const [formData, handleChange, resetForm] = useFormFields({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    })

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            let token = await DiscipleApi.register(formData);
            if (token != 'failure') {
                toggleUserLogin(formData.username, token);
                history.push('/');
            } else {
                alert('registration error!');
                console.log('registration error: registration failure');
                resetForm();
            }
        } catch {
            console.log('registration error!');
        }
    }

    return (
        <div className="SignupForm-Component">
            <form onSubmit={handleSubmit}>
                <ul style={{ listStyleType: 'none' }}>
                    <li>
                        <label htmlFor='username'>Username:</label>
                        <input
                            id='username'
                            type="text"
                            name="username"
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
                    <li>
                        <label htmlFor='fistName'>First Name:</label>
                        <input
                            id='firstName'
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input
                            id='lastName'
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label htmlFor='email'>Email:</label>
                        <input
                            id='email'
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </li>
                </ul>
                <button>submit</button>
            </form>
        </div>
    )
}

export default SignupForm;