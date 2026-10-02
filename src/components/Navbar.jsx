import { memo } from "react";
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
  return (
    <nav className="nav" aria-label="Main Navigation">
      <ul className="nav__list">
        {NAV_LINKS.map(({ id, name, icon, path }) => (
          <li className="nav__item" key={id}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "nav__link active-nav" : "nav__link"
              }
              aria-label={name}
            >
              {icon}
              <span className="nav__name">{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(Navbar);
