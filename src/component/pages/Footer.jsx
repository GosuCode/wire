import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div>
            <div>
                <Link to={'/'} className="text-blue-600">WIRE</Link> - A place to read.
            </div>
            <ul className="flex">
                <li>Home</li>
                <li>About </li>
                <li>FAQ </li>
                <li>Contact </li>
            </ul>
        </div>
    )
}

export default Footer
