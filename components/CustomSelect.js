'use client'
// CustomSelect.js
import React, { useState, useEffect, use } from 'react'

const CustomSelect = ({ options, onSelect }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)
    const [finalOptions, setFinalOptions] = useState(options)

    // Use a console.log to confirm options are being passed correctly
    // useEffect(() => {
    //     console.log('Options received by CustomSelect:', options)
    // }, [options])
    useEffect(() => {
         const fetchClasses = async () => {
             try {
                 const res = await fetch(
                     `${process.env.NEXT_PUBLIC_BACKEND_URL}/class/all`,
                 )
                 const data = await res.json()
                 const classOptions = data?.classes?.map((cls) => ({
                     label: cls?.title,
                     value: cls?._id,
                 }))
                 console.log(classOptions);
 
                 setFinalOptions(classOptions)
             } catch (e) {
                 console.log('Failed to fetch classes', e)
             }
         }
          fetchClasses()
      }, [])

    const handleSelect = (option) => {
        setSelectedOption(option)
        onSelect(option.value)
        setIsOpen(false)
    }

    console.log(finalOptions);
    

    return (
        <div className='relative w-full max-w-sm mx-auto mt-10'>
            {/* Select button/trigger */}
            <div
                className='relative w-full p-4 border rounded-md cursor-pointer bg-white text-gray-700'
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption ? selectedOption.label : 'Select One'}
            </div>

            {/* Dropdown Menu (conditionally rendered) */}

            {isOpen && (
                <div className='fixed inset-0 z-50 flex items-end'>
                    {/* semi-transparent backdrop */}
                    <div
                        className='absolute inset-0 bg-black/40'
                        onClick={() => setIsOpen(false)}
                    />

                    {/* bottom sheet */}
                    <div className='relative w-full rounded-t-2xl bg-white p-4 shadow-lg'>
                        <div className='flex justify-center w-full'>
                            <div
                                className='h-1.5 w-12 bg-gray-300 rounded-full cursor-pointer'
                                onClick={() => setIsOpen(false)}
                            ></div>
                        </div>

                        <div className='w-full mt-4  overflow-y-auto '>
                            <div>I am here</div>
                            {/* {options?.map((option) => (
                                
                                <div
                                    key={option.value}
                                    className='p-4 cursor-pointer hover:bg-gray-100'
                                    onClick={() => handleSelect(option)}
                                >
                                    
                                    
                                </div>
                            ))} */}
                            <p>{finalOptions?.length}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomSelect
