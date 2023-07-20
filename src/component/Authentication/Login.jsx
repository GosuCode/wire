import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import Marquee from "react-fast-marquee";
import originalBoy from '../../assets/originalBoy.png'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    const login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({
                    username: response.data.username,
                    id: response.data.id,
                    status: true,
                });
                navigate("/");
            }
        });
    };

    return (
        <div className="bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
         h-screen grid justify-items-center">
            <Marquee className="text-9xl absolute overflow-hidden h-screen font-extrabold">
                Welcome to the Internet .
            </Marquee>

            <div className="flex z-10 rounded-lg drop-shadow-xl mt-36 bg-white h-[400px]">
                <div className="h-[385px] w-[300px] grid justify-items-center">
                    <p>{setAuthState.username}</p>
                    <h3 className="text-2xl">Login</h3>
                    <input
                        type="text"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                        autoComplete="off"
                        placeholder="Username"
                        className="shadow-sm h-10 shadow-slate-400 px-8 border-b-2 focus:outline-none border-blue-500"
                    />
                    <input
                        type="password"
                        autoComplete="off"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        placeholder="Password"
                        className="shadow-sm h-10 shadow-slate-400 px-8 border-b-2 focus:outline-none border-blue-500"
                    />
                    <button onClick={login}
                        className="border border-blue-500 rounded-md grid items-center px-[15px] h-10 font-bold text-blue-600 hover:bg-blue-600 hover:text-white">
                        Login
                    </button>
                    <p>
                        OR
                    </p>
                    <Link to={'/register'} className="text-blue-500 underline">
                        Register
                    </Link>
                </div>
                <div className="h-[400px] w-[300px] z-10 grid items-center">
                    <div className="border-2 border-blue-500 m-2 rounded-lg">
                        <img src={originalBoy} alt="login boy" className="h-[380px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
