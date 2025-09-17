import BannerCarousel from '@/components/BannerCarousel'
import BookWrapper from '@/components/BookWrapper'
import BottomNav from '@/components/BottomNav'
import CategoryWrapper from '@/components/categoryWrapper'
import TopNav from '@/components/TopBar'
import { fetchBanners } from '@/utils/BannerFetcher'
import { fetchCategories } from '@/utils/fetch/categories'
import Image from 'next/image'

export default async function Home() {
    const bannerData = await fetchBanners()
    
    return (
        <>
            <TopNav />
            <BannerCarousel banners={bannerData?.banners} />
            <CategoryWrapper />

            <BookWrapper/>

            <BottomNav />
        </>
    )
}
