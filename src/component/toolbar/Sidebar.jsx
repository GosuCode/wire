import { useContext } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { FcAbout, FcContacts, FcHome, FcReading } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../helpers/AuthContext';

const Sidebar = () => {
    const { theme } = useContext(AuthContext);

    const sidebarData = [
        {
            name: 'Home',
            icon: <FcHome />,
            path: '/',
        },
        {
            name: 'Bookmarks',
            icon: <FcReading />,
            path: '/bookmarks',
        },
        {
            name: 'FAQ',
            icon: <FaLightbulb className='text-yellow-200' />,
            path: '/faq',
        },
        {
            name: 'About',
            icon: <FcAbout />,
            path: '/about',
        },
        {
            name: 'Contact',
            icon: <FcContacts />,
            path: '/contact',
        },
    ]
    return (
        <div className={`px-2 fixed md:top-16 bottom-0 bg-white w-full md:w-0 md:bg-transparent md:flex-col flex h-[8%] md:h-auto justify-around md:justify-normal`}>
            {sidebarData.map((val, key) => {
                return (
                    <Link to={val.path} key={key} className={`group flex mt-5 lg:w-60 h-10 ${!theme ? "md:hover:bg-indigo-100" : "md:hover:bg-slate-500"}  rounded-md active:bg-white`}>
                        <div className={`grid items-center px-2 text-2xl ${!theme ? "bg-white" : "bg-black shadow-gray-500"} rounded-md shadow-md shadow-cyan-200
                        transition ease-in-out delay-75 group-hover:-translate-y-1 group-hover:scale-100 duration-300`}>
                            {val.icon}
                        </div>
                        <div className="lg:grid hidden md:grid items-center ml-4 lg:text-2xl">
                            {val.name}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Sidebar
