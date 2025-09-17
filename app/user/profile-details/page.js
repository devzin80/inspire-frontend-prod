
import UserProfileDetails from '@/components/ProfileDetails'
import ReusableBackBtn from '@/components/ReusableBackBtn'

export default async function ProfileDetails() {
    return (
        <div className='bg-[#F7F9FC]'>
            <ReusableBackBtn path={'My Profile'} />
            <UserProfileDetails />
        </div>
    )
}
