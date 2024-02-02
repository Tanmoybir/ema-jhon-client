import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";



const AllProducts = () => {
    const [category, setCategory] = useState('')
    const [page, setPage] = useState(1)
    const axios = useAxios()
    const limit = 9

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1)
        }

    }


    const handleNext = () => {
        if (page < totalPage) {
            setPage(page + 1)
        }
    }

    const handleCategory = (category) => {
        setCategory(category)
    }

    const { data: products, isLoading } = useQuery({
        queryKey: ['products', page, limit, category],
        queryFn: async () => {
            return await axios.get(`/products/?page=${page}&limit=${limit}&category=${category}`)
        }
    })

    // console.log(page);
    // console.log(products?.data?.result?.category);
    // console.log(category);
    const totalData = products?.data?.total
    // console.log(totalData);

    const totalPage = Math.ceil(totalData / limit)
    // console.log(totalPage);
    return (
        <div>
            <div className="my-10 flex items-center justify-center gap-4">
                <button onClick={() => handleCategory('')} className={category === '' ? "btn btn-accent" : "btn btn-ghost"} >All</button>
                <button onClick={() => handleCategory("Men's Sneaker")} className={category === "Men's Sneaker" ? "btn btn-accent" : "btn btn-ghost"}>Mens Sneaker</button>
                <button onClick={() => handleCategory('Bottle')} className={category === 'Bottle' ? "btn btn-accent" : "btn btn-ghost"}>Bottle</button>
                <button onClick={() => handleCategory('Cap')} className={category === 'Cap' ? "btn btn-accent" : "btn btn-ghost"}>Cap</button>
                <button onClick={() => handleCategory('Earphones')} className={category === 'Earphones' ? "btn btn-accent" : "btn btn-ghost"}>Earphones</button>
                <button onClick={() => handleCategory('Bag')} className={category === 'Bag' ? "btn btn-accent" : "btn btn-ghost"}>Bag</button>
                <button onClick={() => handleCategory("Men's Boot")} className={category === "Men's Boot" ? "btn btn-accent" : "btn btn-ghost"}>Mens Boot</button>
                <button onClick={() => handleCategory("Men's Pants")} className={category === "Men's Pants" ? "btn btn-accent" : "btn btn-ghost"}>Mens Pants</button>
            </div>

            {isLoading ? <h1>loading...</h1> :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        products?.data?.result?.map(product => <ProductCard key={product._id} product={product} />)
                    }
                </div>}
            {/* pagination */}
            {isLoading ? <h1>loading...</h1>
                :
                <div className="flex justify-center my-12">
                    <div className="join">
                        <button onClick={handlePrevious} className="join-item btn">«</button>
                        {
                            Array(totalPage)
                                .fill(0)
                                .map((item, index) => {
                                    const pageNumber = index + 1
                                    return (
                                        <button key={index}
                                            onClick={() => setPage(pageNumber)}
                                            className={`${pageNumber === page ? "join-item btn btn-primary" : "join-item btn btn-ghost"}`}>{pageNumber}
                                        </button>

                                    )
                                })
                        }
                        <button onClick={handleNext} className="join-item btn">»</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default AllProducts;