import React from 'react';
import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

function Register() {
    const [values, setValues] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target.name)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3>login</h3>
                <FormRow />
                <button type='submit' className='btn btn-block'>submit</button>
            </form>
        </Wrapper>
    )
}

export default Register