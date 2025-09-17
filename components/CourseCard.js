'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const CourseCard = ({ image, title, price, slug, small=false }) => {
    const router = useRouter()
    return (
        <div
            className='pb-5'
            onClick={() => {
                router.push(`/course/${slug}`)
            }}
        >
            <div
                className={`${
                    small ? 'w-[160px] h-[185px]' : 'w-[180px] h-[195px]'
                } rounded-md  shadow-card`}
            >
                <div className='rounded-t-md overflow-hidden w-full h-[130px] shadow-bottom-nav'>
                    <Image
                        src={image}
                        alt={title}
                        width={small?160:180}
                        height={small?110:130}
                        priority
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='p-2 bg-white rounded-b-md  flex items-center '>
                    <div>
                        <p className='font-medium text-sm leading-tight text-neutral-800 mb-2 text-wrap '>
                            {title}
                        </p>
                        <div className='font-medium text-sm leading-tight text-sky-500 mb-2 '>
                            <span>
                                ৳ {Number(price).toLocaleString('bn-IN')}{' '}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
