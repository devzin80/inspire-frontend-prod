'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select'
import { disData } from '@/utils/districtData'

const UserAddress = () => {

    const addressData = disData()

    return (
        <div className='p-4 relative'>
            <p className='text-xl text-neutral-900 font-semibold leading-loose'>
                Your Address
            </p>
            <div className='my-3'>
                <label className='w-full  text-md font-semibold text-gray-700 py-4'>
                    Select City
                </label>
                <Select
                    // value={SelectedClass}
                    onValueChange={(value) => {
                        // dispatch(addClass(value))
                    }}
                >
                    <SelectTrigger className={'w-full bg-white'}>
                        <SelectValue placeholder='Select City' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {addressData?.map((item, index) => (
                                <SelectItem
                                    value={item.city}
                                    key={index}
                                >
                                    {item.city}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className='my-3'>
                <label className='w-full  text-md font-semibold text-gray-700 py-4'>
                    Select Area
                </label>
                <Select
                    // value={SelectedClass}
                    onValueChange={(value) => {
                        // dispatch(addClass(value))
                    }}
                >
                    <SelectTrigger className={'w-full bg-white'}>
                        <SelectValue placeholder='Select Area' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {/* {classData?.classes?.map((dis, index) => (
                              <SelectItem
                                  value={dis?._id}
                                  key={index}
                              >
                                  {dis?.title}
                              </SelectItem>
                          ))} */}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className='my-3'>
                <label className='w-full  text-md font-semibold text-gray-700 py-4'>
                    Additional Info{' '}
                    <span className='text-gray-500'>(Optional)</span>
                </label>
                <textarea
                    type='textarea'
                    name='additional'
                    id='additional'
                    placeholder='Type here...'
                    //   value={user.name}
                    //   onChange={''}
                    className='bg-white text-gray-500 text-sm font-bold rounded-lg w-full p-3 
                                         focus:outline-none focus:ring-0 mt-2 h-[20vh] '
                />
            </div>

            <button
                type='button'
                onClick={() => {}}
                className={`w-full h-[52px] mt-16 px-2.5 py-3.5 rounded-lg justify-center items-center gap-2 inline-flex font-semibold bg-sky-600 text-white hover:bg-sky-700 cursor-pointer bottom-0`}
            >
                Save & Update
            </button>
        </div>
    )
}

export default UserAddress
