import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import useFormFields from '../../hooks/useFormFields';

const Signup = () => {
    const profile = useSelector(store => store.profile);
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, handleChange, resetForm] = useFormFields({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    })

    if (profile.isLoggedIn) history.push('/home');

    async function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="Signup-Component">
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

export default Signup;