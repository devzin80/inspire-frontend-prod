import { NextResponse } from 'next/server'

export function withCors(req, res) {
    const headers = new Headers(res.headers)

    headers.set('Access-Control-Allow-Origin', '*')
    headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    headers.set('Access-Control-Allow-Headers', '*')
    headers.set('Access-Control-Allow-Credentials', 'true')

    return new NextResponse(res.body, {
        status: res.status,
        headers,
    })
}

export function handleOptions() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true',
        },
    })
}
