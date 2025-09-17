import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null, // user object (id, name, email, etc.)
    token: null, // auth token (JWT or session token)
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        logout: (state) => {
            state.user = null
            state.token = null
        },
        updateUser: (state, action) => {
            // merge updates into current user
            if (state.user) {
                state.user = { ...state.user, ...action.payload }
            }
        },
    },
})

export const { login, logout, updateUser } = userSlice.actions
export default userSlice.reducer
