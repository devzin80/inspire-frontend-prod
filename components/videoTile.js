'use client'
import React from 'react'
import ShakaPlayer from '@/components/Shaka'
import ReusableBackBtn from './ReusableBackBtn'
import Image from 'next/image'

const VideoTile = ({ videoData }) => {
    return (
        <div>
            <ReusableBackBtn path={videoData.title} />
            <ShakaPlayer
                src={videoData.url}
                user={{ name: 'John Doe', phone: '+1234567890' }}
                watermarkCount={1}
                poster={
                    '/uploads/1757097196995-363344274-459894739_845882094300664_6530676518503484682_n.jpg'
                }
            />
            <div className='p-4'>
                <div className='my-2'>
                    <p className='text-xl font-bold truncate'>
                        {videoData.title}
                    </p>
                    <p className='text-base font-bold truncate mt-3'>
                        Description
                    </p>
                    <p className='text-sm font-normal truncate'>
                        {videoData.description}
                    </p>
                </div>
                <div className='my-4'>
                    {videoData.notes.map((note, index) => (
                        <div
                            className='rounded bg-white flex justify-between items-center gap-3 p-3 my-3 '
                            key={index}
                        >
                            <div className='flex items-center gap-3'>
                                <Image
                                    src={'/note.svg'}
                                    alt='cart'
                                    width={24}
                                    height={24}
                                    className='object-contain'
                                    priority
                                />
                                <p className='text-sm font-semibold text-neutral-900 leading-loose w-[80%] truncate'>
                                    {note.title}
                                </p>
                            </div>
                            <div>
                                <Image
                                    src={'/download.svg'}
                                    alt='info'
                                    width={24}
                                    height={24}
                                    className='object-contain'
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VideoTile
