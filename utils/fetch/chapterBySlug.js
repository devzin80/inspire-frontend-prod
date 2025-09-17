const fetchChapterBySlug = async (slug) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/chapter/slug/${slug}`,
        )
        const chapterData = await res.json()
        console.log(chapterData)

        return chapterData?.chapter
    } catch (e) {
        console.log(e.message)
    }
}

export { fetchChapterBySlug }
