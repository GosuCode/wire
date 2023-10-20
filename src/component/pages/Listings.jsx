import { useContext } from "react"
import { AuthContext } from "../../helpers/AuthContext"

const Listings = () => {
    const { theme } = useContext(AuthContext)
    return (
        <div className={`${!theme ? "bg-white" : "bg-[#121212]"}  md:mt-16 fixed border-gray-200 border rounded-md mx-10 p-4`}>
            <h1 className="text-3xl font-bold mb-2 text-justify">Welcome Readers!</h1>
            <p className="text-lg text-justify pt-6 leading-8">
                Explore a world of captivating articles, thought-provoking stories, and insightful content. <br />
                Whether you&apos;re a passionate reader or a curious mind, our platform offers a diverse range
                of articles that will inspire, inform, and entertain you. <br /> Get ready to embark on a journey
                of knowledge and discovery. <br /><span className="font-semibold">Start exploring now!</span>
            </p>
        </div>
    )
}

export default Listings
