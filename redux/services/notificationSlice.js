import { createSlice } from '@reduxjs/toolkit'
import { notificationsApi } from './notificationsApiSlice'

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        items: [],
    },
    reducers: {
        addNotification: (state, action) => {
            const exists = state.items.find((n) => n._id === action.payload._id)
            if (!exists) state.items.unshift(action.payload)
        },
        updateNotification: (state, action) => {
            const index = state.items.findIndex(
                (n) => n._id === action.payload._id,
            )
            if (index !== -1) state.items[index] = action.payload
        },
        setNotifications: (state, action) => {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            notificationsApi.endpoints.getNotifications.matchFulfilled,
            (state, { payload }) => {
                state.items = payload
            },
        )
    },
})

export const { addNotification, updateNotification, setNotifications } =
    notificationsSlice.actions

export default notificationsSlice.reducer
