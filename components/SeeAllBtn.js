'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const SeeAllBtn = ({path}) => {
    const router = useRouter()
  return (
    <div onClick={() => {router.push(path)}} className='text-sky-500 leading-loose' >See All</div>
  )
}

export default SeeAllBtn