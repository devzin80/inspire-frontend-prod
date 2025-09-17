
import VideoTile from '@/components/videoTile'
import { fetchVideoBySlug } from '@/utils/fetch/videoBySlug'

export default async function Page({ params }) {
    const { video } = await params
    const videoData = await fetchVideoBySlug(video)

    return (
        <div>
            <VideoTile videoData={videoData} />
        </div>
    )
}
