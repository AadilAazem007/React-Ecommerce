import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCartData, saveCartData, removeCartProduct, updateCartQuanity } from "./cartAPI";

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

export const removeCartProductAsync = createAsyncThunk(
    'cart/removeCartProduct',
    async (id) => {
        const response = await removeCartProduct(id)
        return response.data
    }
)

export const updateCartQuanityAsync = createAsyncThunk(
    'cart/updateCartQuanity',
    async (item) => {
        const response = await updateCartQuanity(item)
        return response.data[0]
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
        .addCase(removeCartProductAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(removeCartProductAsync.fulfilled, (state, action) => {
            state.status = 'success'
            const index = state.products.findIndex(item=> item.id === action.payload.id)
            state.products.splice(index, 1)
        })
        .addCase(updateCartQuanityAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(updateCartQuanityAsync.fulfilled, (state, action) => {
            state.status = 'success'
            const index = state.products.findIndex(item=> item.id === action.payload.id)
            state.products[index] = action.payload
        })
    }
})

export const cartAllProducts = (state) => state.cart.products

export default cartSlice.reducer