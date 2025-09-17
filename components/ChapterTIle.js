'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ChapterTIle = ({ chapterDetails, chapter }) => {
    const router = useRouter()
    return (
        <div>
            <div className='rounded-t-xl  py-6 px-4  w-full h-[35vh]'>
                <div className='flex justify-between items-center gap-5 py-3'>
                    <p className='text-base font-semibold text-neutral-900 leading-2'>
                        {/* {chapterDetails.title} */} Full Chapter
                    </p>
                    <p className='text-base font-semibold text-sky-600 leading-2'>
                        ৳ {Number(chapterDetails.price).toLocaleString('bn-IN')}
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
            <div className='my-5 p-4'>
                {/* Topic Loop */}
                {chapterDetails.topics.map((topic, index) => (
                    <div className='rounded-xl bg-white py-6 px-4  w-full h-[26vh] mb-5' key={index}>
                        <div className='flex justify-between items-center gap-5 py-3'>
                            <p className='text-base font-semibold text-neutral-900 leading-2'>
                                {topic?.title} 
                            </p>
                            {/* <div className='flex gap-2 items-center px-3 py-3 rounded-lg bg-sky-600 '>
                            <Image
                                src={'/lock.svg'}
                                alt='cart'
                                width={20}
                                height={20}
                                className='object-contain'
                                priority
                            />
                            <p className='text-sm font-bold text-white leading-2'>
                                ৳{' '}
                                {Number(chapterDetails.price).toLocaleString(
                                    'bn-IN',
                                )}
                            </p>
                        </div> */}
                        </div>
                        <div className='my-4 overflow-y-scroll  h-[15vh] noScrollbar'>
                            {/* video loop */}
                            {
                                topic.videos.map((video, index) => (
                                    
                            <div className='rounded border border-gray-200 flex justify-between items-center gap-3 p-3 my-3 ' key={index} onClick={() => {router.push(`${chapter}/${topic.slug}/${video.slug}`)}}>
                                <div className='flex items-center gap-3'>
                                    <Image
                                        src={'/play-button.svg'}
                                        alt='play button'
                                        width={24}
                                        height={24}
                                        className='object-contain'
                                        priority
                                    />
                                    <p className='text-sm font-semibold text-neutral-900 leading-loose w-[80%] truncate'>
                                        {video.title}
                                    </p>
                                </div>
                                <div>
                                    {/* <Image
                                    src={'/lock-black.svg'}
                                    alt='info'
                                    width={20}
                                    height={20}
                                    className='object-contain'
                                    priority
                                /> */}
                                    <p className='text-neutral-900'>
                                        {' '}
                                        {video.duration} min{' '}
                                    </p>
                                </div>
                            </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
                <div className='rounded-xl bg-white py-6 px-4  w-full h-[26vh] mb-5'>
                    <div className='flex justify-between items-center gap-5 py-3'>
                        <p className='text-base font-semibold text-neutral-900 leading-2'>
                            {/* {topic?.title} A */} Topic Title
                        </p>
                        <div className='flex gap-2 items-center px-3 py-3 rounded-lg bg-sky-600 '>
                            <Image
                                src={'/lock.svg'}
                                alt='cart'
                                width={20}
                                height={20}
                                className='object-contain'
                                priority
                            />
                            <p className='text-sm font-bold text-white leading-2'>
                                ৳{' '}
                                {Number(chapterDetails.price).toLocaleString(
                                    'bn-IN',
                                )}
                            </p>
                        </div>
                    </div>
                    <div className='my-4 overflow-y-scroll  h-[15vh] noScrollbar'>
                        {/* Model test loop */}
                        <div className='rounded border border-gray-200 flex justify-between items-center gap-3 p-3 my-3 '>
                            <div className='flex items-center gap-3'>
                                <Image
                                    src={'/play-button-fade.svg'}
                                    alt='play button'
                                    width={24}
                                    height={24}
                                    className='object-contain'
                                    priority
                                />
                                <p className='text-sm font-semibold text-neutral-900 leading-loose w-[80%] truncate'>
                                    Video Title
                                </p>
                            </div>
                            <div>
                                <Image
                                    src={'/lock-black.svg'}
                                    alt='info'
                                    width={20}
                                    height={20}
                                    className='object-contain'
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChapterTIle
