import BackBtn from '@/components/BackBtn'
import { fetchAboutUs } from '@/utils/fetch/aboutUs'
import { fetchLogo } from '@/utils/fetch/logo'
import Image from 'next/image'
import About from './About'
import ReusableBackBtn from '@/components/ReusableBackBtn'

export default async function AboutUs() {
    const { logo } = await fetchLogo()
    const aboutUs = await fetchAboutUs()

    return (
        <div className=''>
            <ReusableBackBtn path={'About Us'} />
            <div className='w-full flex  justify-center items-center mt-5'>
                <Image
                    src={logo || 'default-logo.svg'}
                    alt='Inspire online logo'
                    width={150}
                    height={150}
                    priority
                    className='object-contain'
                />
            </div>
            <div className='p-5 mx-auto'>
                <About content={aboutUs} />
            </div>
        </div>
    )
}
