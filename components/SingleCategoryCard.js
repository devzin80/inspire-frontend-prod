'use client'

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import CourseCard from './CourseCard'
import ReusableBackBtn from './ReusableBackBtn'

const SingleCategoryCard = ({ category }) => {
    const router = useRouter()

    const [selectedSubcategory, setSelectedSubcategory] = useState(
        category?.subcategories[0],
    )
    const [selectedSubjects, setSelectedSubjects] = useState(
        category?.subcategories[0].subjects,
    )

    return (
        <div>
            <ReusableBackBtn path={category?.title} />
            <div className=' px-4 mx-auto'>
                <div className=' justify-start items-start gap-3 inline-flex my-1'>
                    {category?.subcategories?.map((subcategory, index) => {
                        return (
                            <div
                                key={index}
                                className={`rounded-md justify-center items-center inline-flex ${
                                    selectedSubcategory._id === subcategory._id
                                        ? 'bg-sky-600 '
                                        : 'bg-white border border-[#e1e8ee]'
                                }`}
                                onClick={() => {
                                    setSelectedSubcategory(subcategory)
                                    setSelectedSubjects(subcategory.subjects)
                                }}
                            >
                                <div
                                    className={`text-nowrap py-2.5 px-4 text-sm font-medium leading-none ${
                                        selectedSubcategory._id ===
                                        subcategory._id
                                            ? 'text-white'
                                            : 'text-gray-700'
                                    }`}
                                >
                                    {subcategory.title}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className=' flex gap-2 mt-3 flex-wrap'>
                    {selectedSubjects?.map((subject, index) => (
                        <CourseCard
                            key={index}
                            slug={subject.slug}
                            title={subject.title}
                            image={subject.image || '/default-card.svg'}
                            price={subject.price}
                            small={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SingleCategoryCard
