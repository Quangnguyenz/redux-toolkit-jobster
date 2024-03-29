import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from '../assets/wrappers/JobsContainer'
import Loading from './Loading'
import Job from './Job'
import { getAllJobs } from '../features/allJobs/allJobSlice'
import { useEffect } from 'react'
import PageBtnContainer from './PageBtnContainer'


const JobsContainer = () => {
  const { jobs, isLoading, page, totalJobs, numOfPages, search, searchStatus, searchType, sort } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [
    page,
    search,
    searchStatus,
    searchType,
    sort
  ])

  if (isLoading) {
    return <Loading center />
  }
  if (jobs.length === 0) {
    return <Wrapper>
      <h2>No jobs to display...</h2>
    </Wrapper>
  }


  return (
    <Wrapper>
      <h5>{totalJobs} job{totalJobs > 1 && 's'} Found</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job}></Job>
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

export default JobsContainer