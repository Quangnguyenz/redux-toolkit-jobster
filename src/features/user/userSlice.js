import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const initialState = {
    isLoading: false,
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
})

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
    try {
        const resp = await customFetch.post('/auth/testingRegister', user)
        console.log(resp);
    } catch (error) {
        console.log(error.response);
    }
})

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
    console.log(`Login User ${JSON.stringify(user)}`);
})

export default userSlice.reducer;

