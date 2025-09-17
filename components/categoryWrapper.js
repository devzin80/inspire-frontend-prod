import { fetchCategories } from '@/utils/fetch/categories'
import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryWrapper = async () => {
    const categoryData = await fetchCategories()
    return (
        <>
            {categoryData?.categories?.map((category) => (
                <CategoryCard
                    key={category._id}
                    category={category}
                />
            ))}
        </>
    )
}

export default CategoryWrapper
