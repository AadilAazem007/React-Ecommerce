import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/products/productSlice";
import categoryReducer from '../features/category/categorySlice'
import brandReducer from '../features/brand/brandSlice'
import CartReducer from '../features/cart/cartSlice'
import AuthReducer from '../features/auth/authSlice'
import CheckoutReducer from '../features/checkout/checkOutSlice'

const store = configureStore({
    reducer  : {
        count : counterReducer,
        product : productReducer,
        category: categoryReducer,
        brand: brandReducer,
        cart: CartReducer,
        auth: AuthReducer,
        checkout: CheckoutReducer
    }
})

export default store