import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct, getSingleProduct } from "./productAPI";

const initialState = {
    products : [],
    product: [],
    status : 'idle'
}

export const fetchAllProductAsync = createAsyncThunk(
    'product/fetchAllProduct',
    async () => {
        const response = await fetchAllProduct()
        return response.data
    }
)

export const getSingleProductAsync = createAsyncThunk(
    'product/getSingleProduct',
    async (id) => {
        const response = await getSingleProduct(id)
        return response.data
    }
)

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProductAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
            state.status = 'success'
            state.products = action.payload
        })
        .addCase(getSingleProductAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(getSingleProductAsync.fulfilled, (state, action) => {
            state.status = 'success'
            state.product = action.payload
        })
    }
})

export const selectAllProducts = (state) => state.product.products
export const selectSingleProduct = (state) => state.product.product

export default productSlice.reducer