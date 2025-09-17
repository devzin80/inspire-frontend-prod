'use client'
import Image from 'next/image'
import React, { use } from 'react'
import CartButton from './CartButton'
import NotificationButton from './NotificationButton'
import { useIsPWA } from '@/utils/PwaChecker'
import TopNavPadding from './TopNavPadding'

const TopNav = () => {
    // Example counts; you can fetch real data in server component
    const cartCount = 0
    const notificationCount = 0
    const logo = {}
    const isPwa = useIsPWA()

    return (
        <TopNavPadding>
            <div
                className={`px-4  shadow-nav bg-white fixed w-full z-10 top-0 flex items-center justify-between ${
                    isPwa ? 'pb-3 pt-12' : 'py-3'
                }`}
            >
                <div className='inline-flex justify-start items-center w-2/3'>
                    <div className='w-[150px] h-12 overflow-hidden relative right-4'>
                        <Image
                            src={'/default-logo.svg'}
                            alt='Inspire online Logo'
                            fill
                            priority={true}
                            className='object-cover'
                        />
                    </div>
                </div>

                <div className='inline-flex justify-between items-center'>
                    <CartButton count={cartCount} />
                    <NotificationButton count={notificationCount} />
                </div>
            </div>
        </TopNavPadding>
    )
}

export default TopNav
