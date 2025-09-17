import ReusableBackBtn from '@/components/ReusableBackBtn'
import { fetchFooter } from '@/utils/fetch/footer'
import Image from 'next/image'

export default async function Support() {
    const footer = await fetchFooter()
    console.log(footer);
    
    return (
        <div>
            <ReusableBackBtn path={'Support'} />
            <div className='p-5'>
                <div className='flex gap-5 bg-white rounded p-4 items-center '>
                    <Image
                        src={'call.svg'}
                        alt='Inspire online logo'
                        width={24}
                        height={24}
                        priority
                        className='object-contain'
                    />
                    <p className="text-gray-400 text-sm leading-2">Call us on</p>
                    <p className="text-neutral-900 text-sm leading-2">{}</p>
                </div>
            </div>
        </div>
    )
}
