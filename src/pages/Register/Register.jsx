import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { createUser, user, profile, googleSignIn } = useAuth()


    console.log(user);
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await createUser(email, password)
            await profile(name,image)
            console.log('User Created');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="max-w-[800px] mx-auto my-12 p-6 bg-white shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
            <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
                <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                    {/* Left side form */}
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <form onSubmit={handleRegister}>
                        <div className="flex flex-col space-y-4 mb-4">
                            <div className="flex flex-col space-y-4">
                                {/* name */}
                                <input onBlur={(e) => setName(e.target.value)} className="h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-blue-500" placeholder="Username" type="text" />
                                {/* photo url */}
                                <input onBlur={(e) => setImage(e.target.value)} className="h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-blue-500" placeholder="Photo URL" type="text" />
                                {/* email */}
                                <input onBlur={(e) => setEmail(e.target.value)} className="h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-blue-500" placeholder="Email" type="email" />
                                {/* password */}
                                <input onBlur={(e) => setPassword(e.target.value)} className="h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-blue-500" placeholder="Password" type="password" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 mb-6">
                            <input type="checkbox" className="h-4 w-4 border focus:outline-none " />
                            <label className="text-sm font-medium text-gray-700" htmlFor="keep-signed-in">
                                Keep me signed in
                            </label>
                        </div>
                        {/* Login Button */}
                        <button type="submit" className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group"> Sign In <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white"> Let{`'`}s go </span> <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>  <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span> <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>  <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span> </button>
                    </form>
                    <p className="text-sm mt-6 flex gap-2">
                        Did you{' '}
                        <a className="text-blue-600" href="#">  {' '} forget your password? </a>
                    </p>
                </div>
                {/* Right side content */}
                <div className="w-full sm:w-1/2">
                    <p className="text-sm mb-6">If you already have an account click the button below to create your account.</p>
                    <Link to={'/login'}><button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-black text-white">Sign In</button></Link>
                    <p className="text-center my-4">OR</p>
                    <button onClick={() => googleSignIn()} className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-blue-600 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white mr-2"  >  {' '} <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />{' '} </svg>
                        SIGN IN WITH GOOGLe
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-blue-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white mr-2" > {' '} <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />{' '} </svg>
                        SIGN IN WITH TWITTER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;