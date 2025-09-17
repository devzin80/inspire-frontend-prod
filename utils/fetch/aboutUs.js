const fetchAboutUs = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/about/all`,
        )
        const about = await res.json()
        const aboutUs = about.aboutUs[0].about
        
        return aboutUs
    } catch (e) {
        console.log(e.message)
    }
}

export { fetchAboutUs }
