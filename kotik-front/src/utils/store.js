import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slices/auth";
import productReducer from "../slices/products"
import cartReducer from "../slices/cart"
import logger from 'redux-logger'

const reducer = {
    products: productReducer,
    auth: authReducer,
    cart: cartReducer
}
const store = configureStore({
    reducer: reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export default store;