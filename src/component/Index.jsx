import Listings from "./pages/Listings"
import Posts from "./posts/Posts"
import Sidebar from "./toolbar/Sidebar"

const Index = () => {
    return (
        <div className="md:grid grid-cols-5 lg:grid-cols-12 lg:gap-4 lg:p-4 lg:px-28">
            <div className="col-start-1 pl-2 col-span-1 lg:col-span-3">
                <Sidebar />
            </div>
            <div className="col-start-2 col-span-4 px-4 lg:col-start-4 lg:col-span-6">
                <Posts />
            </div>
            <div className="lg:col-start-10 lg:col-span-3 lg:block hidden">
                <Listings />
            </div>
        </div>
    )
}

export default Index
