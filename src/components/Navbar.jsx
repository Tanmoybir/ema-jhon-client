import { Link, NavLink } from "react-router-dom";
import Container from "./util/Container";


const Navbar = () => {
    const navLinks = [
        { id: 1, name: "HOME", link: '/' },
        { id: 1, name: "ABOUT", link: '/about' },
        { id: 1, name: "CONTACT", link: '/contact' },
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
                    <Link to={'/login'}><button  className="btn btn-ghost text-xl">Login</button></Link>
                </div>
            </div>


        </Container>
    );
};

export default Navbar;