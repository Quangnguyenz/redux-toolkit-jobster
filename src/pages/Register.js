import React from 'react';
import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

function Register() {
    const [values, setValues] = useState(initialState)
    const { user, isLoading } = useSelector(store => store.user)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(`${name}: ${value}`)
        setValues({ ...values, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values
        if (!email || !password || (!isMember && !name)) {
            toast.error('Please fill required info');
        }
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
                {!values.isMember &&
                    <FormRow type="text" name="name" value={values.name} handleChange={handleChange} labelText="name" />}
                {/* email */}
                <FormRow type="email" name="email" value={values.email} handleChange={handleChange} labelText="email" />

                {/* password */}
                <FormRow type="password" name="password" value={values.password} handleChange={handleChange} labelText="password" />

                <button type='submit' className='btn btn-block'>submit</button>

                <p>
                    {values.isMember ? 'Already a member?' : 'Not a Member?'}
                    <button type="button" onClick={toggleMember} className="member-btn">
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register