import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AllBrandList,getSingleBrandData } from "./brandAPI";

const initialState = {
    brands : [],
    products:[],
    status: 'idle'
}

export const AllBrandListAsync = createAsyncThunk(
    'brand/AllBrandList',
    async () => {
        const response = await AllBrandList()
        return response.data
    }
)

export const getSingleBrandDataAsync = createAsyncThunk(
    'brand/getSingleBrandData',
    async (brand) => {
        const response = await getSingleBrandData(brand)
        return response.data
    }
)

export const brandSlice = createSlice({
    name : 'brand',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(AllBrandListAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(AllBrandListAsync.fulfilled, (state, action) => {
            state.status = 'Success'
            state.brands = action.payload
        })
        .addCase(getSingleBrandDataAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(getSingleBrandDataAsync.fulfilled, (state, action) => {
            state.status = 'Success'
            state.products = action.payload
        })
    }
})

export const selectAllBrand = (state) => state.brand.brands
export const selectSingleBrand = (state) => state.brand.products

export default brandSlice.reducer