import { BookData } from '@/utils/fetch/bookdata'
import React from 'react'
import BookCard from './BookCard'
import SeeAllBtn from './SeeAllBtn'

const BookWrapper = async () => {
    const books = await BookData()
    // console.log(books)

    return (
        <div className='mb-10 items-center p-5'>
            <div className='flex justify-between items-center my-5'>
                <p className='text-xl font-semibold text-neutral-900 leading-loose'>
                    Book Store
                </p>
                <SeeAllBtn path={`/book`} />
            </div>
            <div className='noScrollbar flex gap-4 overflow-x-auto'>
                {books?.map((book, index) => (
                    <BookCard
                        key={index}
                        slug={book?.slug}
                        title={book?.title}
                        image={book?.images[0] || '/default-card.svg'}
                        price={book?.price}
                        offerPrice={book?.offerPrice}
                    />
                ))}
            </div>
        </div>
    )
}

export default BookWrapper
