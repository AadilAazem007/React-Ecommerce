import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveOrderData } from "./orderAPI";

const initialState = {
    orders:[],
    status:'idle'
}

export const saveOrderDataAsync = createAsyncThunk(
    'order/saveOrderData',
    async (details) => {
        console.log(details)
        const response = await saveOrderData(details)
        return response.data
    }
)

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(saveOrderDataAsync.pending, (state)=>{
            state.status = 'Pending'
        })
        .addCase(saveOrderDataAsync.fulfilled, (state, action)=>{
            state.status = 'Success'
            state.orders = action.payload
        })
    }

})

export default orderSlice.reducer