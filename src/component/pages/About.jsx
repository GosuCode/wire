import Footer from "./Footer"
import group from '../../assets/group.jpg'

const About = () => {
    return (
        <>
            {/* WIDE + SHARE = WIRE <br />
            color 08c0fa to 006bec */}
            <div className="pt-20 mx-36 rounded-md mb-10 shadow-md shadow-gray-400">
                <div className="px-24 bg-white">
                    <h1 className="text-4xl font-bold pb-4">About WIRE</h1>
                    <p className="text-xl">
                        Welcome to WIRE, the dynamic blog-sharing platform. Explore captivating blogs and engage in vibrant discussions through comments. Unleash your creativity and connect with a thriving community of writers and readers.
                    </p>
                    <div className="w-full grid place-items-center">
                        <h1 className="text-4xl font-bold w-full text-left py-4">Team</h1>
                        <img src={group} className="h-[400px] w-[700px]" alt="image" />
                    </div>
                    <p className="text-center py-5 text-xl">Happy coding ❤️</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
