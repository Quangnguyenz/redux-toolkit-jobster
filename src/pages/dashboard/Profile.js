import React from 'react'
import { useState } from 'react'
import { FormRow } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Profile = () => {
    const { isLoading, user } = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        name: user?.name || '',
        email: user?.name || '',
        lastName: user?.name || '',
        location: user?.name || '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !lastName || !location) {
            toast.error('please fill out all fields')
        }
    }

    return (
        <h1>Profile</h1>
    )
}

export default Profile