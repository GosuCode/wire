import Post from "./Post"

const Posts = () => {

    return (
        <div className="md:mt-16">
            <div className='flex text-xl hover:cursor-pointer'>
                <div className='hover:font-semibold py-2 px-3' >Latest</div>
                <div className='hover:font-semibold py-2 px-3'>Top</div>
            </div>
            <div>
                <Post />
            </div>
        </div>
    )
}

export default Posts
