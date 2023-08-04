
const SkeletonLoader = () => {
    return (
        <div>
            <div className='bg-white  rounded-md shadow-md mb-6 mt-4'>
                <div>
                    <div className='w-full h-40 md:h-[300px] rounded-t-md animate-pulse bg-slate-200 bg-gradient-to-r from-slate-100 to-slate-200 '>
                    </div>

                    <div className='px-5 md:py-5 mb-2'>
                        <div className='flex'>
                            <div className='grid place-items-center text-2xl animate-pulse bg-slate-200 text-white font-semibold h-10 w-10 rounded-full m-1 p-1 capitalize'>
                            </div>
                            <div className='mt-3 rounded-md h-5 w-1/6 animate-pulse bg-slate-200'>
                            </div>
                        </div>

                        <div className='bg-slate-200 animate-pulse rounded-md h-10 w-11/12'>
                        </div>
                        <div className='bg-slate-200 animate-pulse mt-3 rounded-md h-10 w-3/4'>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonLoader
