import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { username: "" } };

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialState.value;
        }
    }
});

export const { login, logout } = userSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

export default store;
