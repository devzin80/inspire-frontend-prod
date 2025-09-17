const fetchFooter = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/footer/all`,
        )
        const footers = await res.json()
        const footer = footers?.footer[0]?.phone
        
        

        return footer
    } catch (e) {
        console.log(e.message)
    }
}

export { fetchFooter }
