'use client'
import { addPassword, setStep } from '@/redux/services/authSlice'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AuthPasswordOption = () => {
    const { phone, password, username } = useSelector((state) => state.auth)
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(addPassword(e.target.value))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        username? (''): dispatch(setStep('class'))
    }

    return (
        <div className='mt-6'>
            <label className='w-full  text-2xl font-bold text-gray-900 py-4'>
                Enter your password
            </label>

            <div className='mt-4 bg-white p-4 rounded relative'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    id='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={handleChange}
                    className='bg-white text-gray-500 text-sm font-bold rounded-lg w-full p-2.5 
             focus:outline-none focus:ring-0 relative'
                />
                <div
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-5 top-5'
                >
                    <Image
                        src={!showPassword ? '/eye-on.svg' : '/eye-off.svg'}
                        alt='toggle password visibility'
                        width={32}
                        height={32}
                        priority={true}
                        className='object-cover '
                    />
                </div>
            </div>
            <Link href={'/user/forgot-password'}>
                <p className='text-end text-gray-500 mt-4 font-semibold leading-loose'>
                    Forgot Password ?
                </p>
            </Link>
            <button
                type='button'
                disabled={!password}
                onClick={handleSubmit}
                className={`w-full h-[52px] mt-6 px-2.5 py-3.5 rounded-lg justify-center items-center gap-2 inline-flex font-semibold 
    ${
        password
            ? 'bg-sky-600 text-white hover:bg-sky-700 cursor-pointer'
            : 'bg-sky-200 text-white cursor-not-allowed'
    } mt-60`}
            >
                Submit
            </button>
            div
        </div>
    )
}

export default AuthPasswordOption
