import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialConnectors = () => {
    return (
        <div>
            <div className='mt-4 w-full px-3 py-4 bg-white rounded-md j'>
                <p className='text-sm text-gray-700 font-medium mb-4'>
                    Connect us
                </p>
                <div className='flex items-center'>
                    {/* href={media.url.startsWith('http') ? media.url : `https://${media.url}`}
            // href={media.url}
            target='_blank'
            rel='noopener noreferrer'*/}
                    <Link
                        href={'#'}
                        target='_blank'
                        className=' cursor-pointer'
                    >
                        <div className='p-2'>
                            <Image
                                src={'/change-password.svg'}
                                alt='facebook'
                                width={24}
                                height={24}
                                priority={true}
                            />
                        </div>
                    </Link>
                    <div className='p-3'>
                        <Image
                            src={'/change-password.svg'}
                            alt='facebook'
                            width={24}
                            height={24}
                            priority={true}
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialConnectors
