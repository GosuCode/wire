import ProfileInfo from './ProfileInfo'
import User from './User'

const Profile = () => {
    return (
        <div className='w-full grid place-items-center'>
            <div className='pt-20 w-2/3'>
                <User />
                <ProfileInfo />
            </div>
        </div>
    )
}

export default Profile
