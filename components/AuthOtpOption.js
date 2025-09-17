'use client'
import React, { useState } from 'react'
import OtpInput from './OtpComponent'
import { useDispatch, useSelector } from 'react-redux'
import { addOtp, setStep } from '@/redux/services/authSlice'
import { useVerifyOtpMutation } from '@/redux/services/userApiSlice'

const AuthOtpOption = () => {
    const { phone, otp } = useSelector((state) => state.auth)
    const [verifyOtp] = useVerifyOtpMutation()
    const [otpErrorCount, setOtpErrorCount] = useState(0)

    const dispatch = useDispatch()
    const handleOtpChange = (value) => {
        // e.preventDefault()
        dispatch(addOtp(value))
    }
    const handleResend = () => {
        dispatch(addOtp(''))
    }
    const handleOtpSubmit = async () => {
        try {
            const isValidOtp = await verifyOtp({ phone, otp }).unwrap()

            if (isValidOtp.success && isValidOtp.code == 5000) {
                dispatch(addOtp(''))
                dispatch(setStep('password'))
                setOtpErrorCount(0)
            } else {
                setOtpErrorCount((prev) => prev + 1)
            }
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <div className='p-4'>
            <h1 className='text-2xl  font-bold text-black mb-4'>
                Confirm Your Phone Number
            </h1>
            <p className='text-base text-gray-500 font-semibold'>
                Enter the 4-digit code sent to
            </p>
            <p className='text-base font-bold leading-loose mb-9'>{phone}</p>
            <OtpInput
                key={otpErrorCount}
                name='otp'
                length={4}
                value={otp}
                onChange={handleOtpChange}
                onResend={handleResend}
                otpErrorCount={otpErrorCount}
            />
            <button
                type='button'
                disabled={!otp}
                onClick={handleOtpSubmit}
                onTouchStart={handleOtpSubmit}
                className={`w-full h-[52px] mt-6 px-2.5 py-3.5 rounded-lg justify-center items-center gap-2 inline-flex font-semibold 
        ${
            otp
                ? 'bg-sky-600 text-white hover:bg-sky-700 cursor-pointer'
                : 'bg-sky-200 text-white cursor-not-allowed'
        } mt-40`}
            >
                Submit
            </button>
        </div>
    )
}

export default AuthOtpOption
