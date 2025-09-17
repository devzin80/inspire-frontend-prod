import BottomNav from '@/components/BottomNav'
import LoginTrigger from '@/components/LoginTrigger'
import ProfileActions from '@/components/ProfileActions'
import ProfileHeader from '@/components/ProfileHeader'
import SocialConnectors from '@/components/SocialConnectors'
import { GetUser } from '@/utils/GetUser'

export default function Profile() {
    const { loginStatus:status } = GetUser()
    console.log(status);
    
    // const status = true;
    return (
        <div className='mb-14'>
            {status && <ProfileHeader />}
            {!status && <LoginTrigger />}
            <div className={`px-4 ${status ? 'py-8' : ''}  bg-[#f7f9fc]`}>
                <ProfileActions status={status} />
               { !status && <SocialConnectors />}
            </div>
            <BottomNav />
        </div>
    )
}
