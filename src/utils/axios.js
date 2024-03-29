import axios from 'axios';
import { clearStore } from '../features/user/userSlice';


const customFetch = axios.create({
    baseURL: 'http://jobify-prod.herokuapp.com/api/v1/toolkit',
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
    if (error.response.status === 401) {
        thunkAPI.dispatch(clearStore)
        return thunkAPI.rejectWithValue('Unauthorized! Logging out')
    }
    return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch;

