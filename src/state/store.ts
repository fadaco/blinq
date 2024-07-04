'use client'
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productReducer from "./products/productsSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch