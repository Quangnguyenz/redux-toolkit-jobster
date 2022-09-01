import React from 'react'
import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const AddJobs = () => {
  const { isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId } = useSelector(store => store.job)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      toast.error('please fill out all fields')
    }
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value);
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow type="text" name='position' value={position} handleChange={handleJobInput}></FormRow>
          {/* company */}
          <FormRow type="text" name='company' value={company} handleChange={handleJobInput}></FormRow>
          {/* job location */}
          <FormRow type="text" name='jobLocation' value={jobLocation} handleChange={handleJobInput}></FormRow>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJobs