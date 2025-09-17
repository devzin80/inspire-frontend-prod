'use client'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const ProfileHeader = () => {
    const {user} = useSelector(state => state.user)
    // console.log(user);
    
    return (
        <>
            <div className='w-[100vw] h-[16vh] justify-start items-center gap-3 inline-flex relative cursor-pointer'>
                <div className='absolute w-[100vw] h-full top-0 left-0 rounded-br-2xl rounded-bl-2xl overflow-hidden '>
                    <Image
                        src={'/profile-cover.svg'}
                        fill
                        alt='cover image'
                        sizes='100vw'
                        objectFit='cover'
                        priority={true}
                        className=''
                    />
                </div>
                <div className='z-40 flex justify-start items-center gap-3 px-4'>
                    <div>
                        <Image
                            src={user?.user?.profilePicture } 
                            alt='Profile image'
                            width={46}
                            height={46}
                            priority
                            className='rounded-full border-2 border-white'
                        />
                    </div>
                    <div className='self-stretch flex-col justify-start items-center gap-0.5 flex my-auto'>
                        <div className="self-stretch text-white text-base font-semibold font-['Inter'] leading-normal">
                            {user?.user?.name || 'No Name'}
                        </div>
                        <div className="self-stretch text-[#e0e0e0] text-xs font-medium font-['Inter'] leading-none">
                            {user?.user?.phoneNumber}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileHeader
