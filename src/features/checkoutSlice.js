import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shipping: [],
    payment: null
}

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        addAddress: (state, action) => {
            state.shipping = [...state.shipping, action.payload]
        }
    }
})

export const { addAddress } = checkoutSlice.actions

export default checkoutSlice.reducer