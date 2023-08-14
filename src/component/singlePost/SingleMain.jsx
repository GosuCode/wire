import { GoComment } from 'react-icons/go'
import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../../helpers/AuthContext"
import { MdDeleteForever } from 'react-icons/md'
import { TbHeartPlus } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { toast, ToastContainer } from 'react-toastify'
import moment from 'moment'
import axios from "axios"
import user from '../../assets/user.png'

const SingleMain = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { authState, theme } = useContext(AuthContext);
    const commentRef = useRef(null);         //for scrolling down to the comment section

    const scrollToComment = () => {
        commentRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/postById/${id}`).then((response) => {
            setBlog(response.data);
        });

        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data);
        });
    }, [id]);

    const addComment = () => {
        axios.post("http://localhost:3001/comments", { commentBody: newComment, PostId: id, },
            {
                headers: { accessToken: localStorage.getItem("accessToken"), },
            }
        )
            .then((response) => {
                if (response.data.error) {
                    toast.warn('User not logged In!')
                } else {
                    const commentToAdd = { commentBody: newComment, username: response.data.username, };
                    setComments([...comments, commentToAdd]);
                    setNewComment("");
                }
            });
    };

    const deleteComment = (id) => {
        axios
            .delete(`http://localhost:3001/comments/${id}`, {
                headers: { accessToken: localStorage.getItem("accessToken") },
            })
            .then(() => {
                setComments(
                    comments.filter((val) => {
                        return val.id !== id;
                    })
                );
            });
    };

    const likeAPost = (postId) => {
        axios.post("http://localhost:3001/likes",
            { PostId: postId },
            { headers: { accessToken: localStorage.getItem("accessToken") } }
        )
            .then((res) => {
                if (res.data.error) toast.warning("User not logged In!")
            });
    };

    const bookmarkPost = (postId) => {
        axios.post("http://localhost:3001/bookmarks",
            { PostId: postId },
            { headers: { accessToken: localStorage.getItem("accessToken") } }
        )
            .then((res) => {
                if (res.data.error) toast.warning("User not logged In!")
                toast.success("Saved to Bookmark")
            });
    };


    const formatCreatedAt = (timestamp) => {
        return moment(timestamp).format("MMMM Do YYYY");
    };

    return (
        <>
            <div className="fixed md:ml-10 mt-24">
                <button onClick={() => {
                    likeAPost(blog.id);
                }} className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                    <TbHeartPlus className="text-2xl hover:text-rose-500" />
                    {/* <span>{likesCount.length} </span> */}
                </button>
                <div onClick={scrollToComment} className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                    <GoComment className="text-2xl hover:text-blue-500" />
                    {/* <span>{commentCount.length} </span> */}
                </div>
                <div onClick={() => {
                    bookmarkPost(blog.id)
                }} className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                    <BsBookmark className="text-2xl hover:text-yellow-400" />
                    {/* <span>{bookmarkCount.length} </span> */}
                </div>
                <div className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                    <FiMoreHorizontal className="text-2xl hover:text-slate-500" />
                </div>
            </div>
            <div className={`col-start-3 col-span-9 md:col-start-3 md:col-span-7 mt-16 md:mt-24 ${!theme ? "bg-white" : "bg-[#121212]"}  shadow-sm shadow-slate-400`}>
                <Link to={`http://localhost:3001/${blog.image}`}>
                    <img src={`http://localhost:3001/${blog.image}`} alt="" className='w-full h-40 md:h-[340px] rounded-t-md' />
                </Link>
                <div className='flex mt-4 gap-2'>
                    <div className='grid items-center'>
                        <img src={user} alt="user-image" className='h-14 w-14 rounded-full m-2 bg-orange-400' />
                    </div>
                    <div className='grid items-center py-3 capitalize'>
                        <div className='font-semibold text-base'>{blog.username}</div>
                        <span className='text-xs brightness-75'>{formatCreatedAt(blog.createdAt)}</span>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='pl-10'>
                        <h1 className='font-extrabold text-xl md:text-4xl font-sans'>
                            {blog.title}
                        </h1>
                    </div>
                </div>
                <div className="px-3 md:px-16 md:p-20 py-8 font-serif mt-10 text-xl leading-10 brightness-90 text-justify">
                    <span className='text-sm'>Last Updated: {formatCreatedAt(blog.updatedAt)}</span>
                    <p dangerouslySetInnerHTML={{ __html: blog.description }} />
                </div>
                <hr />

                {/* comment section */}

                <div className="md:px-16 py-8 mb-6" ref={commentRef}>
                    <section className="mb-4 font-bold text-lg">
                        <h2>Top comments </h2>
                    </section>
                    <>
                        <div className="">
                            <div className='flex mb-4'>
                                <span className=' capitalize bg-purple-700 text-xl text-white rounded-full h-10 w-10 grid place-items-center m-1 p-1' >
                                    {authState.username.charAt(0)}
                                </span>
                                <div className="mb-3">
                                    <input name="" id="" cols="80" rows="2"
                                        className='focus:outline-none border-2 focus:border-blue-500 rounded-lg text-lg md:w-[400px] w-[75%] md:p-1'
                                        placeholder='Add a comment'
                                        autoComplete="off"
                                        value={newComment}
                                        onChange={(event) => {
                                            setNewComment(event.target.value);
                                        }} />
                                    <button onClick={addComment} className='shadow-sm hover:shadow-slate-400 border border-blue-500 font-bold py-1 ml-6 px-4 rounded-md'> Add Comment</button>
                                </div>
                            </div>
                            {comments.map((val, key) => {
                                return (
                                    <div className='grid grid-cols-12 items-center' key={key}>
                                        <span className='col-start-1 col-span-2 md:col-span-1 capitalize bg-purple-700 text-xl text-white rounded-full h-10 w-10 grid place-items-center'>
                                            {val.username.charAt(0)}
                                        </span>
                                        <div className='col-start-3 md:col-start-2 col-span-full p-4'>
                                            <div>
                                                <button className='text-sm font-semibold capitalize'>{val.username}</button>
                                            </div>
                                            <div className='px-3 mb-4 text-sm flex justify-between'>
                                                <p>
                                                    {val.commentBody}
                                                </p>
                                                {authState.username === val.username && (
                                                    <>
                                                        <button
                                                            onClick={() => {
                                                                deleteComment(val.id);
                                                            }}
                                                            className='text-xl'
                                                        >
                                                            <MdDeleteForever className="text-red-400" />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                            <hr />
                                        </div>
                                        <ToastContainer />
                                    </div>
                                )
                            })}
                        </div>

                    </>
                </div>
            </div>
        </>
    )
}

export default SingleMain
