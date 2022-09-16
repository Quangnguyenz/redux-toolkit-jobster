import React from 'react'
import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { handleChange, clearValue, createJob } from '../../features/job/jobSlice';
import { useEffect } from 'react';

const AddJobs = () => {
  const { isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId } = useSelector(store => store.job)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      toast.error('please fill out all fields')
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  useEffect(() => {
    if (!isEditing) {

      dispatch(handleChange({
        name: 'jobLocation', value: user.location
      }))
    }
  }, [])

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow type="text" name='position' value={position} labelText='position' handleChange={handleJobInput}></FormRow>
          {/* company */}
          <FormRow type="text" name='company' value={company} labelText='company' handleChange={handleJobInput}></FormRow>
          {/* job location */}
          <FormRow type="text" name='jobLocation' value={jobLocation} handleChange={handleJobInput} labelText='Job Location'></FormRow>
          {/* status */}
          <FormRowSelect name="status" value={status} handleChange={handleJobInput} list={statusOptions} />
          {/* job type */}
          <FormRowSelect name="jobType" value={jobType} handleChange={handleJobInput} list={jobTypeOptions} labelText='Job Type' />
          <div className="btn-container">
            <button type='button' className='btn btn-block clear-btn' onClick={() => dispatch(clearValue())}>Clear</button>
            <button type='submit' className='btn btn-block submit-btn' onClick={handleSubmit} disabled={isLoading}>Submit</button>
          </div>
        </div>
      </form >
    </Wrapper >
  )
}

export default AddJobs