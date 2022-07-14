import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify"
import { addUserToLocalStorage, getUserFromLocalStorage, removeFromLocalStorage } from "../../utils/localStorage";

const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage(),
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            const { user } = payload
            state.isLoading = false
            state.user = user
            addUserToLocalStorage(user)
            toast.success(`Hello There ${user.name}`)
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            const { user } = payload
            state.isLoading = false
            state.user = user
            addUserToLocalStorage(user)
            toast.success(`Welcome Back ${user.name}`)
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        }
    }
})

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
    try {
        const resp = await customFetch.post('/auth/register', user)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
    try {
        const resp = await customFetch.post('/auth/login', user)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})


export default userSlice.reducer;

