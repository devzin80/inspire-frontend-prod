import ReusableBackBtn from '@/components/ReusableBackBtn'
import SubjectTile from '@/components/subjectTile'
import { fetchSubjectBySlug } from '@/utils/fetch/subjectBySlug'
import Image from 'next/image'

export default async function Page({ params }) {
    const { subject } = await params
    const subjectDetails = await fetchSubjectBySlug(subject)
    return (
        <div className='relative'>
            <ReusableBackBtn path={subjectDetails?.title} />
            <SubjectTile  subjectDetails={subjectDetails} subject={subject} />
        </div>
    )
}
