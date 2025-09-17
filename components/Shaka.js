'use client'
import { useEffect, useRef, useState } from 'react'
import shaka from 'shaka-player/dist/shaka-player.ui'

export default function UltimateShakaWatermark({ src, user, poster }) {
    const videoContainerRef = useRef(null)
    const videoRef = useRef(null)
    const [watermarkStyle, setWatermarkStyle] = useState({})

    // Initialize Shaka Player + UI
    useEffect(() => {
        shaka.polyfill.installAll()

        if (!shaka.Player.isBrowserSupported()) {
            console.error('Browser not supported!')
            return
        }

        const video = videoRef.current
        const container = videoContainerRef.current

        const player = new shaka.Player(video)
        const ui = new shaka.ui.Overlay(player, container, video)

        player
            .load(src)
            .then(() => console.log('✅ Video loaded successfully'))
            .catch((err) => console.log('❌ Error loading video:', err))

        return () => {
            player.destroy()
            ui.destroy()
        }
    }, [src])

    // Watermark random movement + fade
    useEffect(() => {
        const moveWatermark = () => {
            if (!videoContainerRef.current) return
            const container = videoContainerRef.current.getBoundingClientRect()

            const randomX = Math.random() * (container.width - 150) // 150 = watermark width buffer
            const randomY = Math.random() * (container.height - 30) // 30 = watermark height buffer

            setWatermarkStyle({
                top: `${randomY}px`,
                left: `${randomX}px`,
            })
        }

        moveWatermark()
        const interval = setInterval(moveWatermark, 4000) // move every 4s
        return () => clearInterval(interval)
    }, [])

    return (
        <div
            ref={videoContainerRef}
            style={{
                width: '100%',
                maxWidth: '900px',
                margin: 'auto',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <video
                ref={videoRef}
                className='w-full h-auto aspect-video object-contain'
                
                poster={poster}
                disablePictureInPicture
                disableRemotePlayback
            />

            {/* Floating watermark */}
            <div
                className='text-red-600 text-xs font-semibold opacity-0 animate-fade'
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    textShadow: '2px 2px 6px black',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.5s ease-in-out',
                    ...watermarkStyle,
                }}
            >
                {user.name} | {user.phone}
            </div>

            <style jsx>{`
                @keyframes fadeInOut {
                    0% {
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
                .animate-fade {
                    animation: fadeInOut 2s linear infinite;
                }
            `}</style>
        </div>
    )
}
