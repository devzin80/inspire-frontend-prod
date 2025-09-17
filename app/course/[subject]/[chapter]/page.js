import ChapterTIle from "@/components/ChapterTIle";
import ReusableBackBtn from "@/components/ReusableBackBtn";
import { fetchChapterBySlug } from "@/utils/fetch/chapterBySlug";

export default async function Page({ params }) {
    const { chapter } = await params;
    const chapterDetails = await fetchChapterBySlug(chapter);
    return (
        <div>
            <ReusableBackBtn path={chapterDetails?.title} />
            <ChapterTIle  chapterDetails={chapterDetails} chapter={chapter}/>
        </div>
    );
}