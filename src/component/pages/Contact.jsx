import Footer from "./Footer"

const Contact = () => {
    return (
        <>
            <div className="w-full h-full pb-20">
                <div className="pt-28 mx-32">
                    <div className="bg-white rounded-sm pt-10 px-20 shadow-md shadow-gray-400 text-xl pb-6">
                        <h1 className="text-4xl font-bold">Contacts</h1><br />

                        <ul className="text-xl">
                            <li>We would love to hear from you!</li><br />
                            <li>Email: <span className="text-blue-700 underline">wire@gmail.com</span> 😁</li><br />
                            <li>Twitter: <span className="text-blue-700 underline">@wire</span> 👻</li><br />
                            <li>Report a vulnerability: <span className="text-blue-700 underline">wire@gmail.com</span> 🐛</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact
