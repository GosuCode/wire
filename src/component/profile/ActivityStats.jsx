
const ActivityStats = () => {
  return (
    <div className='mt-8'>
      <h3>Activity Stats</h3>

      <div className='grid grid-cols-2 mt-4'>

        <div>
          <span>Comment Stats</span>
          <div className='grid grid-cols-2 mt-2'>
            <div className='bg-slate-300 rounded-md'>Comments : </div>
          </div>
        </div>

        <div>
          <span>Blog Stats</span>
          <div className='grid grid-cols-2 mt-2'>
            <div className='bg-slate-300 rounded-md'>Bookmarked : </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ActivityStats
