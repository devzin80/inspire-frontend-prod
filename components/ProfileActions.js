'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProfileActions = ({ status }) => {
    const router = useRouter()
    const actions = [
        {
            id: '1',
            label: ' Profile',
            icon: '/user-circle.svg',
            link: '/user/profile-details',
            loginVisible: true,
        },
        {
            id: '2',
            label: ' Address',
            icon: '/address.svg',
            link: '/user/address',
            loginVisible: true,
        },
        {
            id: '3',
            label: ' My Courses',
            icon: '/bookmark.svg',
            link: '/user/my-courses',
            loginVisible: true,
        },

        {
            id: '5',
            label: ' Analytics',
            icon: '/analytics.svg',
            link: '/user/analytics',
            loginVisible: true,
        },
        {
            id: '6',
            label: ' Leaderboard',
            icon: '/leaderboard.svg',
            link: '/leaderboard',
            loginVisible: true,
        },
        {
            id: '7',
            label: ' Payment History',
            icon: '/mastercard-card.svg',
            link: '/user/payment-history',
            loginVisible: true,
        },
        {
            id: '8',
            label: ' Change Password',
            icon: '/change-password.svg',
            link: '/user/change-password',
            loginVisible: true,
        },
        {
            id: '9',
            label: ' About US',
            icon: '/annotation-info.svg',
            link: '/about-us',
            loginVisible: false,
        },
        {
            id: '10',
            label: ' Support',
            icon: '/customer-support.svg',
            link: '/support',
            loginVisible: false,
        },
        {
            id: '11',
            label: ' Logout',
            icon: '/log-out.svg',
            link: '',
            loginVisible: true,
        },
    ]

    const filteredActions = status
        ? actions.filter(
              (action) => action.loginVisible || !action.loginVisible ,
          )
        : actions.filter((action) => !action.loginVisible)

    const handleLogOut = () => {
        console.log('log out')
    }

    return (
        <div>
            <div className='w-full bg-white rounded-lg gap-2 '>
                {filteredActions.map((action) => {
                    return (
                        <div
                            className='px-2 py-3 gap-4 flex justify-between items-center cursor-pointer'
                            onClick={() =>
                                action.id == 11
                                    ? handleLogOut
                                    : router.push(action.link)
                            }
                            key={action.id}
                        >
                            <div className='flex gap-3 items-center px-2'>
                                <Image
                                    src={action.icon}
                                    alt='profile'
                                    width={24}
                                    height={24}
                                    priority={true}
                                />
                                <div className="text-gray-700 text-sm font-medium font-['Inter'] leading-tight">
                                    {action.label}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProfileActions
