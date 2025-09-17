import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addDetails: (state, action) => {
            // merge payload into state
            Object.assign(state, action.payload)
        },
        clearDetails: () => {
            return {} // return fresh empty object
        },
    },
})

export const { addDetails, clearDetails } = profileSlice.actions
export default profileSlice.reducer
