'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import AuthPhoneOption from './AuthPhoneOption'
import AuthOtpOption from './AuthOtpOption'
import AuthPasswordOption from './AuthPasswordOption'
import AuthClassOption from './AuthClassOption'
import AuthSuccessOption from './AuthSuccessOption'

const AuthOptions = () => {
    const step = useSelector((state) => state.auth.step)

    return (
        <>
            <div className={step != 'success'? 'p-4 mt-32':''}>
                {step == 'phone' && <AuthPhoneOption />}
                {step == 'otp' && <AuthOtpOption />}
                {step == 'password' && <AuthPasswordOption />}
                {step == 'class' && <AuthClassOption />}
            </div>
            {step == 'success' && <AuthSuccessOption />}
        </>
    )
}

export default AuthOptions
