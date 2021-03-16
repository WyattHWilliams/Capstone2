import React, { useState } from 'react';

const useToggleLogin = () => {
    const [state, setState] = useState({
        username: '',
        isLoggedIn: false
    });
    const toggleState = (username, token) => {
        console.log(username, token);
        if (token) {
            window.localStorage.setItem('_token', token)
            setState(user => ({
                username: username,
                isLoggedIn: true
            }))
        } else {
            window.localStorage.setItem('_token', undefined)
            setState(user => ({
                username: '',
                isLoggedIn: false
            }))
        }
    }
    return [state, toggleState]
}

export default useToggleLogin