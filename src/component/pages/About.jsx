import Footer from "./Footer"
import team from '../../assets/team.png'

const About = () => {
    return (
        <div>
            {/* WIDE + SHARE = WIRE <br />
            color 08c0fa to 006bec */}
            <div className="pt-20 bg-white mx-36">
                <h1>About WIRE</h1>
                <p>WIRE is a blog reading platform to expand your knowledge on the vast universe. </p>
                <img src={team} alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default About
