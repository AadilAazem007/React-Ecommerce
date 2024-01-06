import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveUserData } from "./authAPI";

const initialState = {
    user : [],
    status : 'idle'
}

export const saveUserDataAsync = createAsyncThunk(
    'user/saveUserData',
    async (details) =>{
        const response = await saveUserData(details)
        console.log(response.data)
        return response.data
    }
)


export const authSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(saveUserDataAsync.pending, (state)=>{
            state.status = "Pending"
        })
        .addCase(saveUserDataAsync.fulfilled, (state, action)=>{
            state.status = "Success"
            state.user = action.payload
        })
    }
})

export const selectLoggedUser = (state) => state.auth.user

export default authSlice.reducer