import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";




const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
});

const useAxios = () => {
    // const navigate = useNavigate()
    instance.interceptors.response.use( (response) => {
        return response;
    },  (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            
            signOut(auth)
            .then(() => {
                
            }).catch((err) => {
                console.log(err.message);
            })
        }

    });
    return instance
};

export default useAxios;