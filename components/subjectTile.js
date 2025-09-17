'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const SubjectTile = ({ subjectDetails, subject }) => {
    const router = useRouter()
    return (
        <div>
            {' '}
            <div className='px-5 mb-60'>
                <p className='text-base font-semibold leading-loose text-neutral-900'>
                    অধ্যায়সমূহঃ
                </p>
                <div className='my-3'>
                    {subjectDetails?.chapters?.map((chapter, index) => {
                        return (
                            <div
                                className='flex justify-between items-center gap-3 border-b-2 border-gray-100 py-3'
                                key={index}
                                onClick={() => {
                                    router.push(
                                        `/course/${subject}/${chapter.slug}`,
                                    )
                                }}
                            >
                                <div className='w-[80%] truncate'>
                                    {chapter.title}
                                </div>
                                <div>
                                    <Image
                                        src={'/right-arrow.svg'}
                                        alt='right arrow'
                                        width={24}
                                        height={24}
                                        className='object-contain'
                                        priority
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='rounded-t-xl bg-white py-6 px-4 fixed bottom-0 w-full h-[35vh]'>
                <div className='flex justify-between items-center gap-5 py-3'>
                    <p className='text-base font-semibold text-neutral-900 leading-2'>
                        {subjectDetails.title}
                    </p>
                    <p className='text-base font-semibold text-sky-600 leading-2'>
                        ৳ {Number(subjectDetails.price).toLocaleString('bn-IN')}
                    </p>
                </div>
                <div className='my-4 overflow-y-scroll  h-[15vh] noScrollbar'>
                    {/* Model test loop */}
                    <div className='rounded border border-gray-200 flex justify-between items-center gap-3 p-2.5 my-3 '>
                        <div className='flex items-center gap-3'>
                            <Image
                                src={'/quiz.svg'}
                                alt='cart'
                                width={20}
                                height={20}
                                className='object-contain'
                                priority
                            />
                            <p className='text-sm font-semibold text-neutral-900 leading-loose w-[80%] truncate'>
                                Model test
                            </p>
                        </div>
                        <div>
                            <Image
                                src={'/info.svg'}
                                alt='info'
                                width={20}
                                height={20}
                                className='object-contain'
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className='px-2 5 py-3 w-full bg-sky-600 text-white text-base leading-loose font-semibold rounded-md mx-auto text-center'>
                    Buy Now
                </div>
            </div>
        </div>
    )
}

export default SubjectTile
