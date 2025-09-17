'use client'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const BottomNav = () => {
    const router = useRouter()
    const pathname = usePathname()

    const navItems = [
        {
            id: 'home',
            label: 'Home',
            Icon: '/home.svg',
            activeIcon: '/home-active.svg',
            link: '/',
        },
        {
            id: 'courses',
            label: 'Courses',
            Icon: '/bookmark.svg',
            activeIcon: '/bookmark-active.svg',
            link: '/user/my-courses',
        },
        {
            id: 'search',
            label: 'Search',
            Icon: '/search.svg',
            activeIcon: '/search-active.svg',
            link: '/search',
        },
        {
            id: 'profile',
            label: 'Profile',
            Icon: '/profile.svg',
            activeIcon: '/profile-active.svg',
            link: '/profile',
        },
    ]

    return (
        <div className='w-full h-[54px] bg-white fixed bottom-0 flex items-center justify-between'>
            {navItems?.map((item) => {
                // const Icon = item.Icon
                return (
                    <div
                        className={`${
                            pathname == item.link ? ' bg-[#E0F2FE]' : ''
                        } w-1/4 h-full flex items-center justify-center px-1.5 py-2 flex-col`}
                        key={item.id}
                    >
                        {/* bg-[#E0F2FE] */}
                        <div
                            className=''
                            onClick={() => {
                                router.push(item.link)
                            }}
                            key={item.id}
                        >
                            <Image
                                src={
                                    pathname == item.link
                                        ? item.activeIcon
                                        : item.Icon
                                }
                                alt={item.label}
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <p
                            className={`text-[10px] text-center  font-medium leading-3 ${
                                pathname == item.link
                                    ? 'text-sky-700 '
                                    : 'text-gray-500'
                            } `}
                        >
                            {item.label}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default BottomNav
