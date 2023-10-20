const SkellyList = () => {
    return (
        <div>
            <div className="w-full mt-4 overflow-clip grid grid-cols-6 mb-6 text-white border-2 border-cyan-200 rounded-md">
                <div className="h-full w-full col-span-2 rounded-md bg-gradient-to-r animate-pulse from-cyan-50 to-cyan-100 cursor-pointer" />
                <div className="px-3 py-3 col-start-3 col-span-4">
                    <div className="mb-1">
                        <h2 className="mb-4 font-bold text-xl animate-pulse bg-gradient-to-r from-cyan-50 to-cyan-100 w-4/5 h-10"></h2>
                        <span className="text-slate-300"></span>
                    </div>
                    <div className="mb-4 animate-pulse bg-gradient-to-r from-cyan-50 to-cyan-100 h-6">
                    </div>
                    <div className="flex animate-pulse bg-gradient-to-r from-cyan-50 to-cyan-100 h-6">
                        <strong><em></em></strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkellyList
