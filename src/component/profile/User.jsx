import user from '../../assets/user.jpg'

const User = () => {
    return (
        <>
            <div className='w-full overflow-clip border border-gray-300'>
                <div className='w-full flex'>
                    <div className='h-28 w-28'
                        style={{
                            backgroundImage: `url(${user})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }} />
                    <div className='px-3 py-3'>
                        <div className='mb-1'><span>Alsreesh</span></div>
                        <div className='mb-4 font-bold flex text-gray-500'>
                            <div>Reader</div>
                            <div className='pl-4'>shreeshalember@gmail.com</div>
                        </div>
                        <div className='mb-4 line-clamp-2' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
