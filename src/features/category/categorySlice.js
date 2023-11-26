import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AllCategoryList,getSingleCategoryData } from "./categoryAPI";

const initialState = {
    categories : [],
    products:[],
    status: 'idle'
}

export const AllCategoryListAsync = createAsyncThunk(
    'category/AllCategoryList',
    async () => {
        const response = await AllCategoryList()
        return response.data
    }
)

export const getSingleCategoryDataAsync = createAsyncThunk(
    'category/getSingleCategoryData',
    async (category) => {
        const response = await getSingleCategoryData(category)
        return response.data
    }
)

export const categorySlice = createSlice({
    name : 'category',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(AllCategoryListAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(AllCategoryListAsync.fulfilled, (state, action) => {
            state.status = 'Success'
            state.categories = action.payload
        })
        .addCase(getSingleCategoryDataAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(getSingleCategoryDataAsync.fulfilled, (state, action) => {
            state.status = 'Success'
            state.products = action.payload
        })
    }
})

export const selectAllCategory = (state) => state.category.categories
export const selectSingleCategory = (state) => state.category.products

export default categorySlice.reducer