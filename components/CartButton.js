'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React from 'react'

const CartButton = ({ count = 0 }) => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.push('/cart')}
            className='relative w-9 h-9 p-2 bg-white justify-center items-center inline-flex cursor-pointer hover:bg-gray-100 rounded-full transition'
        >
            <Image
                src='/Cart.svg'
                alt='cart icon'
                width={20}
                height={20}
                className='object-cover'
            />
            {count > 0 && (
                <span className='absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>
                    {count}
                </span>
            )}
        </div>
    )
}

export default CartButton
