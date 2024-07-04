 'use client'
import { saveToStorage } from "@/lib/method"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface CartState  {
    cart: {
        productId: number
        name: string
        image: string
        quantity: number
        price: string
    }[]
}

const initialState: CartState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{
            productId: number
            name: string
            image: string
            quantity: number
            price: string
        }>) => {
            state.cart = [...state.cart, action.payload]
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart?.filter(item => item.productId !== action.payload)
            saveToStorage(state.cart)
        },
        adjustCart: (state, action) => {
            const {productId, type} = action.payload
            const index = state.cart.findIndex(item => item.productId === productId)
            state.cart[index].quantity = type === 'increment' ? state.cart[index].quantity + 1 : state.cart[index].quantity > 1 ? state.cart[index].quantity - 1 : state.cart[index].quantity
            saveToStorage(state.cart)
        },
        updateCartInState: (state, action) => {
            state.cart = action.payload
        }
    }
})

export const { addToCart, removeFromCart, adjustCart, updateCartInState } = cartSlice.actions

export default cartSlice.reducer