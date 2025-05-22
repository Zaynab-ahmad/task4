import MainBtn from "../../Components/Buttons/MainBtn/MainBtn";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

type NavLink = {
  label: string;
  href: string;
};

type NavBarProps = {
  navLinks: NavLink[];
};

export default function NavBar({ navLinks }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="NavBar Container Flex Between Items">
      <img src="/Icons/Logo.svg" alt="FloraLogo" className="LogoImg" />

      {/* Desktop Nav */}
      <nav className="DesktopNav">
        <ul className="NavLinks Flex Between Items">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <li
                key={index}
                className={`NavItems ${isActive ? "Active" : ""}`}
              >
                <Link to={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="LoginBtn">
        <MainBtn btnTxt="Login" />
      </div>

      <img
        src={menuOpen ? "/Icons/close.svg" : "/Icons/bars.svg"}
        alt="Toggle Menu"
        onClick={handleMenuToggle}
        className="MenuIcon"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation menu"
      />

      <div className={`MobileMenu FlexCol Items ${menuOpen ? "Show" : ""}`}>
        <ul className="NavMenuLinks FlexCol">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <li
                key={index}
                className={`NavMenuItems ${isActive ? "Active" : ""}`}
              >
                <Link to={link.href} onClick={handleMenuToggle}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="LoginBtnMenu">
          <MainBtn btnTxt="Login" />
        </div>
      </div>
    </div>
  );
}
