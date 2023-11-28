import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCartData, saveCartData } from "./cartAPI";
import { selectLoggedUser } from "../auth/authSlice";

const initialState = {
    items : [],
    products : [],
    status : 'idle'
}

export const saveCartDataAsync = createAsyncThunk(
    'cart/saveCartData',
    async (item) => {
        const response = await saveCartData(item)
        return response.data
    }
)

export const getAllCartDataAsync = createAsyncThunk(
    'cart/getAllCartData',
    async (id) => {
        const response = await getAllCartData(id)
        return response.data
    }
)

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(saveCartDataAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(saveCartDataAsync.fulfilled, (state, action) => {
            state.status = 'success'
            state.items.push(action.payload)
        })
        .addCase(getAllCartDataAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(getAllCartDataAsync.fulfilled, (state, action) => {
            state.status = 'success'
            state.products = action.payload
        })
    }
})

export const cartAllProducts = (state) => state.cart.products

export default cartSlice.reducer