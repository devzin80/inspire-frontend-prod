'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const LoginTrigger = () => {
    const router = useRouter();
    return (
        <div className='px-4 py-6  bg-[#f7f9fc] mt-32 '>
            <Image
                src={'/default-logo.svg'}
                alt='log in'
                width={250}
                height={100}
                priority={true}
                className='object-contain mx-auto mb-6 '
            />
            <div className='w-full h-[52px] px-2.5 py-3.5 bg-sky-600 rounded-lg justify-center items-center gap-2 inline-flex cursor-pointer' onClick={() => {router.push('/authentication')}}>
                <div className="text-white text-base font-medium font-['Inter'] leading-normal ">
                    Log in / Registration
                </div>
            </div>
        </div>
    )
}

export default LoginTrigger
