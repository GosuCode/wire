import Footer from "./Footer"

const Faq = () => {
    return (
        <>
            <div className="w-full h-full">
                <div className="pt-28 mx-32">
                    <div className="bg-white rounded-sm pt-10 px-20 shadow-md shadow-gray-400 text-xl pb-6">
                        <h1 className="text-4xl font-bold">Frequently Asked Questions 🤔</h1>
                        <em>Some of these are not actually asked frequently, but they&apos;re still good to know.</em><br /><br />

                        <h2 className="text-2xl font-bold">Who can post to WIRE?</h2>
                        <p>Only Admin can post to this site.</p><br />

                        <h2 className="text-2xl font-bold">How do I delete my account?</h2>
                        <p>
                            If you require to delete your account completely, please e-mail <span className="text-blue-600">wire@gmail.com</span> with the subject line &quot;Full Account Deletion&quot; and we will ensure that all of your data is purged from the systems.
                        </p><br />

                        <h2 className="text-2xl font-bold">Can I use profanity in my comments?</h2>
                        <p>
                            We don&apos;t allow any profanity in our comment section, if we find anything that is profane (vulgar, offensive, desrespectful) we will delete your account permanently.
                        </p><br />

                        <h2 className="text-2xl font-bold">I found a bug (not a security vulnerability). How do I report it?</h2>
                        <p>
                            Please email <span className="text-blue-600">wire@gmail.com</span>
                        </p><br />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faq
