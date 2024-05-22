import { configureStore , createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "User",
    initialState: { value : { userName : " " }  },
    reducers :{
        login: (state , action) => {
            state.value = action.payload;
        },

    }

})




export default Store = configureStore({});
