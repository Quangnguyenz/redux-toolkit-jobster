import React from 'react';
import { useState, useEffect } from 'react';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

function Register() {
    const [values, setValues] = useState(initialState)

    const handleChance = (e) => {
        console.log(e.target)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <div>Register</div>
    )
}

export default Register