import ProductCard from "../../components/ProductCard";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";


const AllProducts = () => {

    const axios = useAxios()

    const { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            return await axios.get('/products')
        }
    })

    
    return (
        <div>
            <h1>All Products Coming Soon...</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products?.data?.result?.map(product => <ProductCard key={product._id} product={product}/> )
                }
            </div>
        </div>
    );
};

export default AllProducts;