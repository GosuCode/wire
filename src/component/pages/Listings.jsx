import { useContext } from "react"
import { AuthContext } from "../../helpers/AuthContext"

const Listings = () => {
    const { theme } = useContext(AuthContext)
    return (
        <div className={`${!theme ? "bg-white" : "bg-[#121212]"}  md:mt-16 fixed border-gray-200 border rounded-md mx-10 p-4`}>
            <div className="flex justify-between">
                <div>
                    Listing
                </div>
                <div>
                    See all
                </div>
            </div>
            <div className="mt-2">
                List of paid advertisements on job or any other things. Need to pay for the ads while creating it.
            </div>
        </div>
    )
}

export default Listings
