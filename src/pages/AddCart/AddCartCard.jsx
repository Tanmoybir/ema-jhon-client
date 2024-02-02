import Container from "../../components/util/Container";
import PropTypes from 'prop-types';
import useAxios from "../../hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddCartCard = ({ item }) => {
    const { _id, image, name, price, ratings } = item
    const axios = useAxios()
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationKey: ['addCart'],
        mutationFn: async (id) => {
            const res = await axios.delete(`/user/cancel-bookings/${id}`)
            return res
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['addCart'] })
        }
    })

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto mt-5">
                <div className="max-w-4xl bg-slate-200 py-5 shadow-lg">
                    {/* title */}
                    <div className="relative">
                        <h1 className="text-4xl font-semibold px-4 py-4">Shopping Cart</h1>
                        <p className="absolute bottom-0 right-12 text-lg">Price</p>
                    </div>
                    <span className="divider mx-3"></span>
                    {/* meddle */}
                    <div className="grid grid-cols-3 gap-3">
                        {/* image */}
                        <div className="">
                            <img src={image} alt="" />
                        </div>
                        {/* text */}
                        <div className="">
                            <h1 className="text-2xl font-semibold">{name}</h1>
                            <p className="text-lg font-medium">Ratings{ratings}</p>
                            <button onClick={() => mutate(_id)} className="btn btn-ghost">Delete</button>
                        </div>
                        {/* price */}
                        <div className="flex justify-end mr-10">
                            <h1>${price}</h1>
                        </div>

                    </div>
                    <span className="divider mx-3"></span>
                    {/* last */}
                    <div className=""></div>
                </div>
            </div>
        </Container>
    );
};

export default AddCartCard;
AddCartCard.propTypes = {
    item: PropTypes.object
}