import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
} from "react-icons/fa";

const NAV_LINKS = [
  {
    id: "home",
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },
  {
    id: "about",
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },
  {
    id: "experience",
    name: "Experience",
    icon: <FaBriefcase className="nav__icon" />,
    path: "/experience",
  },
  {
    id: "contact",
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav" aria-label="Main Navigation">
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {NAV_LINKS.map(({ id, name, icon, path }) => (
            <li className="nav__item" key={id}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "nav__link active-nav" : "nav__link"
                }
                onClick={() => setShowMenu(false)}
              >
                {icon}
                <span className="nav__name">{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={showMenu}
        className={`${
          showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
        }`}
        onClick={() => setShowMenu((prev) => !prev)}
      ></button>
    </nav>
  );
};

export default memo(Navbar);
