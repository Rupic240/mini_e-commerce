import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [authUser, setAuthUser] = useState({});

    useEffect(() => {
        const currUser = localStorage.getItem('currentUser');
        if (currUser) {
            setAuth(true);
            setAuthUser(JSON.parse(currUser));
        }
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

