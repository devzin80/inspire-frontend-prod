'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select'
import { useGetAllClassQuery } from '@/redux/services/classApiSlice'
import { addDetails } from '@/redux/services/profileSlice'
import { updateUser } from '@/redux/services/userSlice'

const UserProfileDetails = () => {
    const user = useSelector((state) => state.user.user) // original user
    const profile = useSelector((state) => state.profile) // editable state
    const dispatch = useDispatch()
    const { data: classData } = useGetAllClassQuery()
    const handleChange = (field, value) => {
        // Only save when different from original
        if (user?.[field] !== value) {
            dispatch(addDetails({ [field]: value }))
        } else {
            // If reset back to original, remove from profile
            dispatch(addDetails({ [field]: undefined }))
        }
    }


    // preload form with user data
    useEffect(() => {
        if (user) {
            dispatch(addDetails(user))
        }
    }, [dispatch, user])

    const handleProfileUpdate = async () => {
        const original = user || {}
        const updated = profile || {}

        // detect only changed fields
        const changes = Object.keys(updated).reduce((acc, key) => {
            if (updated[key] !== original[key]) {
                acc[key] = updated[key]
            }
            return acc
        }, {})

        if (Object.keys(changes).length === 0) {
            console.log('No changes to update')
            return
        }
        console.log(changes);
        
        // try {
        //     const res = await fetch('/api/update-profile', {
        //         method: 'PATCH',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(changes),
        //     })

        //     if (!res.ok) throw new Error('Update failed')

        //     const data = await res.json()
        //     console.log('Profile updated:', data)

        //     // ✅ sync user slice with updated profile
        //     dispatch(updateUser(changes))
        // } catch (err) {
        //     console.error(err.message)
        // }
    }

    return (
        <div className='px-4 py-3'>
            <div className='flex justify-center items-center'>
                <Image
                    src={profile?.profilePicture || '/default.png'}
                    alt='Profile Picture'
                    width={100}
                    height={100}
                    priority
                    className='rounded-full object-contain'
                />
            </div>

            <p className='text-center text-neutral-500 text-sm mt-5'>
                JPG, JPEG, PNG less than 1MB
            </p>
            <p className='text-neutral-700 text-sm px-3 py-2 border border-gray-400 rounded font-semibold w-2/4 text-center mx-auto mt-5 bg-white cursor-pointer'>
                Change Image
            </p>

            <div className='mt-5'>
                {/* Name */}
                <div className='my-3'>
                    <label className='text-md font-semibold text-gray-700 py-2'>
                        Name
                    </label>
                    <input
                        type='text'
                        value={profile.name || ''}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className='bg-white text-gray-500 text-sm font-bold rounded-lg w-full p-3 mt-2'
                    />
                </div>

                {/* Phone */}
                <div className='my-3'>
                    <label className='text-md font-semibold text-gray-700 py-2'>
                        Phone Number
                    </label>
                    <input
                        type='text'
                        value={profile.phoneNumber || ''}
                        onChange={(e) =>
                            handleChange('phoneNumber', e.target.value)
                        }
                        className='bg-white text-gray-500 text-sm font-bold rounded-lg w-full p-3 mt-2'
                    />
                </div>

                {/* Email */}
                <div className='my-3'>
                    <label className='text-md font-semibold text-gray-700 py-2'>
                        Email Address
                    </label>
                    <input
                        type='text'
                        value={profile.email || ''}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className='bg-white text-gray-500 text-sm font-bold rounded-lg w-full p-3 mt-2'
                    />
                </div>

                {/* Institution */}
                <div className='my-3'>
                    <label className='text-md font-semibold text-gray-700 py-2'>
                        Institution Name
                    </label>
                    <input
                        type='text'
                        value={profile.institutionName || ''}
                        onChange={(e) =>
                            handleChange('institutionName', e.target.value)
                        }
                        className='bg-white text-gray-500 text-sm font-bold rounded-lg w-full p-3 mt-2'
                    />
                </div>

                {/* Class */}
                <div className='my-3'>
                    <label className='text-md font-semibold text-gray-700 py-2'>
                        Class
                    </label>
                    <Select
                        value={profile.class || ''}
                        onValueChange={(value) =>
                            handleChange('class', value)
                        }
                    >
                        <SelectTrigger className='w-full bg-white'>
                            <SelectValue placeholder='Select Class' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {classData?.classes?.map((cls) => (
                                    <SelectItem
                                        value={cls?._id}
                                        key={cls?._id}
                                    >
                                        {cls?.title}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <button
                    type='button'
                    onClick={handleProfileUpdate}
                    className='w-full h-[52px] mt-6 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700'
                >
                    Save & Update
                </button>
            </div>
        </div>
    )
}

export default UserProfileDetails
