'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'

export default function BannerCarousel({ banners }) {
    const bannerData =
        banners && banners.length > 0
            ? banners
            : [
                  {
                      id: 'default',
                      image: '/default-carousel-img.jpg',
                      alt: 'Default Banner',
                      link: '#',
                  },
              ]

    const [current, setCurrent] = useState(0)

    // Auto-slide every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % bannerData.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [bannerData.length])

    const handlers = useSwipeable({
        onSwipedLeft: () =>
            setCurrent((prev) => (prev + 1) % bannerData.length),
        onSwipedRight: () =>
            setCurrent(
                (prev) => (prev - 1 + bannerData.length) % bannerData.length,
            ),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    })

    return (
        <div
            {...handlers}
            className='relative w-[90vw] mx-auto overflow-hidden rounded-2xl shadow-xl h-[200px] mt-[10vh] sm:h-[350px] md:h-[500px]'
            role='region'
            aria-label='Banner Carousel'
        >
            <AnimatePresence
                initial={false}
                custom={current}
            >
                {bannerData?.map((banner, index) =>
                    index === current ? (
                        <motion.div
                            key={banner.id}
                            className='absolute top-0 left-0 w-full h-full'
                            initial={{
                                opacity: 0,
                                x: '100%',
                                scale: 1.05,
                                filter: 'blur(6px)',
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                filter: 'blur(0px)',
                            }}
                            exit={{
                                opacity: 0,
                                x: '-100%',
                                scale: 0.95,
                                filter: 'blur(6px)',
                            }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1], // custom easing like modern sites
                            }}
                        >
                            <Link
                                href={banner.url || '#'}
                                aria-label={banner.alt || 'Banner'}
                                className='block w-full h-full'
                            >
                                <Image
                                    src={banner.image}
                                    alt={banner.alt || 'Banner'}
                                    fill
                                    className='object-cover'
                                    priority={index === 0}
                                    loading={index === 0 ? 'eager' : 'lazy'}
                                />
                                {/* Fancy gradient overlay */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent'></div>
                            </Link>
                        </motion.div>
                    ) : null,
                )}
            </AnimatePresence>

            {/* Navigation dots */}
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
                {bannerData?.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            idx === current
                                ? 'bg-white scale-110 shadow-lg'
                                : 'bg-neutral-500/60 hover:bg-neutral-300'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
