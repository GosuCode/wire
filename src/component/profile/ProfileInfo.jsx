import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../helpers/AuthContext';

const ProfileInfo = () => {

    const { authState } = useContext(AuthContext);

    const UserInfo = [
        {
            name: 'name',
            data: `${authState.username}`,
        },
        {
            name: 'email',
            data: `${authState.email}`
        },
        {
            name: 'about',
            data: 'I write code sometimes.'
        },
        {
            name: 'registered',
            data: `${authState.createdAt}`
        },
    ]


    return (
        <div className="mt-8">
            <div>
                {
                    UserInfo.map((val, key) => {
                        return (
                            <div key={key} className='mt-8 grid grid-cols-6'>
                                <label htmlFor={val.name} className='col-span-1 font-semibold capitalize'>{val.name} : </label>
                                <div className='col-start-3 col-span-full'>{val.data}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8">
                <Link to='/register'
                    className="border border-blue-500 rounded-md grid items-center px-[15px] h-10 font-bold text-blue-600 hover:bg-blue-600 hover:text-white">
                    <button>SIGN OUT</button>
                </Link>
                <Link to='/profile'
                    className="border border-blue-500 rounded-md grid items-center px-[15px] h-10 font-bold text-blue-600 hover:bg-blue-600 hover:text-white">
                    <button>UPDATE PROFILE</button>
                </Link>
            </div>
        </div>
    )
}

export default ProfileInfo
