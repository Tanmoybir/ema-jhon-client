import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useAuth = () => {
    const userContext = useContext(AuthContext)
    return userContext
};

export default useAuth;