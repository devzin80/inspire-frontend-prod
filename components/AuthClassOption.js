'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useGetAllClassQuery } from '@/redux/services/classApiSlice'
import { addClass, setStep } from '@/redux/services/authSlice'
import { useCreateUserMutation } from '@/redux/services/userApiSlice'
import { login } from '@/redux/services/userSlice'

const AuthClassOption = () => {
    const { SelectedClass, phone, password } = useSelector(
        (state) => state.auth,
    )
    const dispatch = useDispatch()
    const { data: classData } = useGetAllClassQuery()
    const [createUser] = useCreateUserMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userDetails = {
                phone,
                password,
                SelectedClass,
            }

            const userData = await createUser(userDetails).unwrap()
            console.log(userData)

            if (userData.success && userData?.user) {
                console.log('I am here');
                
                dispatch(login({ user:{...userData}, token: {} }))
                dispatch(setStep('success'))
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className='mt-6'>
            <label className='w-full  text-2xl font-bold text-gray-900 py-4'>
                Select Your Class
            </label>

            <div className='mt-4 bg-white p-4 rounded '>
                <Select
                    value={SelectedClass}
                    onValueChange={(value) => {
                        dispatch(addClass(value))
                    }}
                >
                    <SelectTrigger className={'w-full'}>
                        <SelectValue placeholder='Select Class' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {classData?.classes?.map((cls, index) => (
                                <SelectItem
                                    value={cls?._id}
                                    key={index}
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
                disabled={!SelectedClass}
                onClick={handleSubmit}
                className={`w-full h-[52px] mt-6 px-2.5 py-3.5 rounded-lg justify-center items-center gap-2 inline-flex font-semibold 
    ${
        SelectedClass
            ? 'bg-sky-600 text-white hover:bg-sky-700 cursor-pointer'
            : 'bg-sky-200 text-white cursor-not-allowed'
    } mt-60`}
            >
                Finish
            </button>
        </div>
    )
}

export default AuthClassOption
