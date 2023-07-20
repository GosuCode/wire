import { useContext, useEffect } from "react";
import { AuthContext } from "../../helpers/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
    const { authState, setAuthState } = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", id: 0, status: false });
        setTimeout(() => {
            window.location = "/"
        }, 1000)
    }

    useEffect(() => {
        axios.get("http://localhost:3001/auth/user", {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((response) => {
                if (response.data.error) {
                    setAuthState({ ...authState, status: false });
                } else {
                    setAuthState({
                        username: response.data.username,
                        id: response.data.id,
                        status: true,
                    });
                }
            });
    }, []);

    return (
        <div className="w-48 text-black absolute top-12 rounded-md right-0 bg-white shadow-sm shadow-slate-400
        mt-4 mr-1 p-2">
            <ul>
                <li className="px-4 py-2 cursor-pointer hover:bg-indigo-100 rounded-md font-semibold">
                    <Link to={'/profile'} className="capitalize">
                        {authState.username}
                    </Link>
                </li> <hr />
                <li className="px-4 py-2 cursor-pointer rounded-md opacity-60 hover:opacity-100 hover:bg-indigo-100">
                    <div>
                        Dashboard
                    </div>
                </li>
                <li className="px-4 py-2 cursor-pointer rounded-md opacity-60 hover:opacity-100 hover:bg-indigo-100">
                    <div>
                        Create Post
                    </div>
                </li>
                <li className="px-4 py-2 cursor-pointer rounded-md opacity-60 hover:opacity-100 hover:bg-indigo-100">
                    <div>
                        Reading List
                    </div>
                </li>
                <li onClick={logout} className="px-4 cursor-pointer py-2 rounded-md opacity-60 hover:opacity-100 hover:bg-indigo-100">
                    <div>
                        Sign Out
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default User
