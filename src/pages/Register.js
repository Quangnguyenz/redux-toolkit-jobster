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

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'login' : 'register'}</h3>

                {/* name */}
                <FormRow type="text" name="name" value={values.name} handleChange={handleChange} labelText="name" />

                {/* email */}
                <FormRow type="email" name="email" value={values.email} handleChange={handleChange} labelText="email" />

                {/* password */}
                <FormRow type="password" name="password" value={values.password} handleChange={handleChange} labelText="password" />

                <button type='submit' className='btn btn-block'>submit</button>

                <p>
                    {values.isMember ? 'Not A Member?' : 'Already A Member?'}
                    <button type="button" onClick={toggleMember} className="member-btn">
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register