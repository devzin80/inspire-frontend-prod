const fetchVideoBySlug = async (slug) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/video/slug/${slug}`,
        )
        const videoData = await res.json()
        console.log(videoData)

        return videoData?.video
    } catch (e) {
        console.log(e.message)
    }
}

export { fetchVideoBySlug }
