import { GoComment } from 'react-icons/go'
import { BsBookmark } from 'react-icons/bs'
import user from '../../assets/user.png'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../helpers/AuthContext'

const Posts = () => {

    const { search } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/posts");
                setBlogs(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="md:mt-16">
            <div className='flex text-xl hover:cursor-pointer'>
                <div className='hover:font-semibold py-2 px-3' >Latest</div>
                <div className='hover:font-semibold py-2 px-3'>Top</div>
            </div>
            <div>


                <div>
                    {blogs && blogs
                        .filter((val) => {
                            return search.toLowerCase() === '' || val.title.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((val, i) => {
                            return (
                                <div key={i} className='bg-white rounded-md shadow-md mb-6 mt-4'>
                                    <div key={i}>
                                        <Link to={`/postById/${val.id}`}>
                                            <div className='w-full'>
                                                <img src={`http://localhost:3001/${val.image}`} alt="" className='w-full h-40 md:h-[300px] rounded-t-md' />
                                            </div>
                                        </Link>

                                        <div className='px-5 md:py-5 mb-2'>
                                            <div className='flex'>
                                                <Link to={`/postById/${val.id}`}>
                                                    <div className='grid items-center'>
                                                        <img src={user} alt="" className='h-12 rounded-full m-1 p-1' />
                                                    </div>
                                                </Link>
                                                <div className='grid items-center py-3'>
                                                    <div className='text-sm font-semibold'>{val.username}</div>
                                                    <span className='text-xs'>Jul 9 (13 mins ago)</span>
                                                </div>
                                            </div>

                                            <div className='lg:pl-10'>
                                                <div>
                                                    <Link to={`/postById/${val.id}`}>
                                                        <h1 className='font-bold text-lg lg:text-3xl'>
                                                            {val.title}
                                                        </h1>
                                                    </Link>
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex items-center py-1'>
                                                        <div>
                                                            <GoComment />
                                                        </div>
                                                        <div>
                                                            Add comment
                                                        </div>
                                                    </div>
                                                    <div className='p-3'>
                                                        <BsBookmark />
                                                        <span>{val.Likes.length}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>



            </div>
        </div>
    )
}

export default Posts
