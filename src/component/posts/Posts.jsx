import { GoComment } from 'react-icons/go'
import { TbHeartPlus } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../helpers/AuthContext'
import moment from 'moment'
import SkeletonLoader from './SkeletonLoader'

const Posts = () => {

    const { search, theme } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);
    const [latestFirst, setLatestFirst] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const response = await axios.get("http://localhost:3001/posts");
                setLoading(false);
                setBlogs(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const formatCreatedAt = (timestamp) => {
        return moment(timestamp).format("MMMM Do YYYY");
    };

    // const sortedPosts = [...blogs].sort((a, b) => b.id - a.id);

    const handleSortClick = () => {
        // Toggle the latestFirst state to reverse the sorting order
        setLatestFirst((prevLatestFirst) => !prevLatestFirst);
    };

    // Sort the posts based on the id property
    const sortedPosts = [...blogs].sort((a, b) => {
        // Use the latestFirst state to determine the sorting order
        return latestFirst ? b.id - a.id : a.id - b.id;
    });

    return (
        <>
            <div className='flex text-xl hover:cursor-pointer pt-14'>
                <div className={`hover:font-semibold py-2 px-3`} onClick={handleSortClick}>
                    {latestFirst ? 'Latest' : 'Oldest'}
                </div>
            </div>
            <>
                {!loading ? (
                    <div>
                        {sortedPosts
                            .filter((val) => {
                                return search.toLowerCase() === '' || val.title.toLowerCase().includes(search.toLowerCase());
                            })
                            .map((val, i) => {
                                return (
                                    <div key={i} className={`${!theme ? "bg-white" : "bg-[#121212]"} rounded-md shadow-md mb-6 mt-4`}>
                                        <div>
                                            <Link to={`/postById/${val.id}`}>
                                                <div className='w-full'>
                                                    <img src={`http://localhost:3001/${val.image}`} alt="" className='w-full h-40 md:h-[300px] rounded-t-md' />
                                                </div>
                                            </Link>

                                            <div className='px-5 md:py-5 mb-2'>
                                                <div className='flex'>
                                                    <Link to={`/postById/${val.id}`}>
                                                        <div className='grid place-items-center text-2xl text-white font-semibold h-10 w-10 rounded-full m-1 p-1 capitalize bg-purple-600'>
                                                            {val.username.charAt(0)}
                                                        </div>
                                                    </Link>
                                                    <div className='grid items-center py-2 capitalize'>
                                                        <div className='text-sm font-semibold'>{val.username}</div>
                                                        <span className='text-xs brightness-75'>{formatCreatedAt(val.createdAt)}</span>
                                                    </div>
                                                </div>

                                                <div className='lg:pl-10'>
                                                    <Link to={`/postById/${val.id}`}>
                                                        <div>
                                                            <h1 className='font-bold text-lg lg:text-3xl'>
                                                                {val.title}
                                                            </h1>
                                                        </div>
                                                        <div className='flex justify-between items-center brightness-75'>
                                                            <div className='flex items-center py-1 gap-2 text-lg'>
                                                                <span>
                                                                    <GoComment />
                                                                </span>
                                                                <span>
                                                                    Add comment
                                                                </span>
                                                            </div>
                                                            <div className='p-3 flex place-items-center gap-2 text-xl'>
                                                                <span>
                                                                    <TbHeartPlus />
                                                                </span>
                                                                <span>{val.Likes.length}</span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                ) : (
                    <div>
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                    </div>
                )}
            </>
        </>
    )
}

export default Posts
