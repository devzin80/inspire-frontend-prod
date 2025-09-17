'use client'
import { addPhone, addUsername, setStep } from '@/redux/services/authSlice'
import { useSendOtpMutation } from '@/redux/services/userApiSlice'

import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AuthPhoneOption = () => {
    const { phone } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [sendOtp] = useSendOtpMutation()

    const handleChange = (e) => {
        dispatch(addPhone(e.target.value))
    }

    const handlePhoneSubmit = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/find-user?phone=${phone}`,
            )
            const userData = await res.json()

            if (!userData?.success && userData?.code === 5000) {
                // user not found, go to OTP step

                dispatch(setStep('otp'))
                await sendOtp(phone)
            } else if (userData?.success) {
                // user exists, go to password step
                dispatch(setStep('password'))
                dispatch(addUsername(userData.user.username))
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className='w-full h-full flex flex-col items-center'>
            <Image
                src={'/default-logo.svg'}
                alt='log in'
                width={250}
                height={100}
                priority={true}
                className='object-contain mb-6 '
            />

            <label className='w-full mb-2 text-base font-medium text-gray-900 p-4'>
                Enter your phone number
            </label>
            <div className='flex gap-3 justify-start'>
                <div className=' bg-white py-4 px-6 text-center font-bold rounded flex items-center text-gray-500'>
                    <p>+88</p>
                </div>
                <div className='bg-white p-4 rounded'>
                    <input
                        type='text'
                        name='phone'
                        id='phone'
                        placeholder='Enter phone number'
                        value={phone}
                        onChange={handleChange}
                        className='bg-white text-gray-500 text-sm font-bold rounded-lg w-full p-2.5 
                                         focus:outline-none focus:ring-0'
                    />
                </div>
            </div>
            <button
                type='button'
                disabled={!phone}
                onClick={handlePhoneSubmit}
                onTouchStart={handlePhoneSubmit}
                className={`w-full h-[52px] mt-6 px-2.5 py-3.5 rounded-lg justify-center items-center gap-2 inline-flex font-semibold 
                                ${
                                    phone
                                        ? 'bg-sky-600 text-white hover:bg-sky-700 cursor-pointer'
                                        : 'bg-sky-200 text-white cursor-not-allowed'
                                } mt-40`}
            >
                Continue
            </button>
        </div>
    )
}

export default AuthPhoneOption
