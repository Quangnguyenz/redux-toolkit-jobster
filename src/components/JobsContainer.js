import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from '../assets/wrappers/JobsContainer'
import Loading from './Loading'
import Job from './Job'
const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()
  if (isLoading) {
    return
    <Loading />
  }
  if (jobs.length === 0) {
    return <Wrapper>
      <h2>No jobs to display...</h2>
    </Wrapper>
  }
  return (
    <Wrapper>
      <h5>Job Info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          console.log(job);
          return <Job key={job._id} {...job}></Job>
        })}
      </div>
    </Wrapper>
  )
}

export default JobsContainer