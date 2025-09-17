'use Client'
import { resetState } from '@/redux/services/authSlice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'

const AuthSuccessOption = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    return (
        <div className='h-full p-10'>
            <div className='my-10 flex flex-col justify-center px-7 h-full'>
                <Image
                    src={'/signup-success.gif'}
                    alt='successful signup'
                    width={150}
                    height={150}
                    priority
                    className='object-contain my-3 mx-auto'
                />
                <h1 className='text-2xl font-bold text-black mx-auto mb-3'>
                    Congratulations!
                </h1>
                <p className='font-md text-gray-700 mx-auto text-center'>
                    Your account has been created successfully
                </p>
            </div>
            <button
                onClick={() => {
                    dispatch(resetState())
                    
                    router.push('/')
                }}
                className={`w-full h-[52px]  px-2.5 py-3.5 rounded-lg justify-center items-center gap-2 inline-flex font-semibold  bg-sky-600 text-white hover:bg-sky-700 cursor-pointer mt-32`}
            >
                Start
            </button>
        </div>
    )
}

export default AuthSuccessOption
