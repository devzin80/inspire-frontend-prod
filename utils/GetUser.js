// no 'use client' or 'use server' at the top
import { cookies  } from 'next/headers'

export function GetUser() {
    // Server-side check
    if (typeof window === 'undefined') {
        const cookieStore = cookies() // synchronous
        const userCookie = cookieStore.get('user')?.value || null
        return { loginStatus: userCookie }
    }

    // Client-side
    const userCookie =
        document.cookie
            .split('; ')
            .find((row) => row.startsWith('user='))
            ?.split('=')[1] || null

    return { loginStatus: userCookie }
}
