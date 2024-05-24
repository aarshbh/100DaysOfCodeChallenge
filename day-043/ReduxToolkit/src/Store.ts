import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

interface userStateValue {
    username: string,
};

interface userState {
  value: userStateValue,

};



const initialState = { value: { username: "" } };

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    login: (state: userState, action: PayloadAction<userStateValue>) => {
      state.value = action.payload;
    },
    logout: (state: userState) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
