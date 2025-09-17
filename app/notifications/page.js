import Notifications from '@/components/notification'
import ReusableBackBtn from '@/components/ReusableBackBtn'

export default function Page() {
    return (
        <>
        < ReusableBackBtn path={'Notifications'} />
            <Notifications />
        </>
    )
}
