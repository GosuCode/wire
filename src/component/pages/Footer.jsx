import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-gray-200 w-full h-full grid place-items-center pt-10 pb-10">
            <div>
                <Link to={'/'} className="text-blue-600">WIRE</Link> - A place to read.
            </div>
            <ul className="flex gap-12 py-2 list-disc text-blue-600">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About </Link>
                <Link to={'/faq'}>FAQ </Link>
                <Link to={'/contact'}>Contact </Link>
            </ul>
            <ul className="flex gap-12 py-2 list-disc text-blue-600">
                <li>Code of Conduct</li>
                <li>Privacy Policy</li>
                <li>Terms of use</li>
            </ul>
            <div>
                Made with love and <span className="text-blue-600">React</span>. WIRE - 2023
            </div>
        </div>
    )
}

export default Footer
