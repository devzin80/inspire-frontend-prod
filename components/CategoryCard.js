'use client'
import React, { useState } from 'react'
import SeeAllBtn from './SeeAllBtn'
import { useRouter } from 'next/navigation'
import CourseCard from './CourseCard'

const CategoryCard = ({ category }) => {
    const router = useRouter()

    const [selectedSubcategory, setSelectedSubcategory] = useState(
        category.subcategories[0],
    )
    const [selectedSubjects, setSelectedSubjects] = useState(
        category.subcategories[0].subjects,
    )

    return (
        <div className=' items-center p-5'>
            <div className='flex justify-between items-center mb-5'>
                <p className='text-xl font-semibold text-neutral-900 leading-loose'>
                    {category?.title}
                </p>
                <SeeAllBtn path={`/courses/${category.title}`} />
            </div>

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
                                    selectedSubcategory._id === subcategory._id
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

            <div className='noScrollbar flex gap-4 overflow-x-auto mt-3'>
                {selectedSubjects?.map((subject, index) => (
                    <CourseCard
                        key={index}
                        slug={subject.slug}
                        title={subject.title}
                        image={subject.image || '/default-card.svg'}
                        price={subject.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoryCard
