import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../helpers/AuthContext";

const ReadingList = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const { search } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get("http://localhost:3001/bookmarks")
                    .then((res) => {
                        setBookmarks(res.data);
                    })
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="py-20 px-24">
            <div className='grid'>
                {bookmarks && bookmarks
                    .filter((val) => {
                        return search.toLowerCase() === '' || val.Post.title.toLowerCase().includes(search.toLowerCase());
                    }).map((val, i) => {
                        return <div key={i} >
                            <div className='w-full overflow-clip grid grid-cols-6 mb-6'>
                                <div
                                    className='h-full w-full col-span-2 rounded-md bg-blue-500 cursor-pointer'
                                    style={{
                                        backgroundImage: `url('http://localhost:3001/${val.Post.image}')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }} />
                                <div className='px-3 py-3 col-start-3 col-span-4'>
                                    <h2 className='mb-4 font-bold text-xl'>{val.Post.title}</h2>
                                    <div className='mb-1 text-xs'><span> July 2, 2023</span></div>
                                    <Link to={`/postById/${val.Post.id}`}>
                                        <div className='mb-4 line-clamp-2' dangerouslySetInnerHTML={{ __html: val.Post.description }} />
                                    </Link>
                                    <div className='flex'>
                                        <div className="capitalize">
                                            <em>{val.Post.username}</em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ReadingList
