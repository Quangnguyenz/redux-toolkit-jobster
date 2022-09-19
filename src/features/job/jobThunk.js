import customFetch from "../../utils/axios";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobSlice";
import { logoutUser } from "../user/userSlice";
import { clearValue } from "./jobSlice";

export const createJobThunk = async (job, thunkAPI) => {
    try {
        const resp = await customFetch.post('/jobs', job, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            }
        })
        thunkAPI.dispatch(clearValue())
    } catch (error) {
        if (error.response.status === 401) {
            thunkAPI.dispatch(logoutUser())
            return thunkAPI.rejectWithValue('Unauthorized! Logging out')
        }
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}
export const deleteJobThunk = async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    try {
        const resp = await customFetch.delete(`/jobs/${jobId}`, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            }
        })
        thunkAPI.dispatch(getAllJobs())
        return resp.data.msg
    } catch (e) {
        thunkAPI.dispatch(hideLoading())
        return thunkAPI.rejectWithValue(e.response.data.msg)
    }
}
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
    try {
        const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            }
        })
        thunkAPI.dispatch(clearValue())
        return resp.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data.msg)
    }

}