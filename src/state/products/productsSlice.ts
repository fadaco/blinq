'use client'
import { ApartmentProps } from "@/lib/constant"
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface ProductState {
    products: ApartmentProps[]
    loading: boolean
    product: ApartmentProps | undefined
}

const initialState: ProductState = {
    products: [],
    loading: false,
    product: undefined,
}

export const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(fetchProducts.pending, (state: ProductState) => {
            state.loading = true
        }).addCase(fetchProducts.fulfilled, (state: ProductState, action: PayloadAction<ApartmentProps[]>) => {
            state.products = action.payload
            state.loading = false
        })

        builder.addCase(fetchProductsByCategoryId.pending, (state: ProductState) => {
            state.loading = true
        }).addCase(fetchProductsByCategoryId.fulfilled, (state: ProductState, action: PayloadAction<ApartmentProps[]>) => {
            state.products = action.payload
            state.loading = false
        })

        builder.addCase(fetchProductById.pending, (state: ProductState) => {
            state.loading = true
        }).addCase(fetchProductById.fulfilled, (state: ProductState, action: PayloadAction<ApartmentProps>) => {
            state.product = action.payload
            state.loading = false
        })
    }
})

export const fetchProducts: any = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await fetch('/data.json')
        const data = await response.json()
        return data
    }
)

export const fetchProductsByCategoryId: any = createAsyncThunk(
    "products/fetchProductsByCategoryId",
    async (categoryId) => {
        const response = await fetch('/data.json')
        const data = await response.json()
        return data.filter((item: ApartmentProps) => item.category == Number(categoryId))
    }
)

export const fetchProductById: any = createAsyncThunk(
    "products/fetchProductById",
    async (productId) => {
        const response = await fetch('/data.json')
        const data = await response.json()
        return data.find((item: ApartmentProps) => item.id == Number(productId))
    }
)


export default productsSlice.reducer