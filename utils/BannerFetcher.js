// lib/fetchBanners.js
export async function fetchBanners() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/banner/all`,
        )
        if (!res.ok) console.log('Something wrong with banner');
        
        const banners = await res.json()
        // console.log(banners);
        
        return banners
    } catch (err) {
        console.log(err.message);
        
    }
}
