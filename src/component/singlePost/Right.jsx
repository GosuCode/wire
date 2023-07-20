import { Link } from "react-router-dom"
import user from '../../assets/user.jpg'

const Right = () => {
    return (
        <>
            <div className="px-4 mb-4 bg-white rounded-md shadow-sm shadow-slate-500">
                <div className="bg-green-500 h-10 rounded-t-md"></div>
                <Link className="flex -mt-6 mb-3">
                    <span className="mr-2">
                        <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                    </span>
                    <span className="mt-7 font-semibold text-xl">
                        Alember Shreesh
                    </span>
                </Link>
                <div>
                    <button className="w-full text-center bg-blue-600 text-white hover:bg-blue-700 rounded-md px-4 py-2 text-lg">
                        Follow
                    </button>
                </div>
                <div className="line-clamp-3 mt-3">
                    Here some bio.
                </div>
                <ul className="pb-3">
                    <li className="mt-3">
                        <div className="text-sm font-semibold">LOCATION</div>
                        <div>Brazil</div>
                    </li>
                    <li className="mt-3">
                        <div className="text-sm font-semibold">EDUCATION</div>
                        <div>Federal University of Amazonas</div>
                    </li>
                    <li className="mt-3">
                        <div className="text-sm font-semibold">JOINED</div>
                        <time>Sep 8, 2022</time>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Right
