const BookData = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/book/all`,
        {next:{revalidate:60}})
        const bookData = await res.json()
        return bookData?.books || []
    } catch (e) {
        console.log(e.message)
    }
}

export { BookData }
