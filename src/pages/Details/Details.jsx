import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import Container from "../../components/util/Container";
import { useState } from "react";




const Details = () => {
  const [userName, setUserName] = useState()
  const [email, setEmail] = useState()
  const [date, setDate] = useState()


  const axios = useAxios()
  const { id } = useParams()
  // console.log(id);
  const { data: product } = useQuery({
    queryKey: ['details'],
    queryFn: async () => {
      return await axios.get(`/products/${id}`)


    }
  })
  // console.log(product);
  const {mutate} = useMutation({
    mutationKey: ['details'],
    mutationFn: async (addData) => {
      const res = await axios.post('/user/create-bookings',addData)
      return res
    }
  })
  return (
    <Container>
      <div className="flex items-center">
        <div className=" flex  flex-col md:flex-row  my-20">
          <div className="relative max-w-[350px] group">
            <img
              className="rounded-lg transform scale-105"
              src={product?.data?.img}
              alt="img"
            />
            <span className=" group-hover:shadow-[0px_0px_30px_2px_#0d87f8] group-hover:rotate-180 duration-500 z-30 flex justify-center items-center bg-gradient-to-tr from-[#0d87f8] to-[#70c4ff]  absolute -bottom-6 left-1/2 transform -translate-x-1/2  rounded-full w-[40px] h-[40px] bg-white">
              <svg
                width={25}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="style=linear">
                    <g id="add">
                      <path
                        id="vector"
                        d="M11.998 5.84424L11.998 18.1604"
                        stroke="#9EE6FD"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                      <path
                        id="vector_2"
                        d="M18.1561 12.002L5.83998 12.0019"
                        stroke="#9EE6FD"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <span className="bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300  absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[50px] group-hover:h-[50px]"></span>
            <span className="bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500  absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[60px] group-hover:h-[60px] hover:duration-300 "></span>
          </div>
          <div className="space-y-12 max-w-[350px] rounded-tr-lg rounded-br-lg md:w-[350px] text-center p-10 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
            <div className="space-y-1">
              <h2 className="text-3xl font-medium text-gray-700 text-center font-sans">
                {product?.data?.name}
              </h2>
              <p className="font-sans  text-gray-500">@_arif</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-gray-500 text-sm font-sans"></p>
                <p className="text-3xl tracking-wider text-gray-700"></p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-sm font-sans">Following</p>
                <p className="text-3xl tracking-wider text-gray-700">{product?.data?.price}$</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-sm font-sans">Followers</p>
                <p className="text-3xl tracking-wider text-gray-700">{product?.data?.ratings}</p>
              </div>
            </div>
            <div>
              <Link to={'/addCart'}><button className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full">
                ADD CART
              </button></Link>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-white">
          <form className="p-12">
            <h1 className="backdrop-blur-sm text-4xl pb-8">ADD PRODUCT</h1>
            <div className="space-y-5">
              {/* name */}
              <label htmlFor="name" className="block">Name</label>
              <div className="relative">
                <input onBlur={(e) => setUserName(e.target.value)} id="name" type="text" placeholder="User Name" className="p-3 block w-full pl-10 drop-shadow-lg outline-none" />
                <span className="absolute top-1/4 left-2"><svg viewBox="0 0 24 24" fill="none" className="inline-block w-6" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z" fill="#000000"></path><rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="#000000"></rect></g></svg></span>
              </div>
              {/* email */}
              <label htmlFor="email" className="block">Email</label>
              <div className="relative">
                <input onBlur={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="example@gmail.com" className="p-3 block w-full pl-10 drop-shadow-lg outline-none" />
                <span className="absolute top-1/4 left-2"><svg viewBox="0 0 24 24" fill="none" className="inline-block w-6" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z" fill="#000000"></path><rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="#000000"></rect></g></svg></span>
              </div>
              {/* date */}
              <label htmlFor="date" className="block">Date</label>
              <div className="relative">
                <input onBlur={(e) => setDate(e.target.value)} id="date" type="date" placeholder="" className="p-3 block w-full pl-10 drop-shadow-lg outline-none" />
                <span className="absolute top-1/4 left-2"><svg viewBox="0 0 24 24" fill="none" className="inline-block w-6" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z" fill="#000000"></path></g></svg></span>
              </div>
            </div>
            {/* button type will be submit for handling form submission*/}
            <button onClick={() => mutate({userName,email,date,image:product?.data?.img,name:product?.data?.name,price:product?.data?.price,ratings:product?.data?.ratings})} type="button" className="py-2 px-5 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Submit</button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Details;