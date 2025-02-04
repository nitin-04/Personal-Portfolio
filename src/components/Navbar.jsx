import { NavLink } from "react-router-dom";
import "./navbar.css"
import { useState } from "react";
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const links = [
      {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav__icon' />,
        path: '/',
      },
    
      {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav__icon' />,
        path: '/about',
      },
    
      {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav__icon' />,
        path: '/portfolio',
      },
    
      {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon' />,
        path: '/contact',
      },
    ];

    return (
        <nav className="nav">
            <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu "}`}>
                <ul className="nav__list">
                    {links.map(({ name, icon, path }, index) => {
                        return (
                            <li className="nav__item" key={index}>
                                <NavLink to={path} className={({ isActive }) => isActive ?
                                    "nav__link active-nav" : "nav__link"}
                                    onClick={() => setShowMenu(!showMenu)}
                                    >
                                    {icon}
                                    <h3 className="nav__name">{name}</h3>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className={`${showMenu ? "nav__toggle animate-toggle" : "nav__toggle "}`} onClick={() => setShowMenu(!showMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navbar;