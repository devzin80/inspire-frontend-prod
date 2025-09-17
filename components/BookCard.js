'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const BookCard = ({ image, title, price, slug, offerPrice }) => {
    const router = useRouter()
    return (
        <div
            className='pb-5'
            onClick={() => {
                router.push(`/book/${slug}`)
            }}
        >
            <div className='rounded-md w-[170px] h-[200px] shadow-card'>
                <div className='rounded overflow-hidden w-full h-[130px] shadow-bottom-nav'>
                    <Image
                        src={image}
                        alt={title}
                        width={170}
                        height={130}
                        priority
                        className='object-cover  w-full h-full'
                    />
                </div>
                <div className='p-2 bg-white rounded-b-md  flex items-center h-[85px]'>
                    <div>
                        <p className='font-medium text-sm leading-tight text-neutral-800 mb-2 text-wrap h-[35px]'>
                            {title}
                        </p>
                        <div className='font-medium text-sm leading-tight text-sky-500 mb-2 '>
                            {offerPrice ? (
                                <div className='flex gap-3'>
                                    <span className=' line-through'>
                                        ৳{' '}
                                        {Number(price).toLocaleString('bn-IN')}{' '}
                                    </span>
                                    <span className=' '>
                                        {' '}
                                        ৳{' '}
                                        {Number(offerPrice).toLocaleString(
                                            'bn-IN',
                                        )}{' '}
                                    </span>
                                </div>
                            ) : (
                                <span>
                                    ৳ {Number(price).toLocaleString('bn-IN')}{' '}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard
