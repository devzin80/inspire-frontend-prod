'use client'
import React from 'react'
import TopNavPadding from './TopNavPadding'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { setStep } from '@/redux/services/authSlice'


const BackBtn = () => {
    const router = useRouter()
    const step = useSelector(state => state.auth.step)
    const dispatch = useDispatch()
    // console.log(step);
    const handleBackBtn = () => {
        if (step === 'otp') {
            dispatch(setStep('phone'))
        } else if (step === 'password') {
            dispatch(setStep('otp'))
        } else {
            router.back()
        }
    }
    

    return (
        <>
            {step == 'class' || step == 'success' ? (
                ''
            ) : (
                <TopNavPadding>
                    <div className={`p-4 w-full bg-white shadow-nav `}>
                        <Image
                            src={'/left-arrow.svg'}
                            alt='Back button'
                            width={24}
                            height={24}
                            priority={true}
                            className='object-contain'
                            onClick={handleBackBtn}
                        />
                    </div>
                </TopNavPadding>
            )}
        </>
    )
}

export default BackBtn
