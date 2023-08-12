import PropTypes from "prop-types";
import Navbar from "../../component/toolbar/Navbar";
import { AuthContext } from "../../helpers/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";


const Layout = ({ children }) => {
    const [authState, setAuthState] = useState({
        username: "",
        email: "",
        id: 0,
        status: false,
        createdAt: 0
    })
    const [search, setSearch] = useState('');
    const [theme, setTheme] = useState(false);

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
                        email: response.data.email,
                        createdAt: response.data.createdAt,
                        id: response.data.id,
                        status: true,
                    });
                }
            });
    }, []);
    return (
        <div className={`${!theme ? "bg-[#f0f8ff] text-black" : "bg-[#20252b] text-white"}`}>
            <AuthContext.Provider value={{ authState, setAuthState, search, setSearch, theme, setTheme }}>
                <Navbar />
                {children}
            </AuthContext.Provider>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
