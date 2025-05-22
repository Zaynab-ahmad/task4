import Footer from "./Sections/Footer/Footer";
import NavBar from "./Sections/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function Root() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "New Property", href: "/new-property" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <NavBar navLinks={navLinks} />
      <Outlet />
      <Footer />
    </div>
  );
}
