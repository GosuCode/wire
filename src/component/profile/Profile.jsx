import ProfileInfo from './ProfileInfo'
import ActivityStats from './ActivityStats'
import User from './User'

const Profile = () => {
    return (
        <div className='w-full grid place-items-center'>
            <div className='pt-20 w-2/3'>
                <User />
                <ProfileInfo />
                <ActivityStats />
            </div>
        </div>
    )
}

export default Profile
