import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    phone:'',
    username:'',
    password:'',
    otp:'',
    SelectedClass:'',
    step:'phone' // phone, otp, password, class, success

}
 const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        addPhone: (state,action) => {
            state.phone = action.payload
        },
        addPassword: (state,action) => {
            state.password = action.payload
        },
        addUsername: (state, action) => {
            state.username = action.payload
        },
        addOtp : (state, action) => {
            state.otp = action.payload
        },
        addClass : (state, action) => {
            state.SelectedClass = action.payload
        },

        setStep: (state, action) => {
            state.step = action.payload
        },

        resetState: () => initialState

    }
})

export const {
    addPhone,
    addUsername,
    addClass,
    addOtp,
    addPassword,
    setStep,
    resetState,
} = authSlice.actions

export default authSlice.reducer
