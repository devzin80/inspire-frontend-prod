import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import sanitizeFilename from 'sanitize-filename'

// 📌 Upload directory inside public
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads')

// 📌 Ensure directory exists
async function ensureUploadDir() {
    await fs.promises.mkdir(UPLOAD_DIR, { recursive: true })
}

export async function POST(req) {
    try {
        const contentType = req.headers.get('content-type') || ''

        // ✅ Handle form-data uploads
        if (contentType.includes('multipart/form-data')) {
            const form = await req.formData()
            const files = form.getAll('images') // key: "images"

            if (!files || files.length === 0) {
                return NextResponse.json(
                    { error: 'No file(s) provided' },
                    {
                        status: 400,
                        headers: { 'Access-Control-Allow-Origin': '*' },
                    },
                )
            }

            const uploadedUrls = []

            for (const file of files) {
                if (!file || typeof file.arrayBuffer !== 'function') continue

                const buffer = Buffer.from(await file.arrayBuffer())

                await ensureUploadDir()
                const safeName = sanitizeFilename(
                    file.name || `upload-${Date.now()}`,
                )
                const uniqueName = `${Date.now()}-${Math.round(
                    Math.random() * 1e9,
                )}-${safeName}`
                const dest = path.join(UPLOAD_DIR, uniqueName)

                await fs.promises.writeFile(dest, buffer)
                uploadedUrls.push(`/uploads/${uniqueName}`)
            }

            return NextResponse.json(
                { urls: uploadedUrls },
                {
                    status: 201,
                    headers: { 'Access-Control-Allow-Origin': '*' },
                },
            )
        }

        return NextResponse.json(
            { error: 'Unsupported content type' },
            { status: 415 },
        )
    } catch (err) {
        console.error('upload error', err)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 },
        )
    }
}
