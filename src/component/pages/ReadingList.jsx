import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../helpers/AuthContext";

const ReadingList = () => {
    const [blogs, setBlogs] = useState([]);
    const { search } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/posts");
                // await new Promise((resolve) => setTimeout(resolve, 1000));
                setBlogs(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="py-20 px-24">
            <div className='grid'>
                {blogs && blogs
                    .filter((val) => {
                        return search.toLowerCase() === '' || val.title.toLowerCase().includes(search.toLowerCase());
                    }).map((val, i) => {
                        return <div key={i} >
                            <div className='w-full overflow-clip grid grid-cols-6 mb-6'>
                                <div
                                    className='h-full w-full col-span-2 rounded-md bg-lime-500 cursor-pointer'
                                    style={{
                                        backgroundImage: `url('http://localhost:3001/${val.image}')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }} />
                                <div className='px-3 py-3 col-start-3 col-span-4'>
                                    <div className='mb-1'><span>Business, Travel</span> <span>- July 2, 2023</span></div>
                                    <h2 className='mb-4 font-bold'>{val.title}</h2>
                                    <Link to={`/postById/${val.id}`}>
                                        <div className='mb-4 line-clamp-2' dangerouslySetInnerHTML={{ __html: val.description }} />
                                    </Link>
                                    <div className='flex'>
                                        <div>
                                            <em>Alember Shreesh</em>
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
