import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

export const fetchCountAsync = createAsyncThunk(
    'counter/fetchCounter',
    async (amount) =>{
        const response = await fetchCount(amount)
        return response.data;
    }
)

const initialState = {
    value : 0,
    status : 'idle'
}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers: {
        increment : (state) => {
            state.value += 1
        },
        decrement : (state) => {
            state.value -= 1
        },
        incrementByAmount : (state, action) => {
            state.value += action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchCountAsync.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(fetchCountAsync.fulfilled, (state, action) => {
            state.status = 'idle'
            state.value += action.payload
        })
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state) => state.count.value 
export default counterSlice.reducer