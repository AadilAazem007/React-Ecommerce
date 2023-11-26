import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/products/productSlice";
import categoryReducer from '../features/category/categorySlice'
import brandReducer from '../features/brand/brandSlice'

const store = configureStore({
    reducer  : {
        count : counterReducer,
        product : productReducer,
        category: categoryReducer,
        brand: brandReducer
    }
})

export default store