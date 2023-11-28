import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : 2,
    status : 'idle'
}


export const authSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{},
})

export const selectLoggedUser = (state) => state.auth.user

export default authSlice.reducer