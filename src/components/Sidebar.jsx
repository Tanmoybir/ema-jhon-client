import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const navLinks = [
        { id: 1, name: "HOME", link: '/' },
        { id: 1, name: "ABOUT", link: '/about' },
        { id: 1, name: "CONTACT", link: '/contact' },
    ]
    return (
        <div className="p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <ul className="flex flex-col w-full items-center  gap-4">
                {/* Navbar menu content here */}
                {
                    navLinks.map(item =>
                        <li className="w-full px-3 py-2"  key={item.id}>
                            <NavLink to={item.link}className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ?
                            "bg-green-600 text-xl px-3 py-2 rounded-md"
                            :
                            "text-xl rounded-md bg-slate-300  px-3 py-2"
                    }
                    >
                                {item.name}
                            </NavLink>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default Sidebar;