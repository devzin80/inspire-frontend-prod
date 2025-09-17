const fetchSubjectBySlug = async (slug) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/subject/slug/${slug}`,
        )
        const subjectData = await res.json()
        // console.log(subjectData);
        
        return subjectData?.subject
    } catch (e) {
        console.log(e.message)
    }
}

export { fetchSubjectBySlug }
