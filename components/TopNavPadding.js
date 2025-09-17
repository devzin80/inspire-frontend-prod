'use client'

import { useIsPWA } from "@/utils/PwaChecker"


export default function TopNavPadding({ children }) {
    const isPWA = useIsPWA()
    return (
        <div className={`safe-pwa-padding ${isPWA ? 'pt-12' : ''} sticky top-0`}>
            {children}
        </div>
    )
}
