import { Link, NavLink } from "react-router-dom";
import Container from "./util/Container";
import useAuth from "../hooks/useAuth";


const Navbar = () => {
    const { user, logOut } = useAuth()
    const navLinks = [
        { id: 1, name: "HOME", link: '/' },
        { id: 2, name: "ABOUT", link: '/about' },
        { id: 3, name: "CONTACT", link: '/contact' },
    ]
    return (
        <Container>
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex justify-between items-center">
                <div className="px-2 mx-2">Navbar Title</div>
                <div className="flex-none hidden lg:block">
                    <ul className="flex items-center  gap-4">
                        {/* Navbar menu content here */}
                        {
                            navLinks.map(item =>
                                <li className="" key={item.id}>
                                    <NavLink to={item.link}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ?
                                                "bg-green-600 text-xl px-3 py-2 rounded-md"
                                                :
                                                "text-xl rounded-md bg-slate-300 px-3 py-2"
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>)
                        }
                    </ul>
                </div>
                <div className="">
                    {
                        user?.email ? <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><button onClick={() => logOut()}  className="btn btn-ghost text-xl">Log Out</button></li>
                                </ul>
                            </div>
                        </> :
                            <Link to={'/login'}><button className="btn btn-ghost text-xl">Login</button></Link>
                    }

                </div>
            </div>


        </Container >
    );
};

export default Navbar;