import React from 'react'
import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, clearFilter } from '../features/allJobs/allJobSlice';

const SearchContainer = () => {
    const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector(store => store.allJobs)
    const { jobTypeOptions, statusOptions } = useSelector(store => store.job)
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        if (isLoading) {
            return
        }
        dispatch(handleChange({ name: e.target.name, value: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Wrapper>
            <form className='form'>
                <h4>search form</h4>
                <div className="form-center">
                    {/* search position */}
                    <FormRow type='text' name='search' value={search} handleChange={handleSearch}></FormRow>
                    {/* search by status */}
                    <FormRowSelect labelText='status' name='searchStatus' value={searchStatus} handleChange={handleSearch} list={['all', ...statusOptions]}></FormRowSelect>
                    {/* search by type */}
                    <FormRowSelect labelText='type' name='searchType' value={searchType} handleChange={handleSearch} list={['all', ...jobTypeOptions]}></FormRowSelect>
                    {/* sort */}
                    <FormRowSelect name='sort' value={sort} handleChange={handleSearch} list={sortOptions}></FormRowSelect>
                    <button className='btn btn-block btn-danger' disabled={isLoading} onClick={handleSubmit}>submit</button>
                </div>
            </form >
        </Wrapper>
    )
}

export default SearchContainer