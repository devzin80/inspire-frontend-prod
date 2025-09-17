'use client'
import React from 'react'
import TopNavPadding from './TopNavPadding'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ReusableBackBtn = ({ path }) => {
    const router = useRouter()
    return (
        <TopNavPadding>
            <div className={`p-4 w-full bg-white shadow-nav flex gap-3 `}>
                <Image
                    src={'/left-arrow.svg'}
                    alt='Back button'
                    width={24}
                    height={24}
                    priority={true}
                    className='object-contain'
                    onClick={() => router.back()}
                />
                <p className='text-md font-bold text-neutral-800 leading-loose'>
                   {path}
                </p>
            </div>
        </TopNavPadding>
    )
}

export default ReusableBackBtn
