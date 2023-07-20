import PropTypes from "prop-types";
import Navbar from "../../component/toolbar/Navbar";
import { AuthContext } from "../../helpers/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";


const Layout = ({ children }) => {
    const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        status: false,
    })

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
        <div>
            <AuthContext.Provider value={{ authState, setAuthState }}>
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
