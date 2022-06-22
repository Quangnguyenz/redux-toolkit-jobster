import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
    }
})
