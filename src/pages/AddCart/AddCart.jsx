import { useQuery } from "@tanstack/react-query";
import Container from "../../components/util/Container";
import useAxios from "../../hooks/useAxios";
import { auth } from "../../config/firebase.config";
import AddCartCard from "./AddCartCard";

const AddCart = () => {
    const axios = useAxios()
    
    const { data } = useQuery({
        queryKey: ['addCart'],
        queryFn: async () => {
            const email = auth.currentUser.email
            return await axios.get(`/user/bookings?email=${email}`)
        }
    })
    // console.log(data);
    return (
        <Container>
            <div className="">
                {
                    data?.data?.map(item => <AddCartCard key={item._id} item={item}/>)
                }
            </div>
        </Container>
    );
};

export default AddCart;