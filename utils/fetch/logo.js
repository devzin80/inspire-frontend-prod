const fetchLogo = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/logo/all`
           
        )
        const logo = await res.json()
        return logo
    } catch (e) {
        console.log(e.message)
    }
}

export { fetchLogo }
