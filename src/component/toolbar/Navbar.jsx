import user from '../../assets/user.png'
import logo from '../../assets/logo.png'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../helpers/AuthContext'
import { useContext, useState } from 'react'
import User from './User'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { authState, setSearch, theme, setTheme } = useContext(AuthContext)

    const darkTheme = () => {
        setTheme(!theme)
    }

    return (
        <>
            <nav className={`flex z-10 fixed justify-between border-b border-slate-400 w-full md:px-28 ${!theme ? "bg-white" : "bg-[#121212]"}`}>
                <div className="flex gap-2">
                    <Link to={'/'} className='flex items-center'>
                        <img src={logo} alt="" className='h-14 rounded-full m-1 p-1' />
                        <span className='text-2xl font-bold'>WIRE.</span>
                    </Link>
                    <div className='md:grid items-center ml-3 hidden'>
                        <div className='flex w-[420px] h-10 px-2 py-[6px] border border-slate-400 rounded-sm'>
                            <input type="search" name="" id="" placeholder="Search..."
                                className={`md:w-full focus:outline-none lg:w-50 ${!theme ? "" : "bg-[#121212]"} `}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <FiSearch className='text-2xl' />
                        </div>
                    </div>
                </div>
                {!authState.status ? (
                    <>
                        <div className='flex items-center'>
                            <Link to={'/login'} className='border border-blue-500 rounded-md mr-2 grid items-center px-[15px] h-10 font-bold text-blue-600 hover:bg-blue-600 hover:text-white'>Login</Link>
                            <Link to={'/register'} className='border border-blue-500 rounded-md mr-2 grid items-center px-[15px] h-10 font-bold text-blue-600 hover:bg-blue-600 hover:text-white'>Register</Link>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center gap-4">
                        <div>
                            Welcome <strong className='uppercase'>{authState.username} </strong>!
                        </div>
                        <div className='cursor-pointer grid items-center' onClick={() => setShow(!show)}>
                            <img src={user} alt="user-profile" className='h-12 w-12 rounded-full' />
                        </div>
                        <div>
                            <button onClick={darkTheme} className='border border-blue-500 rounded-md mr-2 grid items-center px-[15px] h-10 font-bold text-blue-600 hover:bg-blue-600 hover:text-white'>Dark</button>
                        </div>
                    </div>
                )}
            </nav>
            {show && <User />}
        </>
    )
}

export default Navbar
