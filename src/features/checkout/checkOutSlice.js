import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveAddress, getAddress } from "./checkoutAPI";

const initialState = {
    addresses: [],
    status:'idle'
}

export const saveAddressAsync = createAsyncThunk(
    'checkout/saveAddress',
    async (details) => {
        const response = await saveAddress(details)
        return response.data
    }
)

export const getAddressAsync = createAsyncThunk(
    'checkout/getAddress',
    async (id) => {
        const response = await getAddress(id)
        return response.data
    }
)

const checkOutSlice = createSlice({
    name:'checkout',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(saveAddressAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(saveAddressAsync.fulfilled, (state, action) => {
            state.status = 'Success'
            state.addresses = action.payload
        })
        .addCase(getAddressAsync.pending, (state) => {
            state.status = 'Pending'
        })
        .addCase(getAddressAsync.fulfilled, (state, action) => {
            state.status = 'Success'
            state.addresses = action.payload
        })
    }
})

export const checkoutAddress = (state) => state.checkout.addresses

export default checkOutSlice.reducer