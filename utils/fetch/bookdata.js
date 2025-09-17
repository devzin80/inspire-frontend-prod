const BookData = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/book/all`,
        {cache: 'no-store'})
        const books = await res.json()
        return books
    } catch (e) {
        console.log(e.message)
    }
}

export { BookData }
