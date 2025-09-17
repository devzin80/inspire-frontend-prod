const fetchCategories = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/category/all`,
            { cache: 'no-store' },
        )
        const categories = await res.json()
        return categories
    } catch (e) {
        console.log(e.message)
    }
}

export { fetchCategories }
